from django.urls import path
from api.views import ToDoView

urlpatterns = [
    path("todos", ToDoView.as_view()),
]
