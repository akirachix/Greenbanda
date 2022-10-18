# Generated by Django 4.1.2 on 2022-10-13 10:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('products_name', models.CharField(max_length=50, null=True)),
                ('products_size', models.CharField(max_length=15, null=True)),
                ('products_quantity', models.CharField(max_length=10, null=True)),
                ('products_price', models.CharField(max_length=10, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Delivery_details',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pick_up_location', models.CharField(max_length=30, null=True)),
                ('order_date', models.DateField()),
                ('delivery_date', models.DateField()),
                ('delivery_id', models.CharField(max_length=25, null=True)),
                ('delivery_customer_id', models.CharField(max_length=25, null=True)),
                ('delivery_by', models.CharField(max_length=25, null=True)),
                ('delivery_description', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=50, null=True)),
                ('tittle', models.CharField(max_length=25, null=True)),
                ('date_of_notification', models.DateTimeField(default=datetime.datetime.now)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=50, null=True)),
                ('title', models.CharField(max_length=20, null=True)),
                ('date_of_notification', models.DateTimeField()),
                ('order_id', models.CharField(max_length=20, null=True)),
                ('order_customer_id', models.CharField(max_length=25, null=True)),
                ('type', models.CharField(max_length=25, null=True)),
                ('order_number', models.CharField(max_length=25, null=True)),
                ('description', models.CharField(max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=100, null=True)),
                ('title', models.CharField(max_length=100, null=True)),
                ('date_of_notification', models.CharField(max_length=100, null=True)),
                ('payment_type', models.CharField(max_length=100, null=True)),
                ('order_id', models.CharField(max_length=100, null=True)),
                ('customer_id', models.CharField(max_length=100, null=True)),
                ('total_payment', models.CharField(max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=50, null=True)),
                ('product_size', models.CharField(max_length=15, null=True)),
                ('product_quantity', models.CharField(max_length=10, null=True)),
                ('product_price', models.CharField(max_length=10, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Supplier',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=20, null=True)),
                ('last_name', models.CharField(max_length=20, null=True)),
                ('address', models.TextField(null=True)),
                ('phone_number', models.CharField(max_length=15, null=True)),
                ('location', models.CharField(max_length=15, null=True)),
                ('password', models.CharField(max_length=16, null=True)),
                ('date_and_time', models.DateTimeField(default=datetime.datetime.now)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=30, null=True)),
                ('password', models.CharField(max_length=16, null=True)),
                ('phone_number', models.CharField(max_length=16, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Vendor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=20, null=True)),
                ('last_name', models.CharField(max_length=20, null=True)),
                ('address', models.TextField(null=True)),
                ('phone_number', models.CharField(max_length=15, null=True)),
                ('delivery_location', models.CharField(max_length=15, null=True)),
                ('password', models.CharField(max_length=16, null=True)),
                ('amount', models.PositiveIntegerField()),
            ],
        ),
    ]
