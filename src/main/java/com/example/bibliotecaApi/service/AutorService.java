package com.example.bibliotecaApi.service;

import com.example.bibliotecaApi.entities.Autor;
import com.example.bibliotecaApi.repository.AutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AutorService {

    @Autowired
    private AutorRepository autorRepository;

    public List<Autor> findAll() {
        return autorRepository.findAll();
    }

    public Optional<Autor> findById(Long id){
        return autorRepository.findById(id);
    }


    public void save(Autor autor) {
        autorRepository.save(autor);
    }

    public void actualizarAutor(long id, Autor nuevoAutor){
        Optional<Autor> autorAEliminar = findById(id);

        findById(id).ifPresent(autor -> {
            autor.setNombre(nuevoAutor.getNombre());
            autor.setPais(nuevoAutor.getPais());
            save(autor);
        });
    }

    public boolean eliminarAutor(long id) {
        Optional<Autor> autorAEliminar = findById(id);

        if (autorAEliminar.isPresent()) {
            autorRepository.delete(autorAEliminar.get());
            return true;
        } else {
            return false;
        }
    }

}
