from django.db import models

class Autor(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    country = models.CharField(max_length=30)

class Category(models.Model):
    author = models.CharField(max_length=30)

class Books(models.Model):
    author = models.ForeignKey(Autor, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=500)