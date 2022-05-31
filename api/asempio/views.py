from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render, get_object_or_404

from .models import Novedad

def novedades(request):
    list = Novedad.objects.values('titulo', 'fecha')#.order_by('-fecha')[:5]
    return list
