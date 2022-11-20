from datetime import datetime
from django.db import models

# Create your models here.
class ToDo(models.Model):
    id = models.BigAutoField(primary_key=True)  # auto-incrementing ID used as PK
    to_do = models.CharField(max_length=100, default="", null=False)  # text field
    description = models.CharField(
        max_length=1000, default="", null=False
    )  # text field
    created_at = models.DateField(auto_now_add=True)  # auto date field (value = now)
    due_date = models.DateField(null=False)
    todo_status = models.BooleanField(default=False, null=False)  # boolean field

    def is_due_date_valid(self):
        """Checking if due date is later than creation date"""
        due_date = datetime.strptime(self.due_date, "%Y-%m-%d")
        if due_date < datetime.now():
            return False
        return True
