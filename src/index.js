function addFoodImageToMenu(food){
    const foodImage = document.createElement('img')
    foodImage.src = food.image
    foodImage.addEventListener('click', () => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(foodImage)
}

function displayFoodDetails(food){
    const foodDetailImage = document.querySelector('.detail-image')
    foodDetailImage.src = food.image
    const foodName = document.querySelector('.name')
    foodName.textContent = food.name
    const foodDescriptionDisplay = document.getElementById('description-display')
    foodDescriptionDisplay.textContent = food.description
}

const restaurantMenu = document.getElementById('restaurant-menu')

fetch("http://localhost:3000/foods")
.then(response => response.json())
.then(foods => {
    // displayFoodDetails(foods[0])

    foods.forEach(food => {
        addFoodImageToMenu(food)
    })
})

fetch("http://localhost:3000/foods/1")
.then(response => response.json())
.then(food => {
    displayFoodDetails(food)
})