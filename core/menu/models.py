from django.db import models

# Create your models here.
class category(models.Model):
    name = models.CharField(max_length=255,unique=True,null=False,blank=False)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    def __str__(self):
        return str(self.name)
class item(models.Model):
    category = models.ForeignKey(category, on_delete=models.SET_NULL, null=True, blank=False)
    name = models.CharField(max_length=255,unique=True,null=False,blank=False)
    price = models.IntegerField(null=True)
    time = models.IntegerField(null=True)
    description = models.CharField(max_length=255,null=True,blank=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    def __str__(self):
        return str(self.name)
