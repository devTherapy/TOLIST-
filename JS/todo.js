const addBtn = document.querySelector(".addBtn");
const addInput = document.querySelector(".newTodo");
const searchInput = document.querySelector(".searchTodo");
class UI{

addEventListeners()
{
    searchInput.addEventListener("onclick", () => 
    {
        searchInput.classList.toggle("searchTodo");
        
    console.log("called");
    })

searchInput.addEventListener("click", () => 
{
    searchInput.classList.toggle("searchTodo");
})

}

}



document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
ui.addEventListeners();
})