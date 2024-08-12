package com.example.bibliotecaApi.controller;

import com.example.bibliotecaApi.entities.Libro;
import com.example.bibliotecaApi.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*") // Permite solicitudes CORS desde cualquier origen
@RequestMapping("/api/libros")
@RestController
public class LibroController {

    @Autowired
    private LibroService libroService;

    // Endpoint para obtener todos los libros
    @GetMapping
    public List<Libro> getAllLibros() {
        return libroService.findAll();
    }

    // Endpoint para obtener un libro por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Libro> getLibroById(@PathVariable Long id) {
        return libroService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Endpoint para crear un nuevo libro
    @PostMapping
    public Libro addLibro(@RequestBody Libro libro) {
        libroService.save(libro);
        return libro;
    }

    // Endpoint para actualizar un libro existente
    @PutMapping("/{id}")
    public ResponseEntity<Libro> updateBook(@PathVariable long id, @RequestBody Libro libro) {
        return libroService.findById(id)
                .map(existingBook -> {
                    libro.setId(existingBook.getId());
                    return ResponseEntity.ok(libroService.save(libro));
                }).orElse(ResponseEntity.notFound().build());
    }

    // Endpoint para eliminar un libro por su ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable long id) {
        libroService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Endpoint para obtener libros por el ID del autor
    @GetMapping("/autor/{idAutor}")
    public List<Libro> getLibrosByAutor(@PathVariable Long idAutor) {
        return libroService.findByAutorId(idAutor);
    }

    // Endpoint para obtener una lista de categorías distintas
    @GetMapping("/categorias")
    public List<String> getCategories() {
        return libroService.findDistinctCategories();
    }

    // Endpoint para obtener libros por categoría
    @GetMapping("/categorias/{categoria}")
    public List<Libro> getLibrosByCategory(@PathVariable String categoria) {
        return libroService.findByCategory(categoria);
    }
}