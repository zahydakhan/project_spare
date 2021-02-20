from django.urls import path, include
from rest_framework import routers
from .views import SitesPRViewSet, MainPRViewSet, SitesOrdersListView, MainOrdersListView, MainOrdersFilterListView

router=routers.DefaultRouter()
router.register("sites_pr", SitesPRViewSet, basename='sites_pr')
router.register("main_pr", MainPRViewSet, basename='main_pr')

urlpatterns = [
    path('', include(router.urls)),
    path('siteorderlist/', SitesOrdersListView.as_view(), name='siteorderlist'),
    path('mainorderlist/', MainOrdersListView.as_view(), name='mainorderlist'),
    path('mainorderfilter/', MainOrdersFilterListView.as_view(), name='mainorderfilter'),
]