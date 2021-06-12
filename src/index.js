import { loadMenu } from './menu-tab.js'
import { loadContact } from './contact-info.js'
import { loadHours } from './hours_tab.js'


const restaurantInfo = document.createElement('div');
restaurantInfo.setAttribute('id', 'info');
document.getElementById('content').appendChild(restaurantInfo);
restaurantInfo.innerText = "Come visit our wonderful restaurant!"



//add buttons 
const menuTab = document.createElement('button');
menuTab.setAttribute('id', 'menu');
document.getElementById('content').appendChild(menuTab);
menuTab.innerText = 'Menu';




const contactInfo = document.createElement('button'); 
contactInfo.setAttribute('id', 'contact'); 
document.getElementById('content').appendChild(contactInfo);
contactInfo.innerText = 'Contact Info'; 



const hoursTab = document.createElement('button'); 
hoursTab.setAttribute('id', 'hours'); 
document.getElementById('content').appendChild(hoursTab);
hoursTab.innerText = 'Hours' 


//space for image
const restaurantImage = document.createElement('img');
restaurantImage.setAttribute('id', 'mainImage');
document.getElementById('info').appendChild(restaurantImage);
restaurantImage.src ='https://images.freeimages.com/images/large-previews/2fb/restaurant-1455958.jpg'

//tab switching logic
menuTab.addEventListener ('click',()=>{
    //content.removeChild(content.lastElementChild)
    //content.removeChild(document.getElementById('contactText'))
    if(content.childNodes.length >= 5) {
   content.removeChild(content.childNodes[4]);
   loadMenu();
    } else {
    loadMenu();
    }
});

contactInfo.addEventListener('click',()=>{
    if(content.childNodes.length >=5) {
        content.removeChild(content.childNodes[4]);
        loadContact();
    } else {
        loadContact()
    }
});
    
hoursTab.addEventListener('click',()=>{

    if(content.childNodes.length >=5) {
    content.removeChild(content.childNodes[4]);
    loadHours();

    } else {
    loadHours();
    }
});
