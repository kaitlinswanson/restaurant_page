


const restaurantInfo = document.createElement('div');
restaurantInfo.setAttribute('id', 'info');
document.getElementById('content').appendChild(restaurantInfo);
restaurantInfo.innerText = "Great restaurant!"

const restaurantImage = document.createElement('img');
restaurantImage.setAttribute('id', 'mainImage');
document.getElementById('content').appendChild(restaurantImage);
restaurantImage.src ='https://images.freeimages.com/images/large-previews/2fb/restaurant-1455958.jpg'
