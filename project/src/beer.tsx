import { Rating } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';
import grangesImage from './bilder/gränges.jpg';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export interface BeerData {
  name: string;
  caption: string; // Typo corrected to `caption`
  rating: number;
  imgSource: string;
}

const beers: BeerData[] = [
  {
    name: "Heineken 3,5%",
    caption: "Smakar nästan identiskt med starkisen. Väldigt trevlig.",
    rating: 5,
    imgSource: "/bilder/heineken.png"
  },
  {
    name: "Falcon 3,5%",
    caption: "Riktigt stabil, smakrik och har minimal folkissmak. Bättre än starkölen",
    rating: 5,
    imgSource: "/bilder/falcon.PNG"
  },
    {
    name: "Gränges 2,1%",
    caption: "En förvånansvärt god öl för att endast vara en lättis.",
    rating: 4,
    imgSource: "/bilder/gränges.jpg"
  },
  {
    name: "Staro",
    caption: "Smakrik folkis med karaktär av en starköl.",
    rating: 4,
    imgSource: "/bilder/staro.png"
  },
  {
    name: "Spendrups 2,8%",
    caption: "Medelgod smak, men helt klart njutbar.",
    rating: 3,
    imgSource: "/bilder/spendrups.png"
  }, 
  
  {
    name: "Mariestad 3,5%",
    caption: "Tråkig smak, god men hade hellre valt något annat.",
    rating: 3,
    imgSource: "/bilder/mariestad.jpg"
  },
  {
    name: "Heineken 3,5%",
    caption: "Smakar nästan identiskt med starkisen. Väldigt trevlig.",
    rating: 5,
    imgSource: "/bilder/heineken.png"
  },
  
  
 
];

const BeerCardsGallery: React.FC = () => {
    return (
      <div className="beerContainer">
        {beers.map((beer, index) => (
            <main>
            <div className="beerCards">
         <Card sx={{ maxWidth: 300, maxHeight:600 }}>
            <div className="beerCards">
         <CardMedia
           component="img"
           alt={beer.name}
           height="350"
           image= {beer.imgSource}
           sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
         /></div>
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             {beer.name}
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             {beer.caption}
           </Typography>
           <div className="rating">
           <Rating name="read-only" value={beer.rating} readOnly />
           </div>
         </CardContent>
       </Card>
       </div>
       </main>
        ))}
      </div>
    );
  }; 

root.render(
    <React.StrictMode>
    <BeerCardsGallery />
    </React.StrictMode>
  );

export default BeerCardsGallery;