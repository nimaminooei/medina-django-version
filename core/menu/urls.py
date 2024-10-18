from django.urls import path
from .views import CategoryListView, ItemListView

urlpatterns = [
    path('menu/categories/', CategoryListView.as_view(), name='category-list'),
    path('menu/items/', ItemListView.as_view(), name='item-list'),
]
