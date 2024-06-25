var toggle_menu=document.querySelector('.responsive-menu');
var menu=document.querySelector('.menu');
toggle_menu.onclick=function(){
    toggle_menu.classList.toggle('active');
    menu.classList.toggle('responsive')
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});