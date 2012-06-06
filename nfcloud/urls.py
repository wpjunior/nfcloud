from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

from nfcloud.apps.pj.views import PrestadorSignupView

urlpatterns = patterns('',
    url(r'^dashboard/', include('nfcloud.apps.dashboard.urls')),
    url(r'^signup/prestadores/', PrestadorSignupView.as_view()),
)
