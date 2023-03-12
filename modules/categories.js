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
        
        categories.sort((a, b) => b.clicks - a.clicks);
        const topCategories = categories.slice(0, limit);
        topCategories.forEach(category =>{
            if(i<limit){
                composeHTML += `    
                <a class="rounded p-2 text-light" href="view-category.html?id=${category.id}">${category.name}.........................................................${category.clicks} Clicks</a>
                `
                i++
           }
            
        })
   
        document.getElementById('loadingc').classList.add('d-none')
        document.getElementById(div).innerHTML = composeHTML
        document.getElementById(div).classList.remove('d-none')
        
    })
   
}
export function getAdminCategories(div){
    
    let composeHTML = ''
    let i = 1
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/categories`)
    .then(response => response.json())
    .then(categories =>{       
                 
        composeHTML += `
        <tr class="fs-5 bg-dark fw-bold">
            <td style="border-bottom:2px solid #102b57 !important">Nr.</td>
            <td style="border-bottom:2px solid #102b57 !important">Name</td>
            <td style="border-bottom:2px solid #102b57 !important">Clicks</td>
            <td style="border-bottom:2px solid #102b57 !important">Options</td>
        </tr>
        `
        categories.forEach(category =>{
                    i++           
                    composeHTML += `
                <tr>
                    <td>${i}</td>
                    <td>${category.name}</td>
                    <td>${category.clicks}</td>
                    <td class="p-1">
                    <button type="button" id="editCategory" class="btn btn-outline-primary fw-bold " data-bs-toggle="modal" data-bs-target="#editCategoryModal"style="background-color:transparent !important;color:white;border:2px solid #0a58ca !important"  value="${category.id}">Edit</button>
                    
                    
                    <button type="button" id="deleteCategory" class="btn btn-outline-danger fw-bold " style="background-color:transparent !important;color:white;border:2px solid red !important"  value="${category.id}">Delete</button></td>
                </tr>
            `
           
        })
            
        document.getElementById('loading').classList.add('d-none')
        document.getElementById(div).innerHTML = composeHTML
        document.getElementById(div).classList.remove('d-none')
    })
}
export function editCategory(name,id){
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/categories/${id}`, {
        method: 'PUT',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
            name: name,    
            id: id
       }         )
       })
       .then(response => response.json())
       .then(data => {
           alert('Category was editet successfully!');
           location.reload(true);
         }) 
       .catch(error => alert(error))
}
export function getSpecificCategory(id){
   
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/categories/${id}`)
    .then(response => response.json())
    .then(category =>{       
        document.getElementById('category-id').value = category.id
        document.getElementById('category-name').value = category.name
       
    })
}
export function deleteCategory(id){

    fetch(`https://63bdd384e348cb0762043976.mockapi.io/categories/${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
    
    .then(res => res.json())
    .then(data => {
        alert('Category Deleted!');
        location.reload(true);
      })
    .catch(error => console.log(error))
}