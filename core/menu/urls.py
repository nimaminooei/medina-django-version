from django.urls import path
from .views import CategoryListView, ItemListView

urlpatterns = [
    path('api/categories/', CategoryListView.as_view(), name='category-list'),
    path('api/items/', ItemListView.as_view(), name='item-list'),
]
