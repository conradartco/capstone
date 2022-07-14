from django.urls import path
from . import views

urlpatterns = [
    path('movie/<str:movieId>/', views.get_all_reviews),
]