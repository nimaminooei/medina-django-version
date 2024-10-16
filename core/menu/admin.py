from django.contrib import admin
from django.contrib.auth.models import User,Group
from .models import category,item


admin.site.register(item)
admin.site.register(category)


admin.site.unregister(User)
admin.site.unregister(Group)