const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Code for the links on the top of the page
const links = document.querySelectorAll('a');

links[0].textContent = 'Services';
links[1].textContent = 'Product';
links[2].textContent = 'Vision';
links[3].textContent = 'Features';
links[4].textContent = 'About';
links[5].textContent = 'Contact';

//Code for the section class = "cta"
const mainHeader = document.querySelector('h1');

mainHeader.innerHTML = 'DOM <br/> IS <br/> AWESOME';

const buttonUnderMainHeader = document.querySelector('button');

buttonUnderMainHeader.textContent = "Get Started"; 

const imageNextToMainHeader = document.querySelector('#cta-img');

imageNextToMainHeader.src = "img/header-img.png";

//Code for the section class = "main-content"
const headersOfMainContent = document.querySelectorAll('.text-content h4');
headersOfMainContent[0].textContent = 'Features';
headersOfMainContent[1].textContent = 'About';
headersOfMainContent[2].textContent = 'Services';
headersOfMainContent[3].textContent = 'Product';
headersOfMainContent[4].textContent = 'Vision';

const paragraphsOfMainContent = document.querySelectorAll('.text-content p');
paragraphsOfMainContent[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. \
                                          Suspendisse vel tempus odio, in interdutm nisi. \
                                          Suspendisse eu ornare nisl. Nullam convallis augue justo, \
                                          at imperdiet metus scelerisque quis.";
paragraphsOfMainContent[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. \
                                          Suspendisse vel tempus odio, in interdutm nisi. \
                                          Suspendisse eu ornare nisl. Nullam convallis augue justo, \
                                          at imperdiet metus scelerisque quis.";
paragraphsOfMainContent[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. \
                                          Suspendisse vel tempus odio, in interdutm nisi. \
                                          Suspendisse eu ornare nisl. Nullam convallis augue justo, at \
                                          imperdiet metus scelerisque quis.";
paragraphsOfMainContent[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. \
                                          Suspendisse vel tempus odio, in interdutm nisi. \
                                          Suspendisse eu ornare nisl. Nullam convallis augue justo, at \
                                          imperdiet metus scelerisque quis.";
paragraphsOfMainContent[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. \
                                          Suspendisse vel tempus odio, in interdutm nisi. \
                                          Suspendisse eu ornare nisl. Nullam convallis augue justo, \
                                          at imperdiet metus scelerisque quis.";

const imageInMainContent = document.querySelector('#middle-img');
imageInMainContent.src = "img/mid-page-accent.jpg";

//Code for the section class = "contact"
const headerOfContactSection = document.querySelector('.contact h4');
headerOfContactSection.textContent = 'Contact';

const paragraphsOfContactSection = document.querySelectorAll('.contact p');
paragraphsOfContactSection[0].innerHTML = '123 Way 456 Street <br/> Somewhere, USA';
paragraphsOfContactSection[1].textContent = "1 (888) 888-8888";
paragraphsOfContactSection[2].textContent = "sales@greatidea.io";

//Code for the footer
const paragraphOfFooter = document.querySelector('footer p');
paragraphOfFooter.textContent = "Copyright Great Idea! 2018";