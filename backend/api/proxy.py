# encoding: utf-8
from __future__ import unicode_literals
from __future__ import absolute_import
from rest_framework.response import Response
from requests.models import Response as RResponse


class InCompatibleError(Exception):
    pass


class DRFResponseWrapper(Response):
    """
    Wraps the requests' response
    """
    def __init__(self, data, *args, **kwargs):
        if not isinstance(data, RResponse):
            raise InCompatibleError

        status = data.status_code
        content_type = data.headers.get('content_type')

        try:
            content = data.json()
        except:
            content = data.content

        super(DRFResponseWrapper, self).__init__(content, status=status, content_type=content_type)


class ProviderResponseWrapper(Response):
    """
    Wraps the 3 requests' response
    """
    def __init__(self, data1, data2, data3, *args, **kwargs):
        if not (isinstance(data1, RResponse) and isinstance(data2, RResponse) and isinstance(data3, RResponse)):
            raise InCompatibleError

        status = data3.status_code
        content_type = data3.headers.get('content_type')

        try:
            content = data1.json() + data2.json() + data3.json()
        except:
            content = data1.content + data2.content + data3.content

        super(ProviderResponseWrapper, self).__init__(content, status=status, content_type=content_type)