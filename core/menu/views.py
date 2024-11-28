# from django.shortcuts import render
# from rest_framework import generics
# from .models import category, item
# from .serializers import CategorySerializer, ItemSerializer
# from django_filters.rest_framework import DjangoFilterBackend
# from .filters import ItemFilter
# class CategoryListView(generics.ListAPIView):
#     queryset = category.objects.all()
#     serializer_class = CategorySerializer

# class ItemListView(generics.ListAPIView):
#     queryset = item.objects.all()
#     serializer_class = ItemSerializer
#     filter_backends = [DjangoFilterBackend]
#     filterset_class = ItemFilter

# views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import category, item
from .serializers import CategorySerializer, ItemSerializer

@api_view(['GET'])
def get_categories_and_items(request):
    categories = category.objects.all()
    items = item.objects.all()
    
    category_serializer = CategorySerializer(categories, many=True)
    item_serializer = ItemSerializer(items, many=True)

    return Response({
        'categories': category_serializer.data,
        'items': item_serializer.data
    })
