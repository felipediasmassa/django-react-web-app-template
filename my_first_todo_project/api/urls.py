from django.urls import path
from api.views import ListToDoView, CreateToDoView

# All these URLs have already been routed through "/api" (e.g.: /api/to-dos)
urlpatterns = [
    path("to-dos", ListToDoView.as_view()),
    path("create-to-do", CreateToDoView.as_view()),
]
