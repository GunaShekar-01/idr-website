

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const targetId = this.getAttribute('href');

const targetSection = document.querySelector(targetId);

targetSection.scrollIntoView({
behavior: "smooth"
});

});

});




const form = document.querySelector('.contact-form');

if(form){

form.addEventListener('submit', function(e){

e.preventDefault();

alert("Thank you for registering your interest. Our team will contact you soon.");

form.reset();

});

}