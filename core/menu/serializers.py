# from rest_framework import serializers
# from .models import category, item

# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = category
#         fields = ['id', 'name', 'image']


# class ItemSerializer(serializers.ModelSerializer):

#     category = serializers.CharField(source='category.name')
#     class Meta:
#         model = item
#         fields = ['id', 'name', 'description', 'image', 'category']


# serializers.py
from rest_framework import serializers
from .models import category, item

class CategorySerializer(serializers.ModelSerializer):
    icon = serializers.SerializerMethodField()

    class Meta:
        model = category
        fields = ['id', 'name', 'image','icon']
    
    def get_icon(self, obj):
        if obj.image:
            return f"/media/{obj.image.name}"
        return None

class ItemSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    categoryId = serializers.IntegerField(source='category.id')

    class Meta:
        model = item
        fields = ['id', 'name', 'description', 'image','price','time','categoryId']

    def get_image(self, obj):
        if obj.image:
            return f"/media/{obj.image.name}"
        return None
