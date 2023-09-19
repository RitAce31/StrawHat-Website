from rest_framework import serializers
from .models import Character, CharacterDetails


class CharSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = (
            'char_id', 'char_name', 'char_desc', 'char_pos', 'char_img', 'char_poster'
        )


class CharDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CharacterDetails
        fields = (
            'char_id', 'char_name', 'char_bounty', 'char_img', 'char_fruitname', 'char_desc'
        )
