from django.core.mail import send_mail
from django.conf import settings

def notify_new_user_get_quote(full_name, email, phone, zipcode):
    subject = 'New Quote Request'
    if settings.DEBUG is True:
        send_mail(subject, f'New customner just got quote\n\nFull name: {full_name}\nZipcode: {zipcode}\nEmail: {email}\nPhone number: {phone}', 'info@insuranceheadquarters.com', ['xhoantran@gmail.com'], fail_silently=False)
    else:
        send_mail(subject, f'New customner just got quote\n\nFull name: {full_name}\nZipcode: {zipcode}\nEmail: {email}\nPhone number: {phone}', 'info@insuranceheadquarters.com', ['cindytran@live.com'], fail_silently=False)