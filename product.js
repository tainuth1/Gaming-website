const cartBtn = document.getElementById("cart-btn");
const cartItem = document.querySelector(".cart");
const xBtn = document.getElementById("x-btn");
const xbutton = document.querySelector(".xbutton");

cartBtn.addEventListener("click", function(){
    cartItem.classList.toggle("height");
    cartItem.classList.toggle("right");
});
xbutton.addEventListener("click", function(){
    cartItem.classList.toggle("right");
});

const product = [
    {
        image: "/images/s_product_img01.jpg",
        namee: "T-SHIRT",
        disc: "MEN SHIRT",
        price: 25,
    },
    {
        image: "/images/s_product_img02.jpg",
        namee: "Controller",
        disc: "X-BOX Controller",
        price: 45,
    },
    {
        image: "/images/s_product_img03.jpg",
        namee: "GPU",
        disc: "RTX 4050 TI",
        price: 600,
    },
    {
        image: "/images/s_product_img04.jpg",
        namee: "VAR",
        disc: "Gaming V-A-R",
        price: 850,
    },
    {
        image: "/images/s_product_img05.jpg",
        namee: "MOUSE",
        disc: "Gaming Mouse",
        price: 100,
    },
    {
        image: "/images/s_product_img06.jpg",
        namee: "KEYBOARD",
        disc: "Gaming Keyboard",
        price: 150,
    },
    
];

const categories = [...new Set(product.map((item) => item.namee))];
let i = 0;

document.querySelector('.product-slider').innerHTML = categories.map((category) => {
    return showCategoryItems(category);
}).join('');

var cart = JSON.parse(localStorage.getItem('cart')) || [];

function addtocart(a) {
    cart.push({ ...product[a] });
    localStorage.setItem('cart', JSON.stringify(cart));
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displaycart();
}

function displaycart() {
    let total = 0;
    var cartItem = document.getElementById('cartItem');
    if (cart.length === 0) {
        cartItem.innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        cartItem.innerHTML = cart.map((item, index) => {
            var { image, namee, price } = item;
            total += price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class="cart-pro">
                    <div class="image-add">
                        <img src=${image} alt="">
                    </div>
                    <div class="name-price">
                        <div class="cart-item-name">${namee}</div>
                        <div class="cart-item-pice">$${price}</div>
                    </div>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');
    }
}

displaycart();

let filterArray = [];

showGallery(product);

function showGallery(curarra) {
    document.getElementById("container").innerHTML = "";
    curarra.forEach((product, i) => {
        document.getElementById("container").innerHTML += `
            <div class="product-card">
                <div class="pro-img">
                    <img src="${curarra[i].image}" alt="">
                    <div class="name-width">
                        <div class="name-tage"><p>${curarra[i].namee}</p></div>
                    </div>
                </div>
                <div class="pro-detail">
                    <h2>${curarra[i].disc}</h2>
                    <div class="price">
                        <span>$${curarra[i].price}.00</span>
                        <span onclick='addtocart(${i})'><i class="fa-solid fa-cart-shopping"></i></span>
                    </div>
                </div>
            </div>
        `;
    });
}

document.getElementById("search").addEventListener("keyup", function () {
    let text = document.getElementById("search").value;

    filterArray = product.filter(function (a) {
        return a.namee.toLowerCase().includes(text.toLowerCase());
    });

    if (text == "") {
        showGallery(product);
    } else {
        if (filterArray.length == 0) {
            document.getElementById("container").innerHTML = "";
        } else {
            showGallery(filterArray);
        }
    }
});

function addNewProduct() {
    const newImageInput = document.getElementById('newImage');
    const newName = document.getElementById('newName').value;
    const newDesc = document.getElementById('newDesc').value;
    const newPrice = parseFloat(document.getElementById('newPrice').value);

    if (newImageInput.files.length > 0 && newName && newDesc && !isNaN(newPrice) && newPrice >= 0) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const newImage = e.target.result;

            const newProduct = {
                image: newImage,
                namee: newName,
                disc: newDesc,
                price: newPrice,
            };

            product.push(newProduct);
            categories.push(newName);

            newImageInput.value = '';
            document.getElementById('newName').value = '';
            document.getElementById('newDesc').value = '';
            document.getElementById('newPrice').value = '';

            document.querySelector('.product-slider').innerHTML = categories.map((category) => {
                return showCategoryItems(category);
            }).join('');
            showGallery(product);
        };

        reader.readAsDataURL(newImageInput.files[0]);
    } else {
        alert('Please fill in all the fields with valid values and select an image.');
    }
}

function showCategoryItems(category) {
    const categoryItems = product.filter(item => item.namee === category);
    return categoryItems.map(({ image, namee, disc, price }) => (
        `<div class="product-card">
            <div class="pro-img">
                <img src="${image}" alt="">
                <div class="name-width">
                    <div class="name-tage"><p>${namee}</p></div>
                </div>
            </div>
            <div class="pro-detail">
                <h2>${disc}</h2>
                <div class="price">
                    <span>$${price}.00</span>
                    <span onclick='addtocart(${i++})'><i class="fa-solid fa-cart-shopping"></i></span>
                </div>
            </div>
        </div>`
    )).filter(Boolean).join('');
}