import datetime
from django.db import models
from django.utils import timezone


class Novedad(models.Model):
    titulo = models.CharField(max_length=200)
    texto =  models.CharField(max_length=10000)
    fecha = models.DateTimeField('Fecha de publicación')
    def __str__(self):
        return self.titulo
    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.fecha <= now

class Imagen(models.Model):
    novedad = models.ForeignKey(Novedad)
    imagen =  models.ImageField()
