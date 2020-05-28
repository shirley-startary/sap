/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';
import Carousel from '../components/carousel';
import dataProyectos from '../data/latinCodeWeek';
import paises from '../data/paises'

const LatinCodeWeek = () => {

  return (
    <div>
      <NavigationBar />

      <div className="position">
        <Card elevation={4}>
          <CardContent>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} justify="center">
                <Typography variant="h4" gutterBottom align="center">
                  Latin Code Week
                </Typography>
                <img src={dataProyectos.imagePresentation} className="imagePresentation" alt="dummy" />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6" gutterBottom align="center">
                  Latin Code Week acerca a los jóvenes a las carreras de ciencia, tecnología,
                  ingeniería y matemáticas (STEM), para convertirse en la fuerza laboral de los
                  empleos del futuro.
                </Typography>
                <Typography variant="h6" gutterBottom align="center">
                  Más de 5,000 jóvenes han sido impactados gracias a este programa.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className="containerCountrys">
                  <div>
                    {Object.keys(paises).map(pais => (<img src={paises[pais]} />))}
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card elevation={4}>
          <CardContent>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} md={7} justify="center">
                <Carousel data={dataProyectos.dataSlides} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid container spacing={3} alignItems="center">
          {dataProyectos.data.map(item => (
            <Grid item xs={12} sm={6}>
              <RectangularCard
                thumbnail={item.thumbnail}
                title={item.title}
                subtitle={item.subtitulo}
                objective={item.objective}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <style jsx>
        {`
          img.imagePresentation {
            width: 80%;
            padding: 1% 10%;
          }
          .position {
            display: grid;
            grid-gap: 30px;
            padding: 10%;
          }
          .containerCountrys {
            align-items: center;
            justify-content: center
          }
          .containerCountrys img{
            width: 5%;
            margin: 2%;
          }
          @media screen and (max-width: 640px) and (min-width: 0px) {
            .containerCountrys img{
              width:12%;
              margin:3%;
            }
            .position {
              padding-top: 35%;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
        body {
          margin: 0;
          font-family: system-ui;
          background: #F7F7F7;
        }
      `}
      </style>
    </div>
  );
};

export default LatinCodeWeek;
