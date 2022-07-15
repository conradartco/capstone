from rest_framework import status
from .models import Watchlist
from .serializers import WatchlistSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404

# GET all movies from watchlist (Auth Only)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_watchlist(request):
    try:
        watchlist = Watchlist.objects.filter(user=request.user)
    except ObjectDoesNotExist:
        return Response({"error": "No favorites exist with that user"})

    serializer = WatchlistSerializer(watchlist, many=True)
    return Response(serializer.data)

# POST movie to watchlist (Auth Only)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_watchlist(request):
    serializer = WatchlistSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# DELETE movie from watchlist (Auth Only)
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_watchlist(request, movieId):
    watchlist = get_object_or_404(Watchlist, movie_id=movieId)
    watchlist.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)