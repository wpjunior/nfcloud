# Create your views here.

__all__ = ('PrestadorSignupView',)

from django.views.generic import FormView
from nfcloud.common.views import GetMunicipioMixIn
from forms import *

class PrestadorSignupView(GetMunicipioMixIn, FormView):
    """
    Formulario para validar a inscricao de uma empresa prestadora de servicos
    """
    form_class = PrestadorSignupForm
    template_name = "signup/prestador.html"
