package com.example.bibliotecaApi;

import com.example.bibliotecaApi.entities.Autor;
import com.example.bibliotecaApi.entities.Libro;
import com.example.bibliotecaApi.repository.LibroRepository;
import com.example.bibliotecaApi.service.LibroService;
import org.junit.Test; // Importa la anotación @Test para marcar métodos de prueba
import org.junit.runner.RunWith; // Importa la anotación @RunWith para especificar el corredor de pruebas
import org.mockito.InjectMocks; // Importa la anotación @InjectMocks para inyectar mocks en el objeto de prueba
import org.mockito.Mock; // Importa la anotación @Mock para crear mocks
import org.mockito.junit.MockitoJUnitRunner; // Importa el corredor de pruebas de Mockito

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when; // Importa el método when para definir el comportamiento de los mocks
import static org.mockito.internal.verification.VerificationModeFactory.times; // Importa el método times para definir el número de veces que se espera una interacción

@RunWith(MockitoJUnitRunner.class) // Usa MockitoJUnitRunner para ejecutar las pruebas con Mockito
public class LibroServiceTest {

    @InjectMocks
    private LibroService libroService; // Inyecta el mock LibroRepository en el objeto libroService

    @Mock
    private LibroRepository libroRepository; // Crea un mock de LibroRepository

    @Test // Marca este método como una prueba unitaria
    public void testFindAll() {
        // Crea dos objetos Autor
        Autor autor1 = new Autor(1L, "Autor1", "Pais1");
        Autor autor2 = new Autor(2L, "Autor2", "Pais2");

        // Crea una lista de libros y añade dos libros a la lista
        List<Libro> libros = new ArrayList<>();
        libros.add(new Libro(1L, "Título1", "Categoría1", true, autor1));
        libros.add(new Libro(2L, "Título2", "Categoría2", false, autor2));

        // Define el comportamiento del mock libroRepository para el método findAll
        when(libroRepository.findAll()).thenReturn(libros);

        // Llama al método findAll del servicio
        List<Libro> resultado = libroService.findAll();

        // Comprueba que el resultado contiene dos elementos
        assertEquals(2, resultado.size());
        // Verifica que el método findAll del repositorio se llamó una vez
        verify(libroRepository, times(1)).findAll();
    }

    @Test // Marca este método como una prueba unitaria
    public void testFindById() {
        // Arrange: Configura los datos de prueba y el comportamiento del mock
        Autor autor1 = new Autor(1L, "Autor1", "Pais1");
        Libro libro = new Libro(1L, "Título1", "Categoría1", true, autor1);
        // Define el comportamiento del mock libroRepository para el método findById
        when(libroRepository.findById(1L)).thenReturn(Optional.of(libro));

        // Act: Llama al método findById del servicio
        Optional<Libro> resultado = libroService.findById(1L);

        // Assert: Comprueba que el resultado es el libro esperado
        assertEquals(libro, resultado.get());
        // Verifica que el método findById del repositorio se llamó una vez
        verify(libroRepository, times(1)).findById(1L);
    }
}
