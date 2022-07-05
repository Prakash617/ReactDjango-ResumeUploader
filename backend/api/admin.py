from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Resume)
class AuthorAdmin(admin.ModelAdmin):
    list_display =  ['name','email','state']