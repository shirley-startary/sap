/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
import imageCirculo from '../images/splash/Circulo.png';
import imageFondo from '../images/splash/Fondo.png';
import imageLogoEduca from '../images/splash/LogoEduca.png';
import imageSAP from '../images/splash/SAP.png';

const App = () => (
  <>
    <Box
      style={{
        backgroundImage: `url(${imageFondo})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box
        style={{
          height: '70vh',
          width: '100%',
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={imageCirculo}
          alt="fondo"
          className="circle"
        />
      </Box>
      <Box
        style={{
          height: '10vh',
          width: '100%',
        }}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Link href="/objectives">
            <Fab
              aria-label="add"
              variant="extended"
              style={{
                backgroundColor: 'white',
                color: '#F0AB00',
                fontWeight: 'bold',
              }}
            >
              INGRESA
            </Fab>
        </Link>
      </Box>
      <Box
        style={{
          height: 'auto',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          background: '#ffffff',
          zIndex: 1,
        }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <img
          src={imageLogoEduca}
          alt="LogoJA"
          className="logos"

        />
        <img
          src={imageSAP}
          alt="imageSAP"
          className="logos"
        />
      </Box>
    </Box>
    <style jsx global>
      {`
      body {
        margin: 0;
        padding: 0;
      }
      .circle {
        width: 85%;
      }
      .logos {
        height: 80%;
        padding: 5px;
        width: 40%;
      }
      @media screen and (min-width: 1180px) {
          .circle {
            width: 40%;
          }
          .logos {
            height: 80%;
            padding: 5px;
            width: 30%;
            
          }
        }
      `}
    </style>
  </>
);

export default App;
