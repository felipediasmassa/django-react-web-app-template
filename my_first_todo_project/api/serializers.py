from rest_framework import serializers
from api.models import ToDo


class ToDoSerializer(serializers.ModelSerializer):
    """Serializer for GET method (show all fields)"""

    class Meta:
        model = ToDo
        fields = ("id", "to_do", "description", "created_at", "due_date", "todo_status")


class CreateToDoSerializer(serializers.ModelSerializer):
    """Serializer for POST method (show only fields to be passed by user)"""

    class Meta:
        model = ToDo
        fields = ("to_do", "description", "due_date")
