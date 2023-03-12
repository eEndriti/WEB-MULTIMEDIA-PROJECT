export function getAdminReq(div){
    let content = ''
    let composeHTML = ''
    let i = 1
    fetch(`https://640a41e181d8a32198c4b76a.mockapi.io/postedForReview`)
    .then(response => response.json())
    .then(gifs =>{       
                 
        composeHTML += `
        <tr class="fs-5 bg-dark fw-bold">
            <td style="border-bottom:2px solid #102b57 !important">Nr.</td>
            <td style="border-bottom:2px solid #102b57 !important">Email</td>
            <td style="border-bottom:2px solid #102b57 !important">Source</td>
            <td style="border-bottom:2px solid #102b57 !important">Content</td>
            <td style="border-bottom:2px solid #102b57 !important">date</td>
            <td style="border-bottom:2px solid #102b57 !important">Options</td>
        </tr>
        `
        gifs.forEach(gif =>{
            if(gif.html != 0){
                content += 'HTML '
            }if(gif.css != 0){
                content += 'CSS '
            }if(gif.javascript != 0){
                content += 'JavaSript'
            }
                    i++           
                    composeHTML += `
                <tr>
                    <td>${i}</td>
                    <td>${gif.email}</td>
                    <td>${gif.source}</td>
                    <td>${content}</td>
                    <td>${gif.date}</td>
                    <td class="p-1">  

                    <button type="button" id="editReq" class="btn btn-outline-primary fw-bold " data-bs-toggle="modal" data-bs-target="#editReqModal"style="background-color:transparent !important;color:white;border:2px solid #0a58ca !important"  value="${gif.id}">view</button>


                    <button type="button" id="deleteReq" class="btn btn-outline-danger fw-bold " style="background-color:transparent !important;color:white;border:2px solid red !important"  value="${gif.id}">Delete</button>
                    
                    </td>

                </tr>
            `
           content = ''
        })
            
        document.getElementById('loading').classList.add('d-none')
        document.getElementById(div).innerHTML = composeHTML
        document.getElementById(div).classList.remove('d-none')
    })
}
export function getSpecificReq(id){
    fetch(`https://640a41e181d8a32198c4b76a.mockapi.io/postedForReview/${id}`)
    .then(response => response.json())
    .then(req =>{
        document.getElementById('req-id').value = req.id
        document.getElementById('req-title').value = req.title
        document.getElementById('req-postedBy').value = req.postedBy
        document.getElementById('req-email').value = req.email
        document.getElementById('req-source').value = req.source
        document.getElementById('req-html').value = req.html
        document.getElementById('req-css').value = req.css
        document.getElementById('req-js').value = req.javascript
    }).then(fetch(`https://63bdd384e348cb0762043976.mockapi.io/categories`)
    .then(response => response.json())
    .then(categories =>{
        
        const selectElement = document.getElementById('select-ctg');
        selectElement.innerHTML = ''
        categories.forEach((category) => {
            const optionElement = document.createElement('option');
            optionElement.value = category.id;
            optionElement.textContent = category.name;
            selectElement.appendChild(optionElement);
        });
    }))
}
export function deleteReq(id){
    fetch(`https://640a41e181d8a32198c4b76a.mockapi.io/postedForReview/${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
    
    .then(res => res.json())
    .then(data => {
        alert('Request succesfully deleted!')
        location.reload(true);
      })
    .catch(error => console.log(error))
}
export function acceptRequest(){
    const reqId = document.getElementById('req-id').value
    const selected = document.getElementById('select-ctg')
    const selectedIndex = selected.value
    const gif = document.getElementById('req-image').value     
    const postedBy = document.getElementById('req-postedBy').value
    const title = document.getElementById('req-title').value
    const source = document.getElementById('req-source').value
    const html = document.getElementById('req-html').value
    const css = document.getElementById('req-css').value
    const javascript = document.getElementById('req-js').value
    let content = ''

    if(html != '0'){
        content += 'HTML'
    }
    if(css != '0'){
        content += 'CSS'
    }
    if(javascript != '0'){
        content += 'JavaScript'
    }
    
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/gifs`, {
     method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: title,
        source: source,
        content:content,
        html:html,
        css:css,
        javascript:javascript,
        category:selectedIndex,
        gif:gif,
        clicks:'0',
        postedBy:postedBy
    }         )
    })
    .then(response => response.json())
    .then(data => {
        alert('Gif succesfully registred!');
        deleteReq(reqId)
      }) 
    .catch(error => alert(error))
}
export function getMessages(div){
    let composeHTML = ''
    fetch(`https://640a41e181d8a32198c4b76a.mockapi.io/messages`)
    .then(response => response.json())
    .then(messages =>{       
        messages.forEach(message =>{
                   
                        
                    composeHTML += `    
                    <div class="container border border-dark m-3  justify-content-center">
                    <h2><b>Email:</b><span>${message.email}</span></h2>
                    <h4><b>Subject:</b><span>${message.subject}</span></h4>
                    <p><b>Message:</b><span>${message.message}</span></p>
                    <button id="deleteMsg" class="btn m-2 btn-primary" value="${message.id}">Reviewed</button>
                </div>
            `
        })
        document.getElementById('loading').classList.add('d-none')
        document.getElementById(div).innerHTML = composeHTML
        document.getElementById(div).classList.remove('d-none')
    })
            
}

export function deleteMsg(id){
    fetch(`https://640a41e181d8a32198c4b76a.mockapi.io/messages/${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
    
    .then(res => res.json())
    .then(data => {
        alert('Message succesfully deleted!')
        location.reload(true);
      })
    .catch(error => console.log(error))
}