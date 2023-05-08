

import { useEffect } from "react";
import { Service } from "../models/service";
import { Card, CardContent, Typography, Grid, Container, CardActionArea, CardMedia } from "@mui/material";
import { useStore } from "../store/services";

const ServicioCard = ({ servicio }: { servicio: Service }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
        component="img"
        image={servicio.image}
        height="200"
        alt="description"
        />
      <CardContent>
        <Typography variant="h5" component="div">
          {servicio.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: {servicio.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duración: {servicio.duration}
        </Typography>
        <Typography>Decripcion: {servicio.description}</Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
};

const ServicioList = () => {
  const servicios = useStore((state) => state.servicios);
  const fetchServicios = useStore((state) => state.fetchServicios);

  useEffect(() => {
    fetchServicios();
  }, [fetchServicios]);

  return (
    <Container>
      <Grid container spacing={3}>
        {servicios.map((servicio) => (
          <Grid item xs={12} sm={6} md={4} key={servicio._id}>
            <ServicioCard servicio={servicio} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicioList;
