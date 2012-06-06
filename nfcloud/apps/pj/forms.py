# -*- coding: utf-8 -*-

__all__ = ('PrestadorSignupForm',)


from django import forms
from models import PessoaJuridica
from nfcloud.common.municipios.models import Municipio
from django.contrib.localflavor.br.br_states import STATE_CHOICES
from django.contrib.localflavor.br.forms import BRCNPJField

class MunicipioChoiceField(forms.TypedChoiceField):
    def __init__(self, *args, **kwargs):
        super(MunicipioChoiceField, self).__init__(*args, **kwargs)

    def valid_value(self, value):
        return True
        
class PrestadorSignupForm(forms.ModelForm):
    cnpj = BRCNPJField(
        error_messages={'invalid': "CNPJ invalido",
                        'digits_only': "Este campo requer apenas numeros",
                        'max_digits': "Este campo requer 14 digitos"},
        label="CNPJ", required=True)

    municipio = MunicipioChoiceField(
        label="Municipio", required=True)  

    def clean_municipio(self):
        pk = self.cleaned_data['municipio']

        try:
            obj = Municipio.objects.get(pk=pk)
        except Municipio.DoesNotExist:
            raise ValidationError("Municipio invalido")

        return obj

    class Meta:
        model = PessoaJuridica
        exclude = ('password',)
