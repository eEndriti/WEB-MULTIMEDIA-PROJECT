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
                    <a href="#" class="btn w-100">View Details...</a>
                    </div>
                </div>
            `
            i++
                    }
           
        })
            
        
        document.getElementById(div).innerHTML = composeHTML
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

           document.getElementById(div).innerHTML = composeHTML
        })
}