# -*- coding: utf-8 -*-

from django.db import models
from nfcloud.common.municipios.models import Municipio
from django.contrib.localflavor.br.br_states import STATE_CHOICES

class PessoaJuridica(models.Model):
    cnpj = models.CharField(
        max_length=20,
        verbose_name="CNPJ",
        unique=True)
    
    nome = models.CharField(
        max_length=200,
        verbose_name="Nome")

    razao_social = models.CharField(
        max_length=200,
        verbose_name="Razao social")

    insc_municipal = models.CharField(
        verbose_name=u"Inscrição Municipal",
        max_length=20)

    logradouro = models.CharField(
        max_length=200)

    uf = models.CharField(
        choices=STATE_CHOICES,
        verbose_name="Estado",
        max_length=2)

    municipio = models.ForeignKey(Municipio)

    bairro = models.CharField(
        max_length=40)

    cep = models.CharField(
        verbose_name="CEP",
        max_length=9)

    numero = models.CharField(
        max_length=50)

    fone1 = models.CharField(
        verbose_name="Telefone 1",
        max_length=16,
        blank=True, null=True)

    fone2 = models.CharField(
        verbose_name="Telefone 2",
        max_length=16,
        blank=True, null=True)

    email = models.EmailField(
        verbose_name="E-Mail",
        blank=True, null=True)

    password = models.CharField(
        verbose_name="Senha",
        max_length=40,
        blank=True, null=True)

    simples = models.BooleanField(
        verbose_name=u"Esta empresa está enquadrada no Simples Nacional, conforme Lei Complementar n123/2006")

    created = models.DateTimeField(
        auto_now_add=True)

    class Meta:
        db_table = 'pessoa_juridica'
