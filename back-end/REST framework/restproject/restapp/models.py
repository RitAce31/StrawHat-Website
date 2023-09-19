from django.db import models

# Create your models here.


class Character(models.Model):

    char_id = models.IntegerField()
    char_name = models.CharField(max_length=50)
    char_desc = models.CharField(max_length=150)
    char_pos = models.CharField(max_length=150)
    char_img = models.CharField(max_length=1000)
    char_poster = models.CharField(max_length=1000)


class CharacterDetails(models.Model):

    char_id = models.IntegerField()
    char_name = models.CharField(max_length=50)
    char_bounty = models.CharField(max_length=18)
    char_img = models.CharField(max_length=10000)
    char_fruitname = models.CharField(max_length=50)
    char_desc = models.CharField(max_length=10000)
