from rest_framework import generics
from rest_framework.views import APIView

from .marketplace import GetCounty, GetPlan, SearchPlans, SearchProvider
from .models import *
from .serializers import *
from .proxy import DRFResponseWrapper, ProviderResponseWrapper

class GetQuoteList(generics.CreateAPIView):
    queryset = ClientQuote.objects.all()
    serializer_class = ClientQuoteSerializer


class CountyList(generics.ListAPIView):
    serializer_class = CountySerializer
    def get_queryset(self):
        # Only find when 5 digits
        if self.kwargs['zipcode'] > 1000 and self.kwargs['zipcode'] < 100000:
            county_objs = County.objects.filter(zipcode=self.kwargs['zipcode'])
            if county_objs:
                return county_objs
            # If found no county, then fetch data from API
            else:
                market_objs = GetCounty(self.kwargs['zipcode'])
                # If found from API, then save to database
                if market_objs != 404:
                    county_obj_list = []
                    for market_obj in market_objs:
                        county_obj = County.objects.create(**market_obj)
                        county_obj_list.append(county_obj)
                    return county_obj_list
                return None
        return None


class PlanDetail(APIView):
    def get(self, request, plan_id):
        return DRFResponseWrapper(GetPlan(plan_id))


class PlanList(APIView):
    def post(self, request):
        return DRFResponseWrapper(SearchPlans(request.data))


class ProviderList(APIView):
    def get(self, request, zipcode, q):
        return ProviderResponseWrapper(SearchProvider(zipcode, q, "Individual"), SearchProvider(zipcode, q, "Facility"), SearchProvider(zipcode, q, "Group"))