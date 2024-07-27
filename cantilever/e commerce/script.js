let card = document.querySelector(".collection");
let card2 = document.getElementById("cards2");
let mainPage = document.querySelector(".main");
let blog = document.querySelector(".collections");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let cart =document.querySelector(".cart");
function stores(){
mainPage.style.display = "none";
blog.style.display = "none";
card.style.display = "block";
card2.style.display = "block";
about.style.display = "none";
contact.style.display = "none";
cart.style.display = "none";
document.getElementById("store").style.color = "rgb(23, 174, 174)";
    document.getElementById("about").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("home").style.color = "black";
}

function blogs() {
    card.style.display = "none";
    mainPage.style.display = "none";
    blog.style.display = "block";
    card2.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none";
    document.getElementById("blog").style.color = "rgb(23, 174, 174)";
    document.getElementById("about").style.color = "black";
    document.getElementById("store").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("home").style.color = "black";
}
function home(){
    card.style.display = "block";
    mainPage.style.display = "flex";
    blog.style.display = "block";
    card2.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none";
    document.getElementById("home").style.color = "rgb(23, 174, 174)";
    document.getElementById("about").style.color = "black";
    document.getElementById("store").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("blog").style.color = "black";
}
function abouts(){
    card.style.display = "none";
    mainPage.style.display = "none";
    blog.style.display = "none";
    card2.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
    cart.style.display = "none";
    document.getElementById("about").style.color = "rgb(23, 174, 174)";
    document.getElementById("home").style.color = "black";
    document.getElementById("store").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("blog").style.color = "black";
}
function contacts() {
    card.style.display = "none";
    mainPage.style.display = "none";
    blog.style.display = "none";
    card2.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
    cart.style.display = "none";
    document.getElementById("contact").style.color = "rgb(23, 174, 174)";
    document.getElementById("home").style.color = "black";
    document.getElementById("store").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("blog").style.color = "black";
}
function show(img){
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;
cart.style.display="flex";
card.style.display = "none";
    mainPage.style.display = "none";
    blog.style.display = "none";
    card2.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
}
function Addtocart(){
    alert("Added to Cart");
    location.reload();
}