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
})

