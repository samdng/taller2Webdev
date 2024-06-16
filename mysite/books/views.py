from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Autor

# Create your views here.
def index(request):
    autores = Autor.objects.all()
    template = loader.get_template('books/index.html')
    context = {
        'autores':autores,
    }
    return HttpResponse(template.render(context, request))

def home(request):
    template = loader.get_template('index.html')
    context = {}
    return HttpResponse(template.render(context, request))

def authors(request):
    autores = Autor.objects.all()
    template = loader.get_template('books/authors.html')
    context = {'autores':autores,}
    return HttpResponse(template.render(context,request))
