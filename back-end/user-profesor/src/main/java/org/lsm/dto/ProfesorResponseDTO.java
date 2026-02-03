package org.lsm.dto;

public record ProfesorResponseDTO(
    Long id,
    String nombre,
    String apellido,
    String correo,
    Boolean active) {
}
