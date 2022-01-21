from django.db.models import fields
from .models import *
from rest_framework import serializers
from django_restql.mixins import DynamicFieldsMixin

class CountySerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = County
        fields = ('id', 'name', 'state', 'zipcode', 'fips')


class ClientQuoteSerializer(serializers.ModelSerializer):
    dob = serializers.DateField(format='%Y-%m-%d', input_formats=['%m/%d/%Y'])
    class Meta:
        model = ClientQuote
        fields = ('id', 'full_name', 'zipcode', 'email', 'phone_number', 'dob')