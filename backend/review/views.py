from rest_framework import status
from .models import Review
from .serializers import ReviewSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404

# GET all reviews for a movie
@api_view(['GET'])
@permission_classes([AllowAny])
def get_reviews(request, movieId):
    try:
        reviews = Review.objects.filter(movie_id=movieId)
    except ObjectDoesNotExist:
        return Response({"error": "No reviews exist with that movieId"})

    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)

# POST new review (Auth Only)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_review(request):
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# PUT to 'like' a review (Any User)
@api_view(['PATCH'])
@permission_classes([AllowAny])
def like_review(request, id):
    review = get_object_or_404(Review, id=id)
    serializer = ReviewSerializer(review, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)