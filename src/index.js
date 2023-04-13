// fetch() & .then()
// fetch() is an asynchronous function which we are using to make a GET request to get our food data from the JSON server (db.json)
fetch("http://localhost:3000/foods")
.then(response => response.json())
.then(foods => {

    console.log("FETCH 1")

    foods.forEach(food => {
        addFoodImageToMenu(food)
    })
    // addFoodDetails(foods[0])
})

fetch("http://localhost:3000/foods/1")
.then(response => response.json())
.then(food => {

    console.log("FETCH 2")

    displayFoodDetails(food)
})

console.log("NOT A FETCH")

function addFoodImageToMenu(food){
    const restaurantMenu = document.getElementById('restaurant-menu')
    const foodImage = document.createElement('img')
    foodImage.src = food.image
    foodImage.addEventListener('click', () => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(foodImage)
}

function displayFoodDetails(food){
    const foodImage = document.querySelector('.detail-image')
    foodImage.src = food.image

    const foodName = document.querySelector('.name')
    foodName.textContent = food.name

    const foodDescription = document.querySelector('#description-display')
    foodDescription.textContent = food.description
}
