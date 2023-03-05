export function getCategories(div){
    let composeHTML = ''
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/categories`)
    .then(response => response.json())
    .then(categories =>{
        categories.forEach(category =>{

            composeHTML += `    
            <a href="#">${category.name}</a>
            `
        })
        document.getElementById(div).innerHTML = composeHTML
    })
   
}