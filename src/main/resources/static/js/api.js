const API_URL_BASE = 'http://localhost:8080/api';

async function fetchAutores() {

    let url = `${API_URL_BASE}/autores`;
    let config = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        let response = await fetch(url, config); // Pasar solo url y config

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        return response.json();

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}



async function saveLibro(libro) {
      
    let url =  isNew() ? `${API_URL_BASE}/libros` : `${API_URL_BASE}/libros/${getLibroId()}`;
    
    let config = {
        method: isNew() ? 'POST': 'PUT',
        body: JSON.stringify(libro),
        headers: {
            "Content-Type": "application/json"
        }
    }
    console.log('url '+url);
    console.log(libro);
    console.log(config);

    try {
        let response = await fetch(url, config);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        alert("Libro guardado con éxito");
        window.location.href = 'libros.html';

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}



async function saveAutor(autor) {
      
    let url =  isNew() ? `${API_URL_BASE}/autores` : `${API_URL_BASE}/autores/${getAutorId()}`;
    
    let config = {
        method: isNew() ? 'POST': 'PUT',
        body: JSON.stringify(autor),
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        let response = await fetch(url, config);        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        alert("Autor guardado con éxito");
        window.location.href = 'autores.html';

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}



async function getLibroById(id){

    let url = `${API_URL_BASE}/libros/${id}`;
    let config = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {

        let response = await fetch(url, config); // Pasar solo url y config

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        return response.json();

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}



async function getAutorById(id){

    let url = `${API_URL_BASE}/autores/${id}`;
    let config = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {

        let response = await fetch(url, config); // Pasar solo url y config

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        return response.json();

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}



async function getCategorias(){

    let url = `${API_URL_BASE}/libros/categorias`;
    let config = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {

        let response = await fetch(url, config); // Pasar solo url y config

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        return response.json();

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
