export function getCategories(div){
    let composeHTML = ''
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/categories`)
    .then(response => response.json())
    .then(categories =>{

        categories.forEach(category =>{

                composeHTML += `    
                <a class="rounded p-2 text-light m-3 fs-5" href="view-category.html?id=${category.id}">${category.name}</a>
                `

        })
        document.getElementById('loadingc').classList.add('d-none')
        document.getElementById(div).innerHTML = composeHTML
        document.getElementById(div).classList.remove('d-none')
    })
   
}
export function MostClickedCategories(div,limit){
    let composeHTML = ''
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/categories`)
    .then(response => response.json())
    .then(categories =>{

        let i = 0
        categories.forEach(category =>{

           if(i<limit){
                composeHTML += `    
                <a class="rounded p-2 text-light" href="#">${category.name}.........................................................${category.clicks} Clicks</a>
                `
                i++
           }

        })
        document.getElementById('loadingc').classList.add('d-none')
        document.getElementById(div).innerHTML = composeHTML
        document.getElementById(div).classList.remove('d-none')
        
    })
   
}
