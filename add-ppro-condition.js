const adminPassword = 1782005;

const addProductButton = document.getElementById('add');
const adminCard = document.getElementById('adminCard');
const passwordCard = document.getElementById('passwordCard');
const productForm = document.getElementById('productForm');

addProductButton.addEventListener('click', showAdminCard);

function showAdminCard() {
    adminCard.style.display = 'block';
}

function hideAdminCard() {
    adminCard.style.display = 'none';
}

function showPasswordCard() {
    hideAdminCard();
    passwordCard.style.display = 'block';
}

function hidePasswordCard() {
    passwordCard.style.display = 'none';
    showAdminCard();
}

function showProductForm() {
    const passwordInput = document.getElementById('passwordInput').value;
    if (parseInt(passwordInput) === adminPassword) {
        passwordCard.style.display = 'none';
        productForm.style.display = 'block';
    } else {
        alert('Password not correct');
    }
}

function hideAddProduct() {
    productForm.style.display = "none";
}
const inputFile = document.getElementById("newImage")
const image = document.getElementById("add-image");

inputFile.addEventListener("change", (e)=>{
    image.src = URL.createObjectURL(e.target.files[0]);
});