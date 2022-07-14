# from rest_framework import status
from .models import Review
from .serializers import ReviewSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
# from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_reviews(request, movieId):
    reviews = Review.objects.filter(movie_id=movieId)
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)