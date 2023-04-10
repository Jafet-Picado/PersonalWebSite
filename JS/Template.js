const header = document.createElement('template');
const headerContainer = document.getElementById('headerContainer');
const footer = document.createElement('template');
const footerContainer = document.getElementById('footerContainer');


header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">             
        <div class="container-fluid">                    
            <a class="website_name navbar-brand" href="index.html">
                <img src="../images/logo.png" class="logo" alt="Logo">
                Jafet - WebSite
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav menu">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Goals.html">Objetivos</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Computación</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">                                    
                            <li><a class="dropdown-item" href="WhyIS.html">¿Por qué computación?</a></li>
                            <li><a class="dropdown-item" href="Courses.html">Cursos preferidos</a></li>
                            <li><a class="dropdown-item" href="People.html">Mis profesores y compañeros</a></li>
                            <li><a class="dropdown-item" href="Downloads.html">Descargas</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Hobbies.html">Pasatiempos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="About.html">Acerca de este sitio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Contact.html">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>                    
    </nav>     
`;

footer.innerHTML = `

    <span class="footerContent">
        Autor: Jafet Picado Quirós C05977
        <br>                
        <a href="mailto:jafet.picado@ucr.ac.cr">jafet.picado@ucr.ac.cr</a>
    </span>

`;

headerContainer.appendChild(header.content);
footerContainer.appendChild(footer.content);