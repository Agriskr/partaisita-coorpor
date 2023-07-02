import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../node_modules/spotlight.js/dist/spotlight.bundle.js';


import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        var navigationBar = document.getElementById("myNavbar")
        navigationBar.classList.remove('navbar-transparent')
        navigationBar.classList.add('navbar-transparent-dark');
    } else {
        var navigationBar = document.getElementById("myNavbar")
        navigationBar.classList.remove('navbar-transparent-dark')
        navigationBar.classList.add('navbar-transparent')
    }
}

//navbārā parāda pašreizējo lapu. 
document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
      link.setAttribute('aria-current', 'page')
    }
  })


 //in offcanvas add spaces between nav items
document.getElementById("navbar-toggler").addEventListener("click", function() { 
    if (window.matchMedia("(orientation: portrait)").matches) {
    document.querySelectorAll('.nav-item').forEach(_item => {
               _item.classList.add('offcanvas-nav-item-class-portrait')})            
document.getElementById("offcanvas-close").addEventListener("click", function() {    
    document.querySelectorAll('.nav-item').forEach(_item => {             
              _item.classList.remove('offcanvas-nav-item-class-portrait')
})})
        }else{
            document.querySelectorAll('.nav-item').forEach(_item => {
                _item.classList.add('offcanvas-nav-item-class-landscape')})            
 document.getElementById("offcanvas-close").addEventListener("click", function() {    
     document.querySelectorAll('.nav-item').forEach(_item => {             
               _item.classList.remove('offcanvas-nav-item-class-landscape')
        })
    })}
    })


    
      