
from django.urls import path, include
from rest_framework import routers
from .views import SparepartViewSet, LocalComparisonSparepartViewSet, RollerViewSet, SparePart_mn, SparePart_mp, SparePart_get, SparepartsListView, RollerListView, LocalSpareListView

router=routers.DefaultRouter()
router.register("spareparts", SparepartViewSet, basename='spareparts')
router.register("comparison_spareparts", LocalComparisonSparepartViewSet, basename='comparison_spareparts')
router.register("roller", RollerViewSet, basename='roller')

urlpatterns = [
    path('', include(router.urls)),
    path('spare_mn/', SparePart_mn.as_view(), name='list_spare_mn'),
    path('spare_mp/', SparePart_mp.as_view(), name='list_spare_mp'),
    path('spare_get/', SparePart_get.as_view(), name='list_spare_get'),
    path('sparelist/', SparepartsListView.as_view(), name='sparelist'),
    path('rollerlist/', RollerListView.as_view(), name='rollerlist'),
    path('localsparelist/', LocalSpareListView.as_view(), name='localsparelist'),
]