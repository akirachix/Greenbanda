from django.contrib import admin
from .models import Cart, Delivery_details, Delivery_details, Order, Payment, Product, User, Vendor
from .models import Supplier
from .models import Notification

# Register your models here.

class VendorAdmin(admin.ModelAdmin):
    list_display = ('first_name','last_name','delivery_location','phone_number','password','amount')
    search_fields =('first_name','last_name','location','phone_number','password','amount')
admin.site.register(Vendor,VendorAdmin)

class SupplierAdmin(admin.ModelAdmin):
    list_dispaly = ('first_name','last_name','location','phone_number','password','date_and_time',)
    search_fields = ('first_name','last_name','location','phone_number','password','date_and_time',)
admin.site.register(Supplier,SupplierAdmin)

                                                                                                                                                                                                                                                                                                                                                        
class NotificationAdmin(admin.ModelAdmin):
    list_display =('tittle','date_of_notification','message',)
    search_fields= ('tittle','date_of_notification','message',)
admin.site.register(Notification,NotificationAdmin)


class UserAdmin(admin.ModelAdmin):
    list_display = ('user_name','password')
    search_fields = ('user_name','password')
admin.site.register(User,UserAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name','product_size')
    search_fields = ('product_name','product_size')
admin.site.register(Product,ProductAdmin)


class CartAdmin(admin.ModelAdmin):
    list_display = ('products_name','products_size','products_quantity','products_price')
    search_fields = ('products_name','products_size','products_quantity','products_price')
admin.site.register(Cart,CartAdmin)

class OrderAdmin(admin.ModelAdmin):
    list_display = ('message','date_of_notification','order_id','order_customer_id','type','order_number')
    search_fields = ('message','date_of_notification','order_id','order_customer_id','type','order_number')
admin.site.register(Order,OrderAdmin)

class PaymentAdmin(admin.ModelAdmin):
    list_display = ('message','title','date_of_notification','payment_type','order_id')
    search_fields = ('message','title','date_of_notification','payment_type','order_id')
admin.site.register(Payment,PaymentAdmin)


class Delivery_detailsAdmin(admin.ModelAdmin):
    list_display = ('pick_up_location','order_date','delivery_date','delivery_id','delivery_customer_id','delivery_by')
    search_fields = ('pick_up_location','order_date','delivery_date','delivery_id','delivery_customer_id','delivery_by')
admin.site.register(Delivery_details,Delivery_detailsAdmin)
