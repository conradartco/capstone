from rest_framework import status
from .models import Favorites
from .serializers import FavoritesSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404

# GET all favorite movies (Auth Only)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_favorites(request):
    try:
        favorites = Favorites.objects.filter(user=request.user)
    except ObjectDoesNotExist:
        return Response({"error": "No favorites exist with that user"})

    serializer = FavoritesSerializer(favorites, many=True)
    return Response(serializer.data)

# POST new favorite movie (Auth Only)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_favorite(request):
    serializer = FavoritesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# DELETE movie from favorites (Auth Only)
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_favorite(request, movieId):
    favorite = get_object_or_404(Favorites, movie_id=movieId)
    favorite.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)