from django.db import models

class Nfe(models.Model):
    numero = models.IntegerField()
    cod_verificacao = models.CharField(
        max_length=9)
    emissao = models.DateTimeField()
    cod_emissor = models.IntegerField()

    rps_numero = models.CharField(
        max_length=20)

    rps_daa = models.DateField()
    
    #TODO: adicionar tomador

    discriminacao = models.TextField(
        max_length=400)

    observacao = models.TextField()

    """
    valor_total = models.DecimalField()
    valor_deducoes = models.DecimalField()
    base_calculo = models.DecimalField()
    valor_iss = models.DecimalField()
    iss_retido = models.DecimalField()
    valor_inss = models.DecimalField()
    aliq_inss = models.DecimalField()
    valor_irrf = models.DecimalField()

    aliq_irrf = models.DecimalField()
    aliq_irrf = models.DecimalField()

    deducao_irrf = models.DecimalField()
    total_retencao = models.DecimalField()

    credito = models.DecimalField()
    cofins = models.DecimalField()
    """
