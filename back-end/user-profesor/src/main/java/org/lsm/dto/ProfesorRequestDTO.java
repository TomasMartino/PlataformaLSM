package org.lsm.dto;

public record ProfesorRequestDTO(
    String nombre,
    String apellido,
    String correo,
    Boolean active) {
}
