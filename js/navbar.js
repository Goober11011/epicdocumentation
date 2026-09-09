fetch("/components/navbar.html")
    .then(response => response.text())
    .then(navbarHTML => {
        document.querySelector("#navbar-container").innerHTML = navbarHTML;
    });
