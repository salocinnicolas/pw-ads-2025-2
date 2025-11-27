import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import imagem from '/src/assets/imagem.jpg'

export default function MediaCard() {


  const [likes, setLikes] = useState(() => {
    const armazem = localStorage.getItem("likes");
    return armazem !== null ? Number(armazem) : 0;
  });

 
  useEffect(() => {
    localStorage.setItem("likes", likes);
  }, [likes]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="nicol"
        height="500"
        image={imagem}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nícolas de Oliveira e Melo
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Esta é a prova de Nícolas
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => setLikes(likes + 1)}>
          Likes: {likes} <FavoriteIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
}