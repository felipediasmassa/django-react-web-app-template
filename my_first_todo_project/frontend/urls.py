from django.urls import path
from frontend.views import index

urlpatterns = [
    path("", index),  # rendering index view when path is root
    path("add/", index),  # rendering index view when path is /add
    path("edit/<int:toDoId>", index),  # rendering index view when path is /edit
]
