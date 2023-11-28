let filterArray = [];

showGallery(product);

function showGallery(curarra) {
    document.getElementById("container").innerHTML = "";
    for (let i = 0; i < curarra.length; i++) {
        document.getElementById("container").innerHTML += 
        `<div class="product-card">
            <div class="pro-img">
                <img src=${curarra[i].image} alt="">
                <div class="name-width">
                    <div class="name-tage"><p>${curarra[i].namee}</p></div>
                </div>
            </div>
            <div class="pro-detail">
                <h2>${curarra[i].disc}</h2>
                <div class="price">
                    <span>$${curarra[i].price}.00</span>
                    <span onclick='addtocart(${i++})'><i class="fa-solid fa-cart-shopping"></i></span>
                </div>
            </div>
        </div>
        `;
    }
}

document.getElementById("search").addEventListener("keyup", function() {
    let text = document.getElementById("search").value;

    filterArray = product.filter(function(a) {
        return a.namee.toLowerCase().includes(text.toLowerCase());
    });

    if (text == "") {
        showGallery(product);
    } else {
        if (filterArray.length == 0) {
            document.getElementById("container").innerHTML = ""; // Change the selector to '#container'
        } else {
            showGallery(filterArray);
        }
    }
});

