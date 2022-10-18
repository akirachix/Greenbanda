from django.shortcuts import render

from BandaApp.models import Cart, Delivery_details, Notification, Order, Payment, Product, Supplier, User, Vendor
from BandaApp.serializers import CartSerializer, Delivery_detailsSerializer, NotificationSerializer, OrderSerializer, PaymentSerializer, ProductSerializer, SupplierSerializer, UserSerializer, VendorSerializer
from rest_framework import viewsets

# Create your views here.
class VendorViewSet(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer

class SupplierViewSet(viewsets.ModelViewSet):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer


class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer


class Delivery_detailsViewSet(viewsets.ModelViewSet):
    queryset = Delivery_details.objects.all()
    serializer_class = Delivery_detailsSerializer