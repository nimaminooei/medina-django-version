from django.contrib import admin
from adminsortable.admin import SortableAdmin
from .models import category ,item
from django.contrib.auth.models import User, Group

admin.site.unregister(User)

admin.site.unregister(Group)


@admin.register(category)
class CategoryAdmin(SortableAdmin):
    list_display = ('name',)

@admin.register(item)
class ItemAdmin(SortableAdmin):
    list_display = ('name', 'category')
    list_filter = ('category',)