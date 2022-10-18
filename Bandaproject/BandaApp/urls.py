from django.urls import path, include
from BandaApp.views import VendorViewSet
from rest_framework import routers
from .views import CartViewSet, NotificationViewSet, OrderViewSet, PaymentViewSet, ProductViewSet, SupplierViewSet, UserViewSet, VendorViewSet

router = routers.DefaultRouter()
router.register(r"Vendor",VendorViewSet)
router.register(r"Supplier",SupplierViewSet)
router.register(r"Notification",NotificationViewSet)
router.register(r"User",UserViewSet)
router.register(r"Product",ProductViewSet)
router.register(r"Cart",CartViewSet)
router.register(r"Order",OrderViewSet)
router.register(r"Payment",PaymentViewSet)

urlpatterns=[
    path("",include(router.urls)),
]