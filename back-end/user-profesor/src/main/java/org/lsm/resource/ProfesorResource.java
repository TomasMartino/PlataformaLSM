package org.lsm.resource;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

import org.lsm.dto.ProfesorRequestDTO;
import org.lsm.dto.ProfesorResponseDTO;
import org.lsm.service.ProfesorService;

@Path("/api/profesor")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProfesorResource {

  @Inject
  ProfesorService service;

  @POST
  public Response create(ProfesorRequestDTO dto) {
    return Response.status(Response.Status.CREATED)
        .entity(service.create(dto))
        .build();
  }

  @GET
  public List<ProfesorResponseDTO> findAll() {
    return service.findAll();
  }

  @GET
  @Path("/{id}")
  public ProfesorResponseDTO findById(@PathParam("id") Long id) {
    return service.findById(id);
  }

  @PUT
  @Path("/{id}")
  public ProfesorResponseDTO update(@PathParam("id") Long id, ProfesorRequestDTO dto) {
    return service.update(id, dto);
  }

  @DELETE
  @Path("/{id}")
  public Response delete(@PathParam("id") Long id) {
    service.delete(id);
    return Response.noContent().build();
  }
}
