function guardarLibro(){
    const libroForm = document.getElementById('libroForm');
    libroForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const titulo = document.getElementById('titulo').value;
        const categoria = document.getElementById('categoria').value;
        const disponible = document.getElementById('disponible').value;
        const autor = document.getElementById('autor').value;
        
        // Guardar el libro con los datos del formulario
        // Lógica para enviar los datos a la API
        let libro = {
            "titulo": titulo,
            "categoria":categoria,
            "disponible": disponible,
            "autor": {
                "id": autor
            }
        }
        
        saveLibro(libro);
    });
}


async function cargarLibro(){
    
    if (isNew()){
        return;
    }

    let id = getLibroId();
    let libro = await getLibroById(id);
    document.getElementById('titulo').value = libro.titulo;
    document.getElementById('categoria').value = libro.categoria;
    document.getElementById('disponible').value = libro.disponible ? true: false;
    let autorid = libro.autor.id;
    let optionsAutores = document.getElementById('autor');



    for (let i = 0; i < optionsAutores.length; i++){
        if (optionsAutores[i].value == autorid.toString()){            
            optionsAutores[i].selected = true;
            break;
        }
    }    

}


async function cargarAutores(){
    let json = await fetchAutores();
    let select = document.getElementById('autor');

    json.forEach(autor => {
        let option = document.createElement('option');
        option.value = autor.id;
        option.text = autor.nombre;
        select.appendChild(option);
    });
}


function getLibroId(){

    let auxSplit = window.location.href.split('?id=');
    let id = auxSplit[1];
    return id;

}


function isNew(){
    let hasIdInUrl = window.location.href.includes('?');
    return !hasIdInUrl;
}

cargarLibro();
cargarAutores();
guardarLibro();