

export function getGifs(div,limit){
    let composeHTML = ''
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/gifs`)
    .then(response => response.json())
    .then(gifs =>{       
                   let i = 0   
                gifs.forEach(gif =>{
                    if(i < limit){
                        
                    composeHTML += `    
                    <div class="card m-2" style="width: 18rem; ">
                    <img src="${gif.gif}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${gif.title}</h5>
                    <p class="card-text">Source:<span>Online</span></p>
                    <p class="card-text">Content:<span>HTML CSS JS</span></p>
                    <a href="view-code.html?id=${gif.id}" class="btn w-100">View Details...</a>
                    </div>
                </div>
            `
            i++
                    }
           
        })
            
        document.getElementById('loading').classList.add('d-none')
        document.getElementById(div).innerHTML = composeHTML
        document.getElementById(div).classList.remove('d-none')
    })
   
}
export function renderGif(div,id){
    let composeHTML = ''
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/gifs/${id}`)
    .then(response => response.json())
    .then(gif =>{       
                  
           composeHTML += `          
                <div class="img-fluid d-flex flex-column align-self-center w-75" 
                >
                    <div class="description p-3 rounded-top">
                        <h1>Title:${gif.title}</h1>
                        <p>Source:${gif.source}</p>
                        <p>Posted By:${gif.postedBy}</p>
                    </div>
                    <img src="${gif.gif}" alt="" class="rounded" style="max-height: 35vh; min-width:70vh;" >
                    
                </div>
                <br>
                <div class="codes  d-flex justify-content-center m-3">
                <label for="t1" class="fw-bold">HTML:</label>
                <textarea name="t1" class="html m-3 w-25 p-1 rounded" rows="10">${gif.html}</textarea>
                <label for="t2" class="fw-bold">CSS:</label>
                <textarea name="t2"  class="css m-3 w-25 p-1 rounded" rows="10">${gif.css}</textarea>
                <label for="t3" class="fw-bold">Javascript:</label>
                <textarea name="t3"  class="js m-3 w-25 p-1 rounded" rows="10">${gif.javascript}</textarea>
                
                </div>
           `

        document.getElementById('loading').classList.add('d-none')
        document.getElementById(div).innerHTML = composeHTML
        document.getElementById(div).classList.remove('d-none')
        })
}

export function renderGifsByCategory(div,id){
    let composeHTML = ''
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/gifs`)
    .then(response => response.json())
    .then(gifs =>{       
                  
            gifs.forEach(gif =>{
                
                if(gif.category == id){
                    composeHTML += `   
                
                <div class="card m-3" style="width: 18rem; ">
                        <img src="${gif.gif}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${gif.title}</h5>
                        <p class="card-text">Source:<span>Online</span></p>
                        <p class="card-text">Content:<span>HTML CSS JS</span></p>
                        <a href="view-code.html?id=${gif.id}" class="btn w-100">View Details...</a>
                    </div>
                </div>
                    `
                }
            })

            document.getElementById('loading').classList.add('d-none')
        document.getElementById(div).innerHTML = composeHTML
        document.getElementById(div).classList.remove('d-none')
        })
}
export function MostClickedGifs(div,limit){
    let composeHTML = ''
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/gifs`)
    .then(response => response.json())
    .then(gifs =>{

        let i = 0
        
        gifs.sort((a, b) => b.clicks - a.clicks);
        const topGifs = gifs.slice(0, limit);
        topGifs.forEach(gif =>{
            if(i < limit){
                
            composeHTML += `    
            <div class="card m-2" style="width: 18rem; ">
            <img src="${gif.gif}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${gif.title}</h5>
            <p class="card-text">Source:<span>Online</span></p>
            <p class="card-text">Content:<span>HTML CSS JS</span></p>
            <a href="view-code.html?id=${gif.id}" class="btn w-100">View Details...</a>
            </div>
        </div>
    `
    i++
            }
   
})
   
        document.getElementById('loading').classList.add('d-none')
        document.getElementById(div).innerHTML = composeHTML
        document.getElementById(div).classList.remove('d-none')
        
    })
   
}
export function getAdminGifs(div){
    
    let composeHTML = ''
    let i = 1
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/gifs`)
    .then(response => response.json())
    .then(gifs =>{       
                 
        composeHTML += `
        <tr class="fs-5 bg-dark fw-bold">
            <td style="border-bottom:2px solid #102b57 !important">Nr.</td>
            <td style="border-bottom:2px solid #102b57 !important">Title</td>
            <td style="border-bottom:2px solid #102b57 !important">Category</td>
            <td style="border-bottom:2px solid #102b57 !important">Source</td>
            <td style="border-bottom:2px solid #102b57 !important">Posted By</td>
            <td style="border-bottom:2px solid #102b57 !important">Content</td>
            <td style="border-bottom:2px solid #102b57 !important">Clicks</td>
            <td style="border-bottom:2px solid #102b57 !important">Gif</td>
            <td style="border-bottom:2px solid #102b57 !important">Options</td>
        </tr>
        `
        gifs.forEach(gif =>{
                    i++           
                    composeHTML += `
                <tr>
                    <td>${i}</td>
                    <td>${gif.title}</td>
                    <td>${gif.category}</td>
                    <td>${gif.source}</td>
                    <td>${gif.postedBy}</td>
                    <td>${gif.content}</td>

                    <td>${gif.clicks}</td>
                    <td><img src="${gif.gif}" class="img-fluid p-1 rounded" style="width:20vh"/></td>
                    <td class="p-1">
                    
                    <button type="button" id="deleteGif" class="btn btn-outline-danger fw-bold " style="background-color:transparent !important;color:white;border:2px solid red !important"  value="${gif.id}">Delete</button></td>
                </tr>
            `
           
        })
            
        document.getElementById('loading').classList.add('d-none')
        document.getElementById(div).innerHTML = composeHTML
        document.getElementById(div).classList.remove('d-none')
    })
}

export function deleteGif(id){

    fetch(`https://63bdd384e348cb0762043976.mockapi.io/gifs/${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
    
    .then(res => res.json())
    .then(data => {
        alert('Gif Deleted!');
        location.reload(true);
      })
    .catch(error => console.log(error))
}
export function editGifClicks(id){
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/gifs/${id}`)
    .then(response => response.json())
    .then(data => {
        const currentClicks = data.clicks;
        const newClicks = currentClicks + 1;
        return fetch(`https://63bdd384e348cb0762043976.mockapi.io/gifs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                clicks: newClicks,    
            })
        });
    })
    .then(response => response.json()) 
    .catch(error => alert(error))
}
