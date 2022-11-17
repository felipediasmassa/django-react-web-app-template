from rest_framework import serializers
from api.models import ToDo


class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = ("id", "to_do", "description", "created_at", "due_date", "status")
