function addProduct() {
    fetch("/create-product-ajax/", {
        method: "POST",
        body: new FormData(document.querySelector('#form-add'))
    }).then(refreshProducts)
    
    document.getElementById("form-add").reset()
    return false
}

async function getProducts() {
    return fetch("/get-product/").then((res) => res.json())
}

async function getProductById(idProduct) {
    const listProducts = await getProducts()
    return listProducts.find(product => product.pk === idProduct)
}

async function increaseProductAmount(idProduct) {
    await fetch(`/increase-product-amount/${idProduct}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    });
    refreshProductAmount(idProduct);
}

async function decrementProductAmount(idProduct) {
    await fetch(`/decrement-product-amount/${idProduct}/`, {
        method: 'POST',
        body: JSON.stringify({}),
    });
    refreshProductAmount(idProduct);
}

async function deleteProduct(idProduct) {
    await fetch(`/delete-product/${idProduct}/`, {
        method: 'DELETE',
        body: JSON.stringify({}),
    });
    refreshProducts()
}

async function refreshProductAmount(idProduct){
    const product = await getProductById(idProduct);
    const amountHTML = document.getElementById(`amount-${idProduct}`)

    amountHTML.innerHTML = `Jumlah: ${product.fields.amount}`
}

async function refreshProducts(){
    document.getElementById("product_cards").innerHTML = ""
    const products = await getProducts()
    let htmlString = ""
    products.forEach((product, index) =>{
        htmlString += `\n<div class="col-lg-4 col-md-6 mb-4">
            <div id="${product.pk}" class="card h-100 ${index === products.length - 1 ? `last-product` : ``}">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="card-title mb-0">${product.fields.name}</h5>
                    <div class="button-group">
                        <button class="btn btn-sm cust-button" onclick="increaseProductAmount(${product.pk})">+</button>
                        <button class="btn btn-sm cust-button" onclick="decrementProductAmount(${product.pk})">-</button>
                        <button class="btn btn-sm delete-button" onclick="deleteProduct(${product.pk})">Delete</button>
                        <a href="/edit-product/${product.pk}/"><button class="btn btn-sm edit-button">Edit</button></a>
                    </div>
                </div>
                <div class="card-body">
                    <p class="text-muted small" id="amount-${product.pk}">Jumlah: ${product.fields.amount}</p>
                    <p class="text-muted small">Harga: ${product.fields.price}</p>
                    <p class="card-text">${product.fields.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Added on: ${product.fields.date_added}</small>
                </div>
            </div>
        </div>`
    })
    document.getElementById("product_cards").innerHTML = htmlString
}


async function cobaFetch() {
    const response = await fetch('https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC');
    const data = await response.json();
    
    if (!data.items) {
        console.error('No items found in the response');
        return;
    }

    for (const item of data.items) {
        const bookInfo = item.volumeInfo;
        console.log(bookInfo);
        
        const postData = {
            name: bookInfo.title,
            description: bookInfo.description
        };
        
        const postResponse = await fetch('/add-new-data/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        console.log('Data posted:', postResponse);
    }
}

refreshProducts()
cobaFetch()
document.getElementById("button_add").onclick = addProduct