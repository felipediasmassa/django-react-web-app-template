from django.urls import path
from frontend.views import index

urlpatterns = [
    path("", index),  # rendering index view when path is root
    path("new", index),  # rendering index view when path is /new
]
