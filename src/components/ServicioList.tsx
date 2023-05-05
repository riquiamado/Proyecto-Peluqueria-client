
// import { useEffect } from 'react';

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Paper,
// } from '@mui/material';
// import { useStore } from '../store/services';

// const ServicioList = () => {
//   const servicios = useStore((state) => state.servicios);
//   const fetchServicios = useStore((state) => state.fetchServicios);
//    console.log(servicios)
//   useEffect(() => {
//     fetchServicios();
//   }, [fetchServicios]);

//   return (
//     <Paper>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Nombre</TableCell>
//             <TableCell>Precio</TableCell>
//             <TableCell>Duración</TableCell>
//             <TableCell>Descripcion</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {servicios?.map((servicio) => (
//             <TableRow key={servicio._id}>
//               <TableCell>{servicio.name}</TableCell>
//               <TableCell>{servicio.price}</TableCell>
//               <TableCell>{servicio.duration}</TableCell>
//               <TableCell>{servicio.description}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// };

// export default ServicioList;


import { useEffect } from 'react';
import {Service} from "../models/service"
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
} from '@mui/material';
import { useStore } from '../store/services';

const ServicioCard = ({ servicio }: { servicio: Service }) => {
  return (
    <Card>
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
        <Typography>
            Decripcion: {servicio.description}
        </Typography>
      </CardContent>
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

