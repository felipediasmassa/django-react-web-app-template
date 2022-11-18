from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    """
    This view will make Django render index.html template as a whole, which is handled by React
    """
    return render(request, "frontend/index.html")
