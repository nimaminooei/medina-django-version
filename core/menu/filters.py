import django_filters
from .models import item

class ItemFilter(django_filters.FilterSet):
    class Meta:
        model = item
        fields = {
            'name': ['exact', 'icontains'],   
            'category': ['exact'],          
            'description': ['icontains'],    
        }
