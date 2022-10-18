from dataclasses import fields
from BandaApp.models import Cart, Delivery_details, Notification, Order, Payment, Product, Supplier, User, Vendor
from rest_framework import serializers

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ("first_name", "last_name","address", "phone_number","delivery_location","password","amount")

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = ("first_name", "last_name","address", "phone_number","password","location","date_and_time")

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ("message", "tittle","date_of_notification")

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("user_name", "password","phone_number")

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("product_name", "product_size","product_quantity","product_price")

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ("products_name", "products_size","products_quantity","products_price")

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ("message", "title","date_of_notification","order_id","order_customer_id","type","order_number","description")

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ("message", "title","date_of_notification","payment_type","order_id","customer_id","total_payment")

class Delivery_detailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivery_details
        fields = ("pick_up_location", "order_date","delivery_date","delivery_id","delivery_customer_id","delivery_by","delivery_description")


