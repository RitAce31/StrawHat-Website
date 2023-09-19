from django.contrib import admin
from .models import Character
from .models import CharacterDetails
# Register your models here.

admin.site.register(Character)
admin.site.register(CharacterDetails)
