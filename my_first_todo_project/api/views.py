from django.shortcuts import render
from rest_framework import status
from api.models import ToDo
from api.serializers import ToDoSerializer, CreateToDoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class ListToDoView(APIView):
    serializer_class = ToDoSerializer  # serializer for GET (all fields)

    def get(self, request, format=None):
        queryset = ToDo.objects.all()  # get all object (no filter)
        return Response(
            [ToDoSerializer(obj).data for obj in queryset], status=status.HTTP_200_OK
        )  # pass each object obtained through serializer


class CreateToDoView(APIView):
    serializer_class = (
        CreateToDoSerializer  # serializer for POST (only requires some fields)
    )

    def post(self, request, format=None):
        # POST reads request data from body
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():  # data is valid if it goes OK through serializer
            to_do = serializer.data.get("to_do")  # important to use .get()
            description = serializer.data.get("description")
            due_date = serializer.data.get("due_date")
            todo_status = False  # default value, not passed through request
            todo = ToDo(  # creating ToDo given data in request body
                to_do=to_do,
                description=description,
                due_date=due_date,
                todo_status=todo_status,
            )
            if todo.is_due_date_valid():  # adding validation to check due date
                todo.save()  # adding ToDo to database
                # Pass created ToDo (serialized through GET serializer) as response:
                return Response(
                    ToDoSerializer(todo).data, status=status.HTTP_201_CREATED
                )
            # If due date is not greater than today, return error:
            return Response(
                {"Bad Request": "Due date not valid"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # If data is not valid (in check through serializer), return error:
        return Response(
            {"Bad Request": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST
        )
