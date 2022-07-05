from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import Resume
from django.views.decorators.csrf import csrf_exempt
from .serializers import ResumeSerializer
from rest_framework import viewsets
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
# Create your views here.


# @csrf_exempt
# def Resume(request):
  
    # if request.method == 'GET':
    #     snippets = Resume.objects.all()
    #     serializer = ResumeSerializer(snippets, many=True)
    #     print(serializer.data)
    #     return JsonResponse(serializer.data, safe=False)

    # elif request.method == 'POST':
    #     data = JSONParser().parse(request)
    #     serializer = SnippetSerializer(data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return JsonResponse(serializer.data, status=201)
    #     return JsonResponse(serializer.errors, status=400)\

class ResumeViewSet(viewsets.ModelViewSet):
  
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
    # permission_classes = [IsAuthenticated|ReadOnly]
