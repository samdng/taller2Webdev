from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from .models import Author
# Create your views here.

def index(request):
    autores = Author.objects.all()
    template = loader.get_template("books/index.html")
    context = {
        "autores":autores,
    }
    return HttpResponse(template.render(context,request))