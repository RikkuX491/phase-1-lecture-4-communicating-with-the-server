const restaurantMenuDiv = document.getElementById('restaurant-menu')

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
    displayFoodDetails(foods[0])
})

function addFoodImageToRestaurantMenu(food){
    const newFoodImgElement = document.createElement('img')
    newFoodImgElement.src = food.image
    newFoodImgElement.addEventListener('click', () => {
        displayFoodDetails(food)
    })
    restaurantMenuDiv.appendChild(newFoodImgElement)
}

function displayFoodDetails(food){
    const detailImageElement = document.querySelector('.detail-image')
    detailImageElement.src = food.image
    
    const nameElement = document.querySelector('.name')
    nameElement.textContent = food.name

    const descriptionDisplayElement = document.getElementById('description-display')
    descriptionDisplayElement.textContent = food.description
}