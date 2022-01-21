from django.db import models
from django.conf import settings
from django.dispatch import receiver
from .send_mail import notify_new_user_get_quote

class County(models.Model):
    name = models.CharField(max_length=100)
    state = models.CharField(max_length=2)
    zipcode = models.CharField(max_length=5)
    fips = models.CharField(max_length=5)

    class Meta:
        ordering = ['zipcode']

    def __str__(self):
        return self.name + ", " + self.state + " " + self.zipcode


class ClientQuote(models.Model):
    full_name = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=5)
    email = models.EmailField(max_length=100)
    phone_number = models.CharField(max_length=10)
    dob = models.DateField(default=None, blank=True, null=True)


@receiver(models.signals.post_save, sender=ClientQuote)
def GetQuoteV1(sender, instance, created, **kwargs):
    if created:
        notify_new_user_get_quote(instance.full_name, instance.email, instance.phone_number, instance.zipcode)


class Person(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dob = models.DateField()
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    has_med = models.BooleanField(default=False)
    is_pregnant = models.BooleanField(default=False)
    is_parent = models.BooleanField(default=False)
    uses_tobacco = models.BooleanField(default=False)
    
    utilization_level = models.IntegerField(default=0)

    def __str__(self):
        return self.first_name + " " + self.last_name

class Household(models.Model):
    income = models.IntegerField(default=0)
    members = models.ForeignKey(Person, on_delete=models.DO_NOTHING)
    address = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=10)
    county = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
