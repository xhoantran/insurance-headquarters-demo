from .base import *
import os

if os.environ.get("PRODUCTION") == "True":
    from .prod import *
else:
    from .dev import *
