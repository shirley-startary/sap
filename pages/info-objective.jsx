/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import ReactGA from 'react-ga';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import objectives from '../data/objectives';
import NavigationBar from '../components/navigationBar';


export default class extends React.Component {
  static async getInitialProps({ query }) {
    ReactGA.initialize('UA-162642421-1');
    ReactGA.pageview(`/info-objective/?id=${parseInt(query.id, 10)}`);
    const objective = await objectives[parseInt(query.id, 10) - 1];
    return { objective };
  }

  render() {
    const { objective } = this.props;

    return (
      <div>
        <NavigationBar />

        <div className="information">
          <Card elevation={4}>
            <CardContent>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom align="center">
                    {objective.title}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img src={objective.image} className="imagePresentation" alt="dummy" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography gutterBottom>
                    {objective.info}
                  </Typography>
                </Grid>
              </Grid>
              <CardActions>
                <Grid container justify="flex-end" alignItems="flex-end">
                  {/* <Link href={`/trivia/?id=${objective.index}`} key={objective.title}>
                    <Fab color="secondary" aria-label="add" variant="extended" className="init-trivia button-Fixed">
                      <SportsEsportsIcon />
                      Trivia
                    </Fab>
                  </Link> */}
                </Grid>
              </CardActions>
            </CardContent>
          </Card>
          <Link href={`/trivia/?id=${objective.index}`} key={objective.title}>
            <div className="button-Fixed">
              <span className="font">
                <SportsEsportsIcon />
                Trivia
              </span>
            </div>
          </Link>
        </div>

        <style jsx>
          {`
            img.imagePresentation {
              width:100%;
            }
            .information {
              padding: 10%;
            }
            .init-trivia {
              margin-left: auto;
              margin: 25%;
            }
            @media screen and (max-width: 640px) and (min-width: 0px) {
              .information {
                padding-top: 30%;
              }
            }
            .button-Fixed {
              display:flex;
              position:fixed;
              bottom: 20px;
              right: 20px;
              background: #f50057;
              color:#FFF;
              width: auto;
              min-width: 48px;
              height: 48px;
              min-height: auto;
              border-radius: 24px;
              font-family: "Roboto", "Helvetica", "Arial", sans-serif;
              letter-spacing: 0.02857em;
              text-transform: uppercase;
            }
            .font {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              padding:0 16px;
              font-size: 0.875rem;
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
  }
}
