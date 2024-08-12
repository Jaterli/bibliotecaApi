package com.example.bibliotecaApi.controller;

import com.example.bibliotecaApi.entities.Autor;
import com.example.bibliotecaApi.entities.Libro;
import com.example.bibliotecaApi.service.AutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RequestMapping("/api/autores")
@RestController
public class AutorController {
    @Autowired
    private AutorService autorService;

    @GetMapping
    public List<Autor> getAllAutores(){
        return autorService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Autor> getAutorById(@PathVariable Long id){
        return autorService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Autor addAutor(@RequestBody Autor autor){
        autorService.save(autor);
        return autor;
    }


    @PutMapping("/{id}")
    public String actualizarAutor(@PathVariable long id, @RequestBody Autor nuevoAutor){
        autorService.actualizarAutor(id, nuevoAutor);
        return "Autor con id " + id + " ACTUALIZADO";
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarAutor(@PathVariable long id){
        if(autorService.eliminarAutor(id)){
            return ResponseEntity.ok("Autor con id " + id + " ELIMINADO");
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontró el autor con id " + id);
        }
    }
}
