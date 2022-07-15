from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_favorites),
    path('add/', views.add_favorite),
    path('remove/<str:movieId>/', views.remove_favorite),
]