export function getNavbar(div,element){
    let html = `
            <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link " id="index" href="/index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " id="categories" href="./categories.html">Categories</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " id="post" href="./post.html">Post Animation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " id="about" href="./about.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " id="contact" href="./contact.html">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    `
    document.getElementById(div).innerHTML = html
    const el = document.getElementById(element)
    el.classList.add('active')
    
}
export function getFooter(div){
    let html = ` <div class="content d-flex justify-content-between text-light">
    <p class="p-2">All Rights Reserved &copy</p>
    <ul class="d-flex justify-content-end">
        <li class="p-2"><i class="fa-brands fa-facebook"></i></li>
        <li class="p-2"><i class="fa-brands fa-instagram"></i></li>
        <li class="p-2"><i class="fa-brands fa-twitter"></i></li>
    </ul>
</div>`
    document.getElementById(div).innerHTML = html
}