var myHttp = new XMLHttpRequest();
myHttp.open("GET","https://ecommerce.routemisr.com/api/v1/products");
myHttp.send();
myHttp.addEventListener("readystatechange", function(){
if (myHttp.readyState === 4){
    displayAllProducts(JSON.parse(myHttp.response).data);
}
})

function displayAllProducts(arr){
    var productContainer = document.querySelector(".row");
    console.log(arr);
    for (var i=0; i<arr.length; i++){
        productContainer.innerHTML +=`
        <div class="col-md-3">
                    <div class="inner p-3 mb-3 mt-2">
                        <img src="${arr[i].images[0]}" alt="" class="w-100">
                        <div class="d-flex justify-content-between align-items-center">
                            <h2 class="h5 m-2">${arr[i].title}</h2>

                            <span>${arr[i].price}</span>
                        </div>
                        <h3 class="h6">${arr[i].category.name}</h3>
                        <p>${arr[i].description}</p>
                        <button class="btn btn-primary">Buy now</button>
                    </div>
                </div>

        `
    }
}