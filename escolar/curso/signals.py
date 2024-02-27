from django.db.models.signals import pre_save
from django.dispatch import receiver
from curso.models import Curso
import datetime


@receiver(pre_save, sender=Curso)
def pre_save_curso(sender, instance, **kwargs):
    ano = datetime.datetime.now().year
    try:
        ultimo_id = Curso.objects.last().id
    except AttributeError:
        ultimo_id = 0

    instance.codigo = f"{ano}0{ultimo_id}"
