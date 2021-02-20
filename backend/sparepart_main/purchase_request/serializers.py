from rest_framework import serializers
from .models import SitesPurchaseRequest, MainPurchaseRequest
from sites.serializers import SiteSerializer


class SitePRSerializer(serializers.ModelSerializer):
    class Meta:
        model = SitesPurchaseRequest
        fields = ['id','part_number', 'description', 'vendor_name', 'unit_price', 'quantity', 'total_price', 'pr_number', 'line_number', 'site_name', 'month',]
        depth = 1


class MainPRSerializer(serializers.ModelSerializer):
    site_name = SiteSerializer()
    class Meta:
        model = MainPurchaseRequest
        fields = ['id','part_number', 'description', 'vendor_name', 'unit_price', 'quantity', 'total_price', 'pr_number', 'line_number', 'site_name', 'month',]
        depth = 1