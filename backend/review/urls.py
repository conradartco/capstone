from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_review),
    path('<str:movieId>/', views.get_reviews),
]