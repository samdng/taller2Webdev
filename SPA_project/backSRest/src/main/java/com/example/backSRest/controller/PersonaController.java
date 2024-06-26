package com.example.backSRest.controller;

import com.example.backSRest.exception.ResourceNotFoundException;
import com.example.backSRest.model.Persona;
import com.example.backSRest.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rrhh/persona")
public class PersonaController {
    @Autowired
    private PersonaRepository personaRepository;

    @GetMapping("/persona")
    public List<Persona> getAllPersonas(){
        return personaRepository.findAll();
    }

    @GetMapping("/persona/{id}")
    public ResponseEntity<Persona> getByIDPersona(@PathVariable(value = "id") Long PersonaId)
    throws ResourceNotFoundException {
        Persona persona = personaRepository.findById(PersonaId)
                .orElseThrow(()-> new ResourceNotFoundException("no se encuentra  la persona con id:"+PersonaId));
        return ResponseEntity.ok().body(persona);
    }

    @PostMapping("/persona")
    public Persona createPersona (@Validated @RequestBody Persona persona){
        return personaRepository.save(persona);
    }

    @PutMapping("/Persona/{id}")
    public ResponseEntity<Persona> updatePersona(@PathVariable(value = "id") Long PersonaId, @Validated @RequestBody Persona personaDetail)
    throws ResourceNotFoundException {
        Persona persona = personaRepository.findById(PersonaId)
                .orElseThrow(()-> new ResourceNotFoundException("no se encuentra  la persona con id:"+PersonaId));
        persona.setId(personaDetail.getId());
        persona.setNombre(personaDetail.getNombre());
        persona.setLogin(personaDetail.getLogin());
        persona.setPass(personaDetail.getPass());
        final Persona updPersona = personaRepository.save(persona);
        return ResponseEntity.ok().body(updPersona);
    }
}
