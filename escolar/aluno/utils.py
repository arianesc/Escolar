from functools import partial
import string
from django.utils.crypto import get_random_string


def gerar_codigo(prefix=None, length=32):
    prefix = prefix or ""
    random_length = length - len(prefix)
    if random_length <= 0:
        return prefix

    allowed = string.ascii_uppercase + string.digits
    random_string = get_random_string(length=random_length, allowed_chars=allowed)
    return "{}{}".format(prefix, random_string)
