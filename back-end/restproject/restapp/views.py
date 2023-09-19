from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Character, CharacterDetails
from .serializers import CharSerializer, CharDetailsSerializer
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from .entities import ReturnModel
import json
from django.db.models import Max

# Create your views here.


@api_view(['GET'])
def GetCharacter(self):

    arr = Character.objects.all()
    serializer = CharSerializer(arr, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'DELETE'])
def GetCharDetails(request, id):

    if request.method == 'GET':
        temp = CharacterDetails.objects.filter(char_id=id).count()
        if temp > 0:
            arr = CharacterDetails.objects.get(char_id=id)
            serializer = CharDetailsSerializer(arr, many=False)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({}, status=status.HTTP_204_NO_CONTENT)

    if request.method == 'DELETE':
        temp = Character.objects.filter(char_id=id).count()
        model = ReturnModel()
        if temp > 0:
            Character.objects.get(char_id=id).delete()
            temp1 = CharacterDetails.objects.filter(char_id=id).count()
            if temp1 > 0:
                CharacterDetails.objects.get(char_id=id).delete()
                model.setCode("200")
                model.setMessage(
                    "Character and its details deleted successfully.")
                model.setReturnValue(str(id))
                return Response(json.dumps(model.__dict__), status=status.HTTP_200_OK)
        else:
            model.setCode("204")
            model.setMessage("Error while deleting character and its details.")
            model.setReturnValue(str(id))
            return Response(json.dumps(model.__dict__), status=status.HTTP_201_CREATED)


@api_view(['POST'])
def AddCharacter(request):
    serializer = CharSerializer(data=request.data)
    model = ReturnModel()
    if serializer.is_valid():
        id = Character.objects.aggregate(Max('char_id'))['char_id__max']
        id += 1
        serializer.validated_data['char_id'] = id
        print(id)
        serializer.save()
        model.setReturnValue(str(id))
        model.setCode("200")
        model.setMessage("Character has been added.")
        return Response(json.dumps(model.__dict__), status=status.HTTP_201_CREATED)
    else:
        model.setCode("201")
        model.setMessage("There is some error adding the element")
        return Response(json.dumps(model.__dict__), status=status.HTTP_201_CREATED)


@api_view(['POST'])
def AddCharDetails(request):
    serializer = CharDetailsSerializer(data=request.data)
    model = ReturnModel()
    if serializer.is_valid():
        serializer.save()
        model.setReturnValue(str(serializer.data['char_id']))
        model.setCode("200")
        model.setMessage("Character Details has been added.")
        return Response(json.dumps(model.__dict__), status=status.HTTP_201_CREATED)
    else:
        model.setCode("201")
        model.setMessage("There is some error adding the element")
        return Response(json.dumps(model.__dict__), status=status.HTTP_201_CREATED)
