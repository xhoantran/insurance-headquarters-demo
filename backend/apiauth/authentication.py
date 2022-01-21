from rest_framework import authentication
from django.contrib.auth import get_user_model


class DrfAuthBackend(authentication.BaseAuthentication):
    def authenticate(self, username=None, password=None):
        UserModel = get_user_model()
        try:
            user = UserModel.objects.get(email=username)
            if user.check_password(password):
                return user
        except UserModel.DoesNotExist:
            return None
