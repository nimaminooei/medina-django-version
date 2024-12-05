from django.db import models
from adminsortable.models import SortableMixin

class category(SortableMixin):
    name = models.CharField(max_length=255, unique=True, null=False, blank=False)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    order = models.PositiveIntegerField(default=0, editable=False, db_index=True)  # فیلد ترتیب

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order']  # مرتب‌سازی بر اساس ترتیب

class item(SortableMixin):
    category = models.ForeignKey(category, on_delete=models.SET_NULL, null=True, blank=False)
    name = models.CharField(max_length=255, unique=True, null=False, blank=False)
    price = models.IntegerField(null=True)
    time = models.IntegerField(null=True)
    description = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    order = models.PositiveIntegerField(default=0, editable=False, db_index=True)  # فیلد ترتیب

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order']