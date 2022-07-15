from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_watchlist),
    path('add/', views.add_watchlist),
    path('remove/<str:movieId>/', views.remove_watchlist),
]