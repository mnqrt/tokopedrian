from django.urls import path
from main.views import show_main, create_product, show_xml, show_json, show_xml_by_id, show_json_by_id, register, login_user, logout_user, add_amount, decrement_amount, delete_product, edit_product, show_json_by_user, show_xml_by_user

app_name = 'main'

urlpatterns = [
    path('', show_main, name='show_main'),
    path('create-product', create_product, name='create_product'),
    path('xml/', show_xml, name='show_xml'), 
    path('json/', show_json, name='show_json'), 
    path('xml/<int:id>/', show_xml_by_id, name='show_xml_by_id'),
    path('json/<int:id>/', show_json_by_id, name='show_json_by_id'),
    path('json-by-user/', show_json_by_user, name='show_json_by_user'),
    path('xml-by-user/', show_xml_by_user, name='show_xml_by_user'),
    path('register/', register, name='register'),
    path('login/', login_user, name='login'),
    path('logout/', logout_user, name='logout'),
    path('increase-product-amount/<int:id>/', add_amount, name='add_amount'),
    path('decrement-product-amount/<int:id>/', decrement_amount, name='decrement_amount'),
    path('delete-product/<int:id>/', delete_product, name='delete_product'),
    path('edit-product/<int:id>/', edit_product, name='edit_product'),
]
