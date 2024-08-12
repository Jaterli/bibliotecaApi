async function listarLibros() {
    
    if(hasCategoria()) return;

    try {
        let response = await fetch("http://localhost:8080/api/libros", {
            method: "GET",
            headers: { "Content-type": "application/json" }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        let json = await response.json();
        let html = '';

        json.forEach(libro => {
            html += 
            `<tr>       
                <td>${libro.titulo}</td>
                <td>${libro.categoria}</td>
                <td>${libro.autor.nombre}</td>
                <td>${libro.disponible ? 'Sí' : 'No'}</td>
                <td>
                    <a href="#" onclick="editLibro(${libro.id})" class="btn btn-primary btn-icon-split">
                        <span class="text">Editar</span>
                    </a>
                    <a href="#" onclick="deleteLibro(${libro.id})" class="btn btn-danger btn-icon-split">
                        <span class="text">Eliminar</span>
                    </a>
                </td>
            </tr>`;
        });

        document.getElementById('tablaLibros').innerHTML = html;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}



async function getLibrosByCategory() {
    
    if(!hasCategoria()) return;

    let categoria = getCategoria();

    try {
        let response = await fetch("http://localhost:8080/api/libros/categorias/"+categoria, {
            method: "GET",
            headers: { "Content-type": "application/json" }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        let json = await response.json();
        let html = '';

        json.forEach(libro => {
            html += 
            `<tr>       
                <td>${libro.titulo}</td>
                <td>${libro.categoria}</td>
                <td>${libro.autor.nombre}</td>
                <td>${libro.disponible ? 'Sí' : 'No'}</td>
                <td>
                    <a href="#" onclick="editLibro(${libro.id})" class="btn btn-primary btn-icon-split">
                        <span class="text">Editar</span>
                    </a>
                    <a href="#" onclick="deleteLibro(${libro.id})" class="btn btn-danger btn-icon-split">
                        <span class="text">Eliminar</span>
                    </a>
                </td>
            </tr>`;
        });

        document.getElementById('tablaLibros').innerHTML = html;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}



async function deleteLibro(id){
    let confirmaEliminar = confirm("Deseas eliminar el libro?")
    if (confirmaEliminar){
        
        try {
            let response = await fetch("http://localhost:8080/api/libros/"+id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
           
            // Recargar la lista de libros después de la eliminación
            listarLibros();

        }catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return null;
        }
    }
}


function editLibro(id){
    window.location.href = 'gestionar-libro.html?id='+id
}


function hasCategoria(){
    return window.location.href.includes('?categoria=');
}


function getCategoria(){
    
    let auxSplit = window.location.href.split('?categoria=');
    let categoria = auxSplit[1];
    return categoria;
}


async function listarCategorias(){

    let categorias = await getCategorias();
    let container = document.getElementById('categoria-container');
    container.innerHTML = '';

    categorias.forEach(categoria =>{
        let buttonHtml = 
        `
        <div class="text-right" style="display:inline-block">
            <a href="libros.html?categoria=${categoria}" class="btn btn-primary btn-icon-split d-flex btn-margin">
            <span class="text">${categoria}</span>
            </a>
        </div>
        `;
        container.innerHTML += buttonHtml;
    });
}


async function initLibros() {
    await listarLibros();
    await listarCategorias();
    await getLibrosByCategory();
}

document.addEventListener('DOMContentLoaded', async () => {
    await initLibros();
    // Aquí podrías desencadenar un evento personalizado indicando que las operaciones han terminado
    document.dispatchEvent(new Event('tableReady'));
});