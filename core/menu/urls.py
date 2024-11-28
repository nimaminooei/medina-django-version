# from django.urls import path
# from .views import CategoryListView, ItemListView

# urlpatterns = [
#     path('menu/categories/', CategoryListView.as_view(), name='category-list'),
#     path('menu/items/', ItemListView.as_view(), name='item-list'),
# ]

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.get_categories_and_items, name='categories-items'),
]
