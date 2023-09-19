from django.urls import path
from . import views

urlpatterns = [
    path('api/character-list/', views.GetCharacter, name='character-list'),
    path('api/character-list/<int:id>',
         views.GetCharDetails, name='character-details'),
    path('api/add-character', views.AddCharacter, name='add-character'),
    path('api/add-character-details',
         views.AddCharDetails, name='add-character-details'),

    #     path('api/delete-bounty-details', views.delBounty,
    #          name="delete-bounty-details")
]
