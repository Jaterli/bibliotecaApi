/*
function nuevoAutor(){
       
    const autorSelect = document.getElementById('autor');
    const nuevoAutorContainer = document.getElementById('nuevoAutorContainer');
    const nuevoAutorInput = document.getElementById('nuevoAutor');

    autorSelect.addEventListener('change', () => {
        if (autorSelect.value === 'new') {
            nuevoAutorContainer.classList.remove('d-none');
            nuevoAutorInput.setAttribute('required', true);
        } else {
            nuevoAutorContainer.classList.add('d-none');
            nuevoAutorInput.removeAttribute('required');
        }
    });

}
*/

function guardarAutor(){
    const autorForm = document.getElementById('autorForm');
    autorForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const nombre = document.getElementById('nombre').value;
        const pais = document.getElementById('pais').value;
        
        // Guardar el autor con los datos del formulario
        // Lógica para enviar los datos a la API
        let autor = {
            "nombre": nombre,
            "pais": pais,
        }

        saveAutor(autor);
    });
}


async function cargarAutor(){
    
    if (isNew()){
        return;
    }

    let id = getAutorId();
    let autor = await getAutorById(id);
    document.getElementById('nombre').value = autor.nombre;
    document.getElementById('pais').value = autor.pais;   

}


function getAutorId(){

    let auxSplit = window.location.href.split('?id=');
    let id = auxSplit[1];
    return id;

}


function isNew(){
    let hasIdInUrl = window.location.href.includes('?');
    return !hasIdInUrl;
}


cargarAutor();
guardarAutor();