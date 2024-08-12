async function listarAutores() {

    let json = await fetchAutores();
    let html = '';
    
    json.forEach(autor => {
        html += 
        `<tr>
            <td>${autor.nombre}</td>
            <td>${autor.pais}</td>

            <td>
                <a href="#" onclick="verLibrosPorAutor(${autor.id})" class="btn btn-info btn-icon-split">
                    <span class="text">Ver libros</span>
                </a>
                <a href="#" onclick="editAutor(${autor.id})" class="btn btn-primary btn-icon-split">
                    <span class="text">Editar</span>
                </a>                
                <a href="#" onclick="deleteAutor(${autor.id})" class="btn btn-danger btn-icon-split">
                    <span class="text">Eliminar</span>
                </a>                
            </td>
            
        </tr>`;
    });

    document.getElementById('tablaAutores').innerHTML = html;

}



async function deleteAutor(id){
    let confirmaEliminar = confirm("Deseas eliminar el autor?")
    if (confirmaEliminar){
        
        try {
            let response = await fetch("http://localhost:8080/api/autores/"+id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
           
            // Recargar la lista de autores después de la eliminación
            listarAutores();

        }catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return null;
        }
    }
}



async function initAutores() {
    await listarAutores();
}



function editAutor(id){
    window.location.href = 'gestionar-autor.html?id='+id
}



document.addEventListener('DOMContentLoaded', async () => {
    await initAutores();
    // Aquí podrías desencadenar un evento personalizado indicando que las operaciones han terminado
    document.dispatchEvent(new Event('tableReady'));
});
