export function getNavbar(div,element){
    let html = `
            <nav class="navbar navbar-expand-lg  ">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  d-flex justify-content-between" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link " id="index" href="/index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " id="categories" href="/categories.html">Categories</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " id="post" href="/post.html">Post Animation</a>
                </li>
               
                <li class="nav-item">
                    <a class="nav-link " id="contact" href="/contact.html">Contact</a>
                </li>
                </ul>
                <ul class="navbar-nav d-none" id="admin-only">
                    <li class="nav-item">
                        <a class="nav-link " id="mg" href="/admin/manageGifs.html">Manage Gifs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " id="mc" href="/admin/manageCategories.html">Manage Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " id="mr" href="/admin/manageRequests.html">Manage Requests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " id="mm" href="/admin/manageMessages.html">Manage Messages</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a id="admin-btn" class="nav-link bg-transparent text-light border-0 login-btn" href="admin.html">Admin <i class="fa-solid fa-lock"></i><i class="fa-solid fa-unlock"></i></a>
                    </li>
                    <li class="nav-item d-none" id="lo">
                        <a id="lobtn" class="nav-link text-light" href="/index.html">Log Out  <i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    `
    document.getElementById(div).innerHTML = html
    if(element !== '0'){
        const el = document.getElementById(element)
        el.classList.add('active')
    }
    if(localStorage.getItem('kaAdmin') === 'true'){
        let x = document.getElementById('admin-only')
        x.classList.remove('d-none')
        let x2 = document.getElementById('lo')
        x2.classList.remove('d-none')
        let x3 = document.getElementById('admin-btn')
        x3.classList.add('d-none')
    }
    
}

export function getFooter(div){
    let html = ` <div class="content d-flex justify-content-between text-light ">
        <p class="p-2 m-0 align-self-center">All Rights Reserved &copy</p>
        <ul class="d-flex justify-content-end m-0 align-items-center">
            <li class="p-2"><i class="fa-brands fa-facebook"></i></li>
            <li class="p-2"><i class="fa-brands fa-instagram"></i></li>
            <li class="p-2"><i class="fa-brands fa-twitter"></i></li>
        </ul>
</div>`
    document.getElementById(div).innerHTML = html
}

export function getItemFromURL(url, item) {
    if(!url.includes('?')) return null
    const url_sp = new URLSearchParams(url.split('?')[1])
    return url_sp.get(item)
    
  }
  export function editClicks(table,id){
    fetch(`https://63bdd384e348cb0762043976.mockapi.io/${table}/${id}`)
    .then(response => response.json())
    .then(data => {
        const currentClicks = data.clicks;
        const newClicks = currentClicks + 1;
        return fetch(`https://63bdd384e348cb0762043976.mockapi.io/${table}/${id}`, {
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
