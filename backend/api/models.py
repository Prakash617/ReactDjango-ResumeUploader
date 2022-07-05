import email
from operator import mod
from click import option
from django.db import models

# Create your models here.

locations = [
    ('kathmandu','kathmandu'),
    ('hetauda','hetauda'),
    ('hetauda','hetauda'),
    ('lalitpur','lalitpur'),
    ('Bhaktapur','Bhaktapur')
]

class Resume(models.Model):
    name = models.CharField(max_length=40)
    email = models.EmailField(null=True, blank=True)
    password = models.CharField(max_length=20)
    DOB = models.DateField()
    state = models.CharField(choices = locations ,max_length=20, default='kathmandu')
    job_location = models.CharField(max_length=40)
    img = models.ImageField(null= True)
    files = models.FileField(null= True)
    
    def __str__(self):
        return self.name
    