from django.urls import path
from main.views import show_main, create_product, show_xml, show_json, show_xml_by_id, show_json_by_id, register, login_user, logout_user, add_amount, decrement_amount, delete_product, edit_product, show_json_by_user, show_xml_by_user, get_product_json, add_product_ajax, edit_product_ajax, create_product_flutter

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
    path('get-product/', get_product_json, name='get_product_json'),
    path('create-product-ajax/', add_product_ajax, name='add_product_ajax'),
    path('register/', register, name='register'),
    path('login/', login_user, name='login'),
    path('logout/', logout_user, name='logout'),
    path('increase-product-amount/<int:id>/', add_amount, name='add_amount'),
    path('decrement-product-amount/<int:id>/', decrement_amount, name='decrement_amount'),
    path('delete-product/<int:id>/', delete_product, name='delete_product'),
    path('edit-product/<int:id>/', edit_product, name='edit_product'),
    path('edit-product-ajax/<int:id>/', edit_product_ajax, name='edit_product_ajax'),
    path('create-flutter/', create_product_flutter, name='create_product_flutter'),
]
