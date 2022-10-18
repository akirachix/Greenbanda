from django.db import models
from datetime import datetime

# Create your models here.
class Vendor(models.Model):
    first_name = models.CharField(max_length=20,null=True)
    last_name = models.CharField(max_length=20,null=True)
    address = models.TextField(null=True)
    phone_number= models.CharField(max_length=15,null=True)
    delivery_location = models.CharField(max_length=15,null=True)
    password = models.CharField(max_length=16,null=True)
    amount = models.PositiveIntegerField()


class Supplier(models.Model):
    first_name = models.CharField(max_length=20,null=True)
    last_name = models.CharField(max_length=20,null=True)
    address = models.TextField(null=True)
    phone_number= models.CharField(max_length=15,null=True)
    location = models.CharField(max_length=15,null=True)
    password = models.CharField(max_length=16,null=True)
    date_and_time = models.DateTimeField(default=datetime.now)


class Notification(models.Model):
    message = models.CharField(max_length=50,null=True)
    tittle = models.CharField(max_length=25,null=True)
    date_of_notification = models.DateTimeField(default=datetime.now)

class User(models.Model):
    user_name = models.CharField(max_length=30,null=True)
    password = models.CharField(max_length=16,null=True)
    phone_number = models.CharField(max_length=16,null=True)

class Product(models.Model):
    product_name = models.CharField(max_length=50,null=True)
    product_size = models.CharField(max_length=15,null=True)
    product_quantity = models.CharField(max_length=10,null=True)
    product_price = models.CharField(max_length=10,null=True)


class Cart(models.Model):
    products_name = models.CharField(max_length=50,null=True)
    products_size = models.CharField(max_length=15,null=True)
    products_quantity = models.CharField(max_length=10,null=True)
    products_price = models.CharField(max_length=10,null=True)

class Order(models.Model):
    message =  models.CharField(max_length=50,null=True)
    title  =  models.CharField(max_length=20,null=True)
    date_of_notification = models.DateTimeField()
    order_id = models.CharField(max_length=20,null=True)
    order_customer_id =models.CharField(max_length=25,null=True)
    type = models.CharField(max_length=25,null=True)
    order_number = models.CharField(max_length=25,null=True)
    description = models.CharField(max_length=100,null=True)

class Payment(models.Model):
    message = models.CharField(max_length=100,null=True)
    title = models.CharField(max_length=100,null=True)
    date_of_notification = models.CharField(max_length=100,null=True)
    payment_type = models.CharField(max_length=100,null=True)
    order_id = models.CharField(max_length=100,null=True)
    customer_id = models.CharField(max_length=100,null=True)
    total_payment = models.CharField(max_length=100,null=True)


class Delivery_details(models.Model):
    pick_up_location = models.CharField(max_length=30,null=True)
    order_date = models.DateField()
    delivery_date = models.DateField()
    delivery_id = models.CharField(max_length=25,null=True)
    delivery_customer_id = models.CharField(max_length=25,null=True)
    delivery_by = models.CharField(max_length=25,null=True)
    delivery_description = models.CharField(max_length=30,null=True)

