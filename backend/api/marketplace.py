import requests
from django.conf import settings
from .models import County

def GetCounty(zipcode):
    r = requests.get(f'https://marketplace.api.healthcare.gov/api/v1/counties/by/zip/{zipcode:05}?apikey={settings.MARKETPLACE_API_KEY}&year=2022')
    if r.status_code == 200:
      data = r.json()
      return data['counties']
    if r.status_code == 404:
      return 404

def SearchPlans(data):
  headers = {"Content-Type": "application/json"}
  try: 
    place = data.pop('place')
    county = County.objects.get(id=place)
    data['place'] = {"countyfips": county.fips, "state": county.state, "zipcode": county.zipcode}
  except:
    # Need to handle not found countyID
    pass
  return requests.post(f'https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey={settings.MARKETPLACE_API_KEY}', json=data, headers=headers)

def GetPlan(plan_id: str):
  return requests.get(f'https://marketplace.api.healthcare.gov/api/v1/plans/{plan_id}?apikey={settings.MARKETPLACE_API_KEY}&year=2022')

def SearchProvider(zipcode: str, q: str, providerType: str):
  return requests.get(f'https://marketplace.api.healthcare.gov/api/v1/providers/autocomplete?apikey={settings.MARKETPLACE_BACKUP_API_KEY}&q={q}&zipcode={zipcode}&type={providerType}')