from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .models import Autor
from django.urls import reverse
from .forms import AutorForm


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

def new_author(request):
    if request.method == 'POST':
        form = AutorForm(request.POST)

        if form.is_valid():
            nombre = form.cleaned_data['first_name']
            apellido = form.cleaned_data['last_name']
            pais  = form.cleaned_data['country']
            author = Autor(first_name=nombre,last_name=apellido,country=pais)
            author.save()
            return HttpResponseRedirect(reverse('authors'))
    
    else:
        form = AutorForm()

    return render(request, 'books/create_authors.html', {'form':form})

