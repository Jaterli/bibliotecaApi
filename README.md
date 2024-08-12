# API de Biblioteca con Spring Boot

### Descripción del Proyecto

Este proyecto implementa una API RESTful para la gestión de una biblioteca, utilizando Spring Boot como framework principal. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las entidades principales: **Libros** y **Autores**. Además, se utiliza una base de datos MySQL para almacenar la información. El proyecto está diseñado para integrarse fácilmente con un frontend y proporcionar una interfaz de usuario para gestionar los datos de la biblioteca.

#### Características Principales

1. **Configuración del Proyecto**
  - **Herramienta de generación de proyectos:** Spring Initializr
  - **Lenguaje:** Java
  - **Dependencias:**
    - Spring Web: Para construir servicios web RESTful.
    - Spring Data JPA: Para facilitar el acceso a datos y mapeo ORM con Hibernate.
    - MySQL Driver: Para conectar con la base de datos MySQL.
    - Lombok: Para reducir el código boilerplate.

2. **Configuración de la Base de Datos**
  - Utiliza **MySQL** como sistema de gestión de base de datos relacional.
  - La base de datos se llama `biblioteca_db`.
  - Las tablas se generan automáticamente mediante JPA al ejecutar la aplicación.

3. **Configuración de `application.properties`**
  - Define la configuración para conectar con la base de datos:
    ```properties
    spring.application.name=bibliotecaApi
    spring.datasource.url=jdbc:mysql://localhost:3306/biblioteca_db
    spring.datasource.username=root
    spring.datasource.password=
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
    ```

4. **Estructura de Archivos del Proyecto**

- A continuación expongo la estrucuta de los únicos archivos que se han creado para este proyecto:

  - **Entidades (`entities`)**: Representan las tablas de la base de datos.
    - `Autor`: Define los atributos de un autor, como `id`, `nombre` y `país`.
    - `Libro`: Define los atributos de un libro, como `id`, `título`, `categoría`, `disponible`, y referencia a un `Autor`.

  - **Controladores (`controller`)**: Gestionan las solicitudes HTTP y exponen los endpoints.
    - `AutorController`: Proporciona endpoints para gestionar autores.
    - `LibroController`: Proporciona endpoints para gestionar libros.

  - **Servicios (`service`)**: Contienen la lógica de negocio.
    - `AutorService`: Contiene la lógica para gestionar autores.
    - `LibroService`: Contiene la lógica para gestionar libros.

  - **Repositorios (`repository`)**: Gestionan el acceso a los datos mediante JPA.
    - `AutorRepository`: Define métodos para interactuar con la base de datos de autores.
    - `LibroRepository`: Define métodos para interactuar con la base de datos de libros.

5. **Endpoints Desarrollados**

  - **Libros**
    - Obtener todos los libros: `GET /api/libros`
    - Obtener un libro por ID: `GET /api/libros/{id}`
    - Crear un nuevo libro: `POST /api/libros`
    - Actualizar un libro existente: `PUT /api/libros/{id}`
    - Eliminar un libro por ID: `DELETE /api/libros/{id}`
    - Obtener libros por ID de autor: `GET /api/libros/autor/{idAutor}`
    - Obtener categorías distintas de libros: `GET /api/libros/categorias`
    - Obtener libros por categoría: `GET /api/libros/categorias/{categoria}`

  - **Autores**
    - Obtener todos los autores: `GET /api/autores`
    - Obtener un autor por ID: `GET /api/autores/{id}`
    - Crear un nuevo autor: `POST /api/autores`
    - Actualizar un autor existente: `PUT /api/autores/{id}`
    - Eliminar un autor por ID: `DELETE /api/autores/{id}`

6. **Pruebas Unitarias**

  - Las pruebas unitarias se desarrollan utilizando el framework **Mockito**.
  - Pruebas implementadas en:
    - `LibroControllerTest`: Verifica el correcto funcionamiento del controlador de libros.
    - `LibroServiceTest`: Verifica el correcto funcionamiento del servicio de libros.

7. **Anotaciones Utilizadas**

  - `@AllArgsConstructor`: Genera un constructor con un argumento para cada campo en la clase.
  - `@NoArgsConstructor`: Genera un constructor sin argumentos.
  - `@Entity`: Marca una clase como una entidad JPA.
  - `@Data`: Genera automáticamente getters y setters para los campos.
  - `@Id`: Marca un campo como la clave primaria.
  - `@ManyToOne`: Define una relación de muchos a uno entre entidades.
  - `@JoinColumn`: Especifica la columna de la base de datos para unirse en una relación.
  - `@RequestMapping("/url_api")`: Asigna una URL base para el controlador.
  - `@RestController`: Marca una clase como un controlador REST.
  - `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`: Definen rutas HTTP específicas.
  - `@Service`: Marca una clase como un servicio de Spring.
  - `@Autowired`: Inyecta dependencias en un componente de Spring.
  - `@Repository`: Marca una interfaz como un repositorio de Spring Data JPA.
  - `@RequestBody`: Indica que el cuerpo de una solicitud HTTP debe mapearse a un objeto.
  - `@RequestParam`: Vincula un parámetro de solicitud a un argumento de método.
  - `@Query`: Permite definir consultas JPQL personalizadas.
  - `@InjectMocks`, `@Mock`: Se utilizan para crear y configurar objetos simulados en pruebas unitarias.
  - `@BeforeEach`: Indica un método que debe ejecutarse antes de cada prueba.
  - `@Test`: Marca un método como una prueba de JUnit.
  - `@CrossOrigin`: Permite solicitudes CORS desde cualquier origen.

8. **Integración Frontend**

  - Se utiliza una plantilla simplificada de [SB Admin 2](https://startbootstrap.com/theme/sb-admin-2) para gestionar la API de Biblioteca.
  - El frontend incluye páginas para listar y gestionar autores y libros:
    - Listados: `libros.html`, `autores.html`
    - Gestión: `gestionar-libro.html`, `gestionar-autor.html`
  - Los archivos JavaScript para la lógica CRUD están en el directorio `js` y gestionan la interacción con la API.
  - Archivos almacenados en `src/main/resources/static` y accesibles a través de `http://localhost:8080/libros.html`.

Esta API de biblioteca es una solución completa que abarca tanto la gestión del backend con operaciones de base de datos como la integración de un frontend para facilitar la administración visual de libros y autores.