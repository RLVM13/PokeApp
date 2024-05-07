import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Details({ name, base, peso, imagen }) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80"
          image={imagen}
          alt="imagen pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Base de Experiencia : {base}<br></br>
          Peso : {peso}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}