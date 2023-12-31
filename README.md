# :shopping_cart: Tokopedrian :shopping: :green_book:
`Beli anting dengan durian, kalau shopping di Tokopedrian!`

<details>
<summary>Tugas Individu 6</summary>

>1. Jelaskan perbedaan antara asynchronous programming dengan synchronous programming.
Synchronous programming melaksanakan program secara berurutan, sehingga jika kita memanggil fungsi `A()` kemudian `B()`, maka program akan melaksanakan `B()` setelah `A()` selesai. Asynchronous melaksanakan operasi secara bersamaan, fungsi yang mungkin memakan waktu dilaksanakan di latar belakang. 

>2. Dalam penerapan JavaScript dan AJAX, terdapat penerapan paradigma event-driven programming. Jelaskan maksud dari paradigma tersebut dan sebutkan salah satu contoh penerapannya pada tugas ini.
Event-driven programming meripakan merespon suatu kejadian ketika terdapat suatu trigger yang terjadi. Salah satu contohnya adalah button counter dimana button tersebut akan menambahkan suatu nilai dengan satu hanya jika button dipencet (event).

>3. Jelaskan penerapan asynchronous programming pada AJAX.
Pada AJAX, asynchronous programming dilakukan dengan mengirimkan data ke balik layar. Sehingga ketika kita melakukan request, kita hanya akan melakukan re-rendering pada sebagian elemen data pada halaman web. Akibatnya, bagian lain yang tidak berhubungan tidak perlu di-reload sehingga kita tidak perlu refresh seluruh halaman.

>4. Pada PBP kali ini, penerapan AJAX dilakukan dengan menggunakan Fetch API daripada library jQuery. Bandingkanlah kedua teknologi tersebut dan tuliskan pendapat kamu teknologi manakah yang lebih baik untuk digunakan.
Konsep-konsep pada Fetch API merupakan konsep yang baru bagi saya (seperti promise, await, fetch) sehingga perlu memahami lebih lanjut jika dibandingkan dengan jQuery. Namun, Fetch API lebih kuat dan fleksibel dalam mengelola HTTP Request dan dapat dengan mudah mengelola berbagai jenis data (seperti JSON, blob, dsb.). Lebih lanjut, Fetch API lebih ringan dibandingkan jQuery yang perlu untuk import library sehingga mungkin terdapat overhead. Mempertimbangkan Fetch API yang lebih modern dan terus berkembang, sebaiknya kita menggunakan Fetch API

>5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).

- [x] Mengubah kode tabel data item agar dapat mendukung AJAX GET dan melakukan pengambilan task menggunakan AJAX GET.
Saya menggunakan AJAX GET pada fungsi asinkronus getProduct yang berfungsi untuk mengirimkan request GET dengan melakukan fetch, kemudian file yang saya dapatkan saya ubah ke file json. Fungsi ini dapat saya gunakan lagi lebih lanjut pada refreshProduct() yang berfungsi untuk melakukan rendering pada seluruh Product.

- [x] Membuat tombol yang membuka sebuah modal dengan form untuk menambahkan item.
Tombol tersebut ketika dipencet, akan menampilkan suatu modal(yang sebelumnya hidden) yang berfungsi untuk mengisi data. Kemudian setelah mengisi semua data yang diperlukan, kita hanya perlu memencet button `Add Product` yang ketika diklik, akan memanggil fungsi addProduct yang melakukan fetch pada semua data pada form. Data tersebut kemudian dimasukkan kepada FormData yang akan disave sehingga membentuk suatu product baru. Product tersebut akan ditampilkan pada Card. Pada fetch di addProduct, kita memanggil fungsi `add_product_ajax` yang telah didefinisikan pada `views.py` kemudian di include dan diimport pada `urlpatterns` di `urls.py`. Setelah semua itu selesai, kita akan memanggil `refreshProduct` yang mendefinisikan ulang isi HTML dari `Products` dengan bentuk `card`, di akhir, kita `return false` agar tidak perlu refresh halaman `main.html`. Sehingga yang kita lakukan adalah rendering card baru saja.

---

<details>
<summary>Tugas Individu 5</summary>

>1. Menjawab beberapa pertanyaan berikut pada README.md pada root folder (silakan modifikasi README.md yang telah kamu buat sebelumnya; tambahkan subjudul untuk setiap tugas).

- [x] Jelaskan manfaat dari setiap element selector dan kapan waktu yang tepat untuk menggunakannya.
Saya akan mengasumsikan bahwa yang dimaksud adalah **Selector**. Element selector berguna untuk menambah styling pada elemen dengan tag (contoh: `<p>`, `<div>`) tertentu. Sehingga ini digunakan ketika kita ingin mengaplikasikan styling pada setiap elemen dengan tag yang sama. ID selector berguna untuk menambah styling pada elemen dengan id (unik) tertentu. Sehingga ini digunakan untuk menargetkan elemen yang spesifik (dimulai dengan `#`). Class selector berguna untuk menambahkan styling pada elemen yang memiliki suatu class, class ini dapat dimiliki oleh banyak elemen. Sehingga ini digunakan ketika kita menginginkan beberapa elemen untuk memiliki styling yang sama (dimulai dengan `.`).

- [x] Jelaskan HTML5 Tag yang kamu ketahui.
Terdapat banyak contoh HTML5 Tag, namun saya akan membahas tag yang saya pernah gunakan dan ketahui. `<img>` berguna untuk menyisipkan gambar. `<a>` berguna untuk memasukkan link yang akan diarahkan ketika dipencet user. `<nav>` berguna untuk membuat daftar navigasi. `<title>` memberikan judul yang akan ditampilkan pada tab. `<style>` dan `<script>` untuk menggunakan CSS dan JavaScript eksternal. `<h1>`, `<h2>`, ... berguna untuk membuat judul dengan ukuran berbeda. `<p>` berguna untuk membuat paragraf. `<ul>`, `<ol>`, `<li>` berguna untuk menampilkan daftar(list) baik secara terurut ataupun tak terurut. `<form>` dan `<input>` untuk membuat formulir dan menerima input dari user.

- [x] Jelaskan perbedaan antara margin dan padding.
Margin merupakan gap diluar border sedangkan Padding merupakan gap antara border dan konten. 

- [x] Jelaskan perbedaan antara framework CSS Tailwind dan Bootstrap. Kapan sebaiknya kita menggunakan Bootstrap daripada Tailwind, dan sebaliknya?
Menurut saya, salah satu perbedaan besar diantara Tailwind dan Bootstrap adalah Tailwind hanya akan membentuk file CSS berdasarkan penggunaan styling yang kita pakai. Sedangkan Bootstrap sudah memiliki file CSS dengan ukuran besar karena sebelumnya telah terdapat banyak komponen yang telah didefinisikan. Penggunaan Tailwind CSS juga memerlukan pemahaman yang cukup mendalam mengenai CSS dan bagaimana menggabungkan kelas utilitas tersebut, sedangkan Bootstrap cukup ramah kepada pemula sebab telah banyak komponen yang telah didefinisikan sebelumnya. Dari perbedaan ini, Penggunaan Bootstrap akan lebih efisien jika kita ingin melakukan pengembangan dengan cepat tanpa memikirkan ukuran file CSS. Namun, jika kita ingin meminimalisir penggunaan file CSS yang tidak diperlukan, maka sebaiknya menggunakan Tailwind.
</details>

---

<details>
<summary>Tugas Individu 4</summary>

>1. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).

- [x] Mengimplementasikan fungsi registrasi, login, dan logout untuk memungkinkan pengguna untuk mengakses aplikasi sebelumnya dengan lancar.
Pada `views.py`, saya membuat fungsi `register(request)`, `login(request)`, `logout(request)`  untuk melakukan registrasi, login, dan logout.  Untuk fungsi `logout`, saya menghapus cookie setelah melaksanakan logout. Untuk fungsi registrasi dan login, saya membuat masing-masing `html` pagenya. Karena adanya autentikasi, saya perlu melakukan restriksi sehingga hanya pengguna yang telah melakukan login yang dapat masuk ke main, data login kemudian disimpan didalam `cookies`.

- [x] Membuat dua akun pengguna dengan masing-masing tiga dummy data menggunakan model yang telah dibuat pada aplikasi sebelumnya untuk setiap akun di lokal.
Saya melakukan registrasi dua kali dan pada tiap pengguna, saya menambahkan data produk baru.

- [x] Menghubungkan model Item dengan User.
Karena adanya autentikasi, pada class `Product` saya menambahkan properti `user` dengan menggunakan `Foreignkey`. Hal ini saya lakukan agar setiap `Product` berhubungan kepada `user`.

- [x] Menampilkan detail informasi pengguna yang sedang logged in seperti username dan menerapkan cookies seperti last login pada halaman utama aplikasi.
Setiapkali seorang `user` melakukan `login`, kita akan membuat cookie `last_login` yang berisikan `string` dengan data waktu login. Informasi `last_login` ini kemudian akan dihapus ketika user melakukan `logout`. Agar dapat ditampilkan pada `main.html`, informasi `last_login` dapat disimpan pada variabel `context` pada fungsi `show_main`.

>2. Menjawab beberapa pertanyaan berikut pada README.md pada root folder (silakan modifikasi README.md yang telah kamu buat sebelumnya; tambahkan subjudul untuk setiap tugas).

- [x] Apa itu Django UserCreationForm, dan jelaskan apa kelebihan dan kekurangannya?
UserCreationForm merupakan fungsi bawaan yang memudahkan implementasi untuk membuat formulir. Namun, penggunaan `UserCreationForm` mungkin terbatas pada formulir yang cukup kompleks, hal ini juga membatasi desain dari `UserCreationForm`. 

- [x] Apa perbedaan antara autentikasi dan otorisasi dalam konteks Django, dan mengapa keduanya penting?
Autentikasi merupakan proses untuk melakuka verifikasi pada identitas user yang ingin login seperti `username` dan `password`, sedangkan otorisasi merupakan proses yang menentukan tindakan apa saja yang dapat dilakukan oleh user tertentu ketika mengakses aplikasi. Sebagai contoh, untuk mengakses halaman utama, kita perlu melakukan `login`. Tanpa ada kedua hal ini, siapa saja dapat mengakses data yang mungkin seharusnya bersifat rahasia.

- [x] Apa itu cookies dalam konteks aplikasi web, dan bagaimana Django menggunakan cookies untuk mengelola data sesi pengguna?
`Cookies` adalah data yang berada pada client, `cookies` menyimpan data dengan ukuran kecil, data tersebut berisi informasi login. Django menyimpan ID sesi login unik pada `cookies`. `cookies` ini kemudian akan dikirimkan oleh browser setiap kali melakukan request agar server dapat mengidentifikasi `user` dari `cookies` 

- [x] Apakah penggunaan cookies aman secara default dalam pengembangan web, atau apakah ada risiko potensial yang harus diwaspadai?
Dengan adanya enkripsi yang baik dan aman dari `reverse engineering`, penggunaan cookies dapat dikatakan aman. Lebih lanjut, dianjurkan penggunaan HTTPS agar dapat mencegah adanya `session hijacking`. Untuk memastikan keamanan lebih mendalam, penggunaan `{% csrf_token %}` merupakan salah satu best practice. 
</details>

---

<details>
<summary>Tugas Individu 3</summary>

>1. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).

- [x] Membuat Form (`forms.py`)
Terdapat properti `model = Product`, hal ini berguna agar ketika kita ingin menyimpan data dari form, maka akan berupa objek `Product`. `fields = ["name", "price", "amount", "description"]` berisikan list dari properti apa saja yang perlu untuk di isi dalam form. Setelahnya, perlu dibentuk kerangka untuk melakukan rendering pada form, disini saya menamakannya sebagai `create_product.html` yang terletak didalam `templates`. 

- [x]  Tambahkan 5 fungsi views untuk melihat objek yang sudah ditambahkan dalam format HTML, XML, JSON, XML by ID, dan JSON by ID.

Pada `views.py`, kita akan membuat fungsi untuk menunjukkan data dalam bentuk `XML` dan `JSON`. Hal ini dapat diimplementasikan dengan melakukan return `HTTPResponse` dengan memberi constraint untuk menberi spesifikasi tipe data hasil query. Untuk `XML by ID` ataupun `JSON by ID`, implementasinya mirip namun terdapat modifikasi pada data yang ingin ditampilkan, yaitu dengan menggunakan `filter(pk=id)`. 

- [x] Membuat routing URL untuk masing-masing views yang telah ditambahkan pada poin 2.

Terdapat lima fungsi (termasuk `show_main`) yang akan diimpor pada urls.py agar dapat digunakan dan perlu untuk dispesifikasikan `path url` pada list `urlpatterns` nya. Dapat dilihat bahwa untuk path `XML by ID` ataupun `JSON by ID`, kita menggunakan dynamic routing untuk memberikan data sesuai dengan input `id` dari user pada url.

>2. Menjawab beberapa pertanyaan berikut pada README.md pada root folder.

- [x] Apa perbedaan antara form POST dan form GET dalam Django?
Ketika kita melakukan `GET` method, data yang dikirim dapat dilihat pada `URL` yang dituju sehingga penggunaan `GET` method sebaiknya tidak digunakan untuk `login` yang membutuhkan password ataupun informasi yang bersifat rahasia, perlu diperhatikan juga bahwa apabila data yang dikirimkan sangat panjang, `URL` yang dihasilkan juga akan sangat panjang (method `GET` tidak boleh melebihi 2047 karakter). Pada `POST` method, pengiriman data dilakukan melalui body request pada `HTTP` sehingga datanya tidak terlihat pada `URL`, hal ini mengakibatkan POST untuk tidak memiliki batasan pada panjang dari data yang akan disubmit. Namun, hal ini mengakibatkan `POST` method memiliki performa lebih lambat dibandingkan `GET` method.

- [x] Apa perbedaan utama antara XML, JSON, dan HTML dalam konteks pengiriman data?
Pada `HTML`, pengiriman data lebih terfokus kepada bagaimana data ditampilkan (script, style, dan lain-lainnya). Hal ini mengakibatkan penggunaan `HTML` yang lebih sesuai apabila datanya akan ditampilkan ke manusia karena jauh lebih mudah untuk dibaca masyarakat awam dibandingkan `XML` dan `JSON`.

Pada `XML`, data ditampilkan agar mudah dibaca oleh manusia ataupun mesin. struktur data pada `XML` mirip dengan `HTML` dimana setiap node memiliki banyak nilai ataupun properti.


Data pada `JSON` ditampilkan dalam bentuk yang mirip dengan `Dictionary` dan `list` pada python, hal ini membuat file `JSON` mudah untuk dibaca oleh berbagai bahasa pemrograman.

- [x] Mengapa JSON sering digunakan dalam pertukaran data antara aplikasi web modern?
`JSON` mudah untuk dibaca berbagai bahasa pemrograman dan penulisan data pada file `JSON` yang lebih simpel dibandingkan `XML` membuatnya lebih sering digunakan.

>3. Mengakses kelima URL di poin 2 menggunakan Postman, membuat screenshot dari hasil akses URL pada Postman, dan menambahkannya ke dalam README.md
<img src='images/postmanXML.png' width=50%>
<img src='images/postmanXMLID.png' width=50%>
<img src='images/postmanJSON.png' width=50%>
<img src='images/postmanJSONID.png' width=50%>
<img src='images/postmanHTML.png' width=50%>
</details>

---

<details>
<summary>Tugas Individu 2</summary>

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

1.MVC adalah Model View Controller, MVC merupakan pattern dari desain framework yang memisahkan aplikasi menjadi 3 komponen yaitu model, view, dan controller. MVC seringkali digunakan untuk membuat aplikasi yang scalable dan extensible.

2.MVT adalah Model View Template, MVC merupakan pattern desain yang cukup mirip dengan MVC, hal yang membedakan mereka adalah controllernya telah diimplementasikan sehingga tugas kita hanyalah utuk membuat template. MVC memungkinkan pengembangan yang lebih cepat dan scalable namun bergantung kepada framework yang digunakan

3.MVVM adalah Model View ViewModel, MVVM merupakan pattern desain yang terfokuskan pada pembedaan UI dengan logic aplikasi kita. Controller MVVM terletak pada ViewModel. 
</details>