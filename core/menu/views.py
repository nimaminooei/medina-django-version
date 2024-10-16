from django.shortcuts import render
from rest_framework import generics
from .models import category, item
from .serializers import CategorySerializer, ItemSerializer
from django_filters.rest_framework import DjangoFilterBackend
from .filters import ItemFilter
class CategoryListView(generics.ListAPIView):
    queryset = category.objects.all()
    serializer_class = CategorySerializer

class ItemListView(generics.ListAPIView):
    queryset = item.objects.all()
    serializer_class = ItemSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ItemFilter