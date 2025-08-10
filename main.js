// burger-menu 
const burgerBtn = document.querySelector(".burger-menu");
const list = document.querySelector(".list");

burgerBtn.addEventListener('click', function() {
    
    burgerBtn.classList.toggle("active");
    list.classList.toggle("active");
});

document.querySelectorAll(".list").forEach(function(n){
    n.addEventListener('click', function(e) {
        burgerBtn.classList.remove("active");
        list.classList.remove("active");

        e.preventDefault()
    })
});
// Scroll page
const links = document.querySelectorAll(".navigation ul a");

for(const link of links) {
    link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
   e.preventDefault();
   const href = this.getAttribute("href");

   document.querySelector(href).scrollIntoView({
       behavior: "smooth"
   })
}
// Show view adventures text
const camp = document.querySelector('#camp');
const swimm = document.querySelector('#swimm');
const mount = document.querySelector('#mount');

const campView = document.querySelector('.camp-view');
const swimView = document.querySelector('.swim-view');
const hikingView = document.querySelector('.hiking-view');

camp.addEventListener('click', function() {
    campView.style.display = "block";
    swimView.style.display = "none";
    hikingView.style.display = "none";

    camp.style.opacity = "0.7";
    swimm.style.opacity = "1";
    mount.style.opacity = "1";
});
swimm.addEventListener('click', function() {
    campView.style.display = "none";
    swimView.style.display = "block";
    hikingView.style.display = "none";
    
    camp.style.opacity = "1";
    swimm.style.opacity = "0.7";
    mount.style.opacity = "1";
});
mount.addEventListener('click', function() {
    campView.style.display = "none";
    swimView.style.display = "none";
    hikingView.style.display = "block";

    camp.style.opacity = "1";
    swimm.style.opacity = "1";
    mount.style.opacity = "0.7";
});

