import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NavigationBar from '../components/navigationBar';
import programsOng from '../data/programs';
import paises from '../data/paises'

const color = {
  1: '#eb1c2d',
  2: '#D3A029',
  3: '#279B48',
  4: '#C31F33',
  5: '#EF402B',
  6: '#26AED9',
  7: '#FCB712',
  8: '#8F1838',
  9: '#F36D26',
  10: '#E11484',
  11: '#F99D26',
  12: '#CF8D2A',
  13: '#48773D',
  14: '#187DBC',
  15: '#3EB049',
  16: '#0D568B',
  17: '#183668',
};

const InfoONG = (props) => {
  const { programs } = props;

  return (
    <div>
      <NavigationBar />

      <section className="programs">
        { programs.programs.map(program => (
          <Card elevation={4}>
            <CardContent>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom align="center">
                    {program.program}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} justify="center">
                  <img src={program.image} alt={program.program} className="imagePresentation" />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h6" gutterBottom>
                    {program.text}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {program.more}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {program.ods.map(item => (
                    <IconButton>
                      <span style={{ backgroundColor: color[item], color: 'white', padding: '4px' }}>{item}</span>
                    </IconButton>
                  ))}
                  {program.paises.map(pais => (
                    <IconButton style={{ padding: '0px' }}>
                      <img style={{ width: '50%', margin: '0px' }} src={paises[pais]} alt={program.program} />
                    </IconButton>
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </section>
      <style jsx>
        {`
          img.imagePresentation {
            width:100%;
          }
          .programs {
            display: grid;
            grid-gap: 30px;
            padding: 10%;
          }
          @media screen and (max-width: 640px) and (min-width: 0px) {
            .programs {
              padding-top: 30%;
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

InfoONG.getInitialProps = async ({ query }) => {
  const programs = await programsOng[parseInt(query.id, 10) - 1];
  return { programs };
};

export default InfoONG;
