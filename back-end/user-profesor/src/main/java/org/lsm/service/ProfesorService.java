package org.lsm.service;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import org.lsm.dto.ProfesorRequestDTO;
import org.lsm.dto.ProfesorResponseDTO;
import org.lsm.model.Profesor;

@ApplicationScoped
public class ProfesorService {

  @Transactional
  public ProfesorResponseDTO create(ProfesorRequestDTO dto) {
    Profesor entity = new Profesor();
    
    // Mapeo DTO → Entity
    entity.setNombre(dto.nombre());
    entity.setApellido(dto.apellido());
    entity.setCorreo(dto.correo());
    entity.setActive(dto.active());
    
    entity.persist();
    return toDTO(entity);
  }

  public List<ProfesorResponseDTO> findAll() {
    return Profesor.<Profesor>listAll().stream()
        .map(this::toDTO)
        .collect(Collectors.toList());
  }

  public ProfesorResponseDTO findById(Long id) {
    Profesor entity = Profesor.findById(id);
    if (entity == null) {
      throw new RuntimeException("Profesor not found with id: " + id);
    }
    return toDTO(entity);
  }

  @Transactional
  public ProfesorResponseDTO update(Long id, ProfesorRequestDTO dto) {
    Profesor entity = Profesor.findById(id);
    if (entity == null) {
      throw new RuntimeException("Profesor not found with id: " + id);
    }
    
    // Actualizar campos desde DTO
    entity.setNombre(dto.nombre());
    entity.setApellido(dto.apellido());
    entity.setCorreo(dto.correo());
    entity.setActive(dto.active());
    
    return toDTO(entity);
  }

  @Transactional
  public void delete(Long id) {
    Profesor entity = Profesor.findById(id);
    if (entity == null) {
      throw new RuntimeException("Profesor not found with id: " + id);
    }
    entity.delete();
  }

  private ProfesorResponseDTO toDTO(Profesor entity) {
    return new ProfesorResponseDTO(
        entity.id,
        entity.getNombre(),
        entity.getApellido(),
        entity.getCorreo(),
        entity.getActive()
    );
  }
}
