import { loadMenu } from './menu-tab.js'
import { loadContact } from './contact-info.js'
import { loadHours } from './hours_tab.js'


const restaurantInfo = document.createElement('div');
restaurantInfo.setAttribute('id', 'info');
document.getElementById('content').appendChild(restaurantInfo);
restaurantInfo.innerText = "Great restaurant!"



//add buttons 
const menuTab = document.createElement('button');
menuTab.setAttribute('id', 'menu');
document.getElementById('content').appendChild(menuTab);
menuTab.innerText = 'Menu';

menuTab.addEventListener("click", loadMenu)


const contactInfo = document.createElement('button'); 
contactInfo.setAttribute('id', 'contact'); 
document.getElementById('content').appendChild(contactInfo);
contactInfo.innerText = 'Contact Info'; 

contactInfo.addEventListener("click", loadContact)


const hoursTab = document.createElement('button'); 
hoursTab.setAttribute('id', 'hours'); 
document.getElementById('content').appendChild(hoursTab);
hoursTab.innerText = 'Hours' 

hoursTab.addEventListener("click", loadHours)

//space for image
const restaurantImage = document.createElement('img');
restaurantImage.setAttribute('id', 'mainImage');
document.getElementById('content').appendChild(restaurantImage);
restaurantImage.src ='https://images.freeimages.com/images/large-previews/2fb/restaurant-1455958.jpg'

//tab switching logic goes here


//function clearContent () { 
   // document.getElementById('content').removeChild
//}
// needs event listeners for each tab that removes current content and runs the correct 'tab module' to populate the new info

