
# API BIBLIOTECA

Esta API permite gestionar una coleccion de libros. A continuación se describen los endpoints disponibles.

## Endpoints

### Obtener todos los Libros

#### GET `/api/libros`

**Descripción:** Devuelve una lista de todos los libros.

**Respuesta Exitosa:**
- **Código:** 200 OK.
- **Cuerpo:** Array de Objetos Libro

- Ejemplo de Respuesta:
    ```json
  [
     {
        "id": 1,
        "titulo": "Cien años de soledad",
        "categoria": "novela",
        "disponible": true,
        "autor": {
            "id": 1,
            "nombre": "Gabriel García Márquez",
            "pais": "Colombia"
         }
      }
  ]
    ```
### Obtener un Libro por ID

#### GET `/api/libros/{id}`

**Descripción:** Devuelve un libro específico basado en el ID proporcionado.

**Parámetros:**

- **Path Variable:** `id` (Long) - ID del libro

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Objeto Libro

**Respuesta en caso de no encontrar el libro:**

- **Código:** 404 Not Found


### Crear un Nuevo Libro

#### POST `/api/libros`
**Descripción:** Guarda Libro en Base de datos.

**Cuerpo de la Solicitud:**

- **Tipo:** JSON
- **Ejemplo:**   
- ```json
 
  {
    "id": 1,
    "titulo": "Cien años de soledad",
    "categoria": "novela",
    "disponible": true,
    "autor": {
        "id": 1
    }
  }
    ```

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Objeto Libro

### Obtener todos los Autores

#### GET `/api/autores`

**Descripción:** Devuelve una lista de todos los autores.

**Respuesta Exitosa:**
- **Código:** 200 OK.
- **Cuerpo:** Array de Objetos Autor

- Ejemplo de Respuesta:
    ```json
  [
     {
       "id": 1,
        "nombre": "Gabriel García Márquez",
        "pais": "Colombia"
      }
  ]
