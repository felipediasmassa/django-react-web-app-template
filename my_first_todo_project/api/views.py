from django.shortcuts import render
from rest_framework import generics
from api.models import ToDo
from api.serializers import ToDoSerializer

# Create your views here.
class ToDoView(generics.CreateAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
