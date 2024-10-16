from rest_framework import serializers
from .models import category, item

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = category
        fields = ['id', 'name', 'image']


class ItemSerializer(serializers.ModelSerializer):

    category = serializers.CharField(source='category.name')
    class Meta:
        model = item
        fields = ['id', 'name', 'description', 'image', 'category']