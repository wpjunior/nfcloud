__all__ = ('GetMunicipioMixIn',)

from responses import JSONResponse
from municipios.models import Municipio

class GetMunicipioMixIn(object):
    def _get_municipios(self):
        uf = self.request.GET.get('uf', None)

        lista = [
            (_id, nome)
            for _id, nome in
            Municipio.objects.filter(uf_sigla=uf).values_list('id_ibge', 'nome')]

        return JSONResponse(lista)

    def get(self, *args, **kwargs):
        action = self.request.GET.get('action', None)

        if action == 'getMunicipios':
            return self._get_municipios()

        return super(GetMunicipioMixIn, self).get(*args, **kwargs)
