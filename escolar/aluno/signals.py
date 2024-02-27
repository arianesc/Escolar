from django.db.models.signals import pre_save
from django.dispatch import receiver
from aluno.models import Aluno
import datetime


@receiver(pre_save, sender=Aluno)
def pre_save_aluno(sender, instance, **kwargs):
    ano = datetime.datetime.now().year
    try:
        ultimo_id = Aluno.objects.last().id
    except AttributeError:
        ultimo_id = 0

    instance.matricula = f"{ano}0{ultimo_id}"
