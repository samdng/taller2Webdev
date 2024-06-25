package com.example.backSRest.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "persona", schema = "clase")
public class Persona {
    private Long id;
    private String nombre;
    private String apellido;
    private String login;
    private String pass;
}
