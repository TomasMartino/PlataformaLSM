package org.lsm.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

@Entity
@Table(name = "profesor")
public class Profesor extends PanacheEntity {

  private String nombre;
  private String apellido;
  private String correo;
  private Boolean active;

  // Getters
  public String getNombre() {
    return nombre;
  }

  public String getApellido() {
    return apellido;
  }

  public String getCorreo() {
    return correo;
  }

  public Boolean getActive() {
    return active;
  }

  // Setters
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public void setApellido(String apellido) {
    this.apellido = apellido;
  }

  public void setCorreo(String correo) {
    this.correo = correo;
  }

  public void setActive(Boolean active) {
    this.active = active;
  }

}
