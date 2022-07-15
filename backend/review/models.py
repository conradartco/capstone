from django.db import models
from authentication.models import User

# Create your models here.
class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie_id = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    likes = models.IntegerField(default=0)