from django.urls import path
from .views import *
urlpatterns = [
    path('getquote/', GetQuoteList.as_view()),
    path('county/<int:zipcode>/', CountyList.as_view()),
    path('plan/search/', PlanList.as_view()),
    path('plan/<str:plan_id>/', PlanDetail.as_view()),
    path('provider/search/<int:zipcode>/<str:q>/', ProviderList.as_view()),
]
