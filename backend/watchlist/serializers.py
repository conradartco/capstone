from rest_framework import serializers
from .models import Watchlist

class WatchlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Watchlist
        fields = ['user_id', 'movie_id']