
window.addEventListener("load", function(){
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".page-loader").style.display = "none";
    },600);
    AOS.init();
  
  });




const navToggler = document.querySelector(".js-nav-toggler");
navToggler.addEventListener("click",(navToggle));

function navToggle(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
};

/* close nav when clicking on a nave item */
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        navToggle();
    }
});

/*----------------- sticky heaer ------------------------- */
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }else{
        document.querySelector(".header").classList.remove("sticky");
    }
   
  
});

/*------------------------- menu tabs-----------------------------*/
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click",function(e){
if(e.target.classList.contains("menu-tabs-item") && !e.target.classList.contains("active")){
const target = e.target.getAttribute("data-target");
menuTabs.querySelector(".active").classList.remove("active");
e.target.classList.add("active");
const menuSection = document.querySelector(".menu-section");
menuSection.querySelector(".menu-tabs-content.active").classList.remove("active");
menuSection.querySelector(target).classList.add("active");

AOS.init();

}      

});
