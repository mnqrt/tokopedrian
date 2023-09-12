from django.shortcuts import render

def show_main(request):
    context = {
        'name': 'Buku CP3',
        'amount': 12,
        'description': 'Ini buku contact person' 
    }

    return render(request, "main.html", context)
