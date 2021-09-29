from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='article')
urlpatterns = router.urls




# from django.urls import path
# from django.conf.urls import url 

# from .views import (
#     ArticleListView, 
#     ArticleDetialsView,
#     ArticleCreateView,
#     ArticleUpdateView,
#     ArticleDeleteView
#     )

# urlpatterns = [
#     url(r'^$', ArticleListView.as_view()),
#     path('create/',ArticleCreateView.as_view()),
#     url(r'^(?P<pk>\d+)/$', ArticleDetialsView.as_view()),
#     url(r'^(?P<pk>\d+)/update/$', ArticleUpdateView.as_view()),
#     url(r'^(?P<pk>\d+)/delete/$', ArticleDeleteView.as_view()),
# ]