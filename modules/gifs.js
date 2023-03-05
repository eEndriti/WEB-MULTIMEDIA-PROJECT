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
                    <a href="#" class="btn btn-primary">View Details...</a>
                    </div>
                </div>
            `
            i++
                    }
           
        })
            
        
        document.getElementById(div).innerHTML = composeHTML
    })
   
}