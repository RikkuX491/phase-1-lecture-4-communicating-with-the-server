// fetch() & .then()
fetch("http://localhost:3000/foods")
.then(response => response.json())
.then(foods => {
    
    // Here is a for loop which can also be used to loop through the array.
    // I've left the code for the for loop commented out, so you can compare it with the .forEach() array iterator seen on lines 85 - 87.
    
    // for(let index = 0; index < foods.length; index++){
    //     addFoodImageToMenu(foods[index])
    // }
    
    foods.forEach(food => {
        addFoodImageToMenu(food)
    })
})

fetch("http://localhost:3000/foods/1")
.then(response => response.json())
.then(food => {
    displayFoodDetails(food)
})


function addFoodImageToMenu(food){
    const restaurantMenu = document.getElementById('restaurant-menu')
    const image = document.createElement('img')
    image.src = food.image
    image.addEventListener('click', () => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(image)
}

function displayFoodDetails(food){
    const foodDetailImage = document.querySelector('.detail-image')
    foodDetailImage.src = food.image

    const foodName = document.querySelector('.name') 
    foodName.textContent = food.name

    const foodDescription = document.querySelector(`#description-display`)
    foodDescription.textContent = food.description
}