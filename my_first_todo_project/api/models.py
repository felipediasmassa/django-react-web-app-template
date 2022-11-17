from django.db import models

# Create your models here.
class ToDo(models.Model):
    id = models.BigAutoField(primary_key=True)
    to_do = models.CharField(max_length=100, default="", null=False)
    description = models.CharField(max_length=1000, default="", null=False)
    created_at = models.DateField(auto_now_add=True)
    due_date = models.DateField(null=False)
    status = models.BooleanField(default=False, null=False)

    def is_due_date_valid(due_date, created_at):
        """Checking if due date is later than creation date"""
        if due_date < created_at:
            return False
        return True
