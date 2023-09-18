# :shopping_cart: Tokopedrian :shopping: :green_book:
`Jalan jalan ke balikpapan, kalau shopping di Tokopedrian!`

## Tugas Individu 2
>1. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).

 - [x] Membuat sebuah proyek Django baru.

Awalnya, perlu ditentukan nama dari project Django nya. Pada tugas individu saya, saya membuat directory lokal sekaligus repository pada github dengan nama Tokopedrian. Setelahnya, saya menjalankan `python -m venv env` + `source env/bin/activate` untuk membuat sekaligus mengaktifkan Virtual environment dengan tujuan untuk melakukan isolasi pada package sekaligus dependencies untuk menghindari adanya konflik. Kemudian saya membuat projek Django dengan menjalankan  `django-admin startproject tokopedrian .` sekaligus membuat gitignore untuk mengurangi file yang tidak relevan. Terakhir, saya menghubungkan directory lokal dan github dan melakukan add, commit, push.

 - [x]  Membuat aplikasi dengan nama `main` pada proyek tersebut.

Saya menambahkan folder `main` pada `tokopedrian` melalui command `python manage.py startapp main`. Perlu diperhatikan bahwa aplikasi ini wajib ditambahkan pada list `INSTALLED_APPS` pada `settings.py`. 

 - [x] Melakukan *routing* pada proyek agar dapat menjalankan aplikasi `main`.

Pada langkah ini, kita menambahkan `main` pada list `urlpatterns` di file `urls.py` agar dapat `main` dapat diakses. Kemudian, kita akan membuat folder `templates` dengan file `main.html` didalamnya, file `html` ini bekerja sebagai kerangka dari tampilan web.

 - [x] Membuat model pada aplikasi `main` dengan nama `Item` dan memiliki atribut wajib sebagai berikut.
    + `name` sebagai nama item dengan tipe `CharField`.
    + `amount` sebagai jumlah item dengan tipe `IntegerField`.
    + `description` sebagai deskripsi item dengan tipe `TextField`.

Data yang kita simpan dalam aplikasi tentunya memiliki format. Hal ini diatur oleh `models.py` yang dilakukan dengan cara membuat Class `Product` dengan properti diatas. Karena aplikasi diekspektasikan untuk dapat melaksanakan CRUD, kita perlu untuk melakukan migrasi dengan cara `python manage.py makemigrations` + `python manage.py migrate`

 - [x] Membuat sebuah fungsi pada `views.py` untuk dikembalikan ke dalam sebuah template HTML yang menampilkan nama aplikasi serta nama dan kelas kamu.

Fungsi `show_main(request)` dibuat dengan tujuan untuk dapat melakukan render pada file `html` dengan `context` yang berisikan data yang ingin kita tampilkan. Tidak lupa juga untuk mengubah `main.html` agar dapat menampilkan data yang sesuai berdasarkan `context` (tidak statis).

 - [x] Membuat sebuah *routing* pada `urls.py` aplikasi `main` untuk memetakan fungsi yang telah dibuat pada `views.py`.

Fungsi `show_main` di import pada `urls.py` dan dibentuk list `urlpatterns` yang berisikan kumpulan URL yang terkait pada `main`.

 - [x] Melakukan *deployment* ke Adaptable terhadap aplikasi yang sudah dibuat sehingga nantinya dapat diakses oleh teman-temanmu melalui Internet.

Setelah semua proses dilaksanakan, saya mengupdate kode saya pada github melalui add, commit, push pada github dan kemudian melakukan deployment agar dapat diakses tidak hanya pada device saya saja.


>2. Buatlah bagan yang berisi request client ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara urls.py, views.py, models.py, dan berkas html.

![bagan](/images/baganRequest.png)

>3. Jelaskan mengapa kita menggunakan virtual environment? Apakah kita tetap dapat membuat aplikasi web berbasis Django tanpa menggunakan virtual environment?

Tujuan digunakan virtual environment adalah untuk melakukan isolasi pada package sekaligus dependencies untuk menghindari adanya konflik dengan konfigurasi proyek lainnya. 

Bisa, meskipun penggunaan venv adalah best practice, namun mereka bersifat opsional
Membuat aplikasi tanpa *virtual environment* tetap dapat dijalankan namun lebih dianjurkan mengimplementasikan *virtual environment* karena hal ini dapat memudahkan untuk pengelolaan konsistensi dari masing-masing *dependencies* proyek sehingga menjadikannya sebuah *good practice* 

>4. Jelaskan apakah itu MVC, MVT, MVVM dan perbedaan dari ketiganya.

MVC adalah Model View Controller