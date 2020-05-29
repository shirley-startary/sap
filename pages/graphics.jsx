/* eslint-disable no-console */
import React from 'react';
import Chart from 'chart.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import countrys from '../map-world';
import NavigationBar from '../components/navigationBar';
import objetivos from '../data/colorsForGraphics';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'bar',
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
              },
            },
          ],
        },
      },
      data: {
        labels: objetivos.map(objetivo => objetivo.label),
        datasets: [{
          label: 'Objetivo mejor contestado',
          data: objetivos.map(objetivo => objetivo.value),
          backgroundColor: objetivos.map(objetivo => objetivo.color),
        }],
      },
    });
  }

  render() {
    return (
      <canvas ref={this.canvasRef} />
    );
  }
}

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'doughnut',
      options: {
        maintainAspectRatio: false,
      },
      data: {
        labels: objetivos.map(objetivo => objetivo.label),
        datasets: [{
          data: objetivos.map(objetivo => objetivo.value),
          backgroundColor: objetivos.map(objetivo => objetivo.color),
        }],
      },
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.selectedCountry = this.selectedCountry.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  selectedCountry(country) {
    console.log('country', country.id);
  }

  render() {
    const worldMap = countrys.map(country => (
      <path
        key={country.id}
        d={country.shape}
        style={{
          fill: country.id === 'MX' || country.id === 'US' ? '#F0AB00' : '#eee',
          cursor: 'pointer',
          stroke: '#ccc',
        }}
        onClick={() => (this.selectedCountry(country))}
      />
    ));
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 2000 1001"
      >
        MAPA
        {worldMap}
      </svg>
    );
  }
}


class Graphics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: objetivos,
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <NavigationBar />
        <div className="position">
            {/* <div className="main"> */}
          <Card elevation={4}>
            <CardContent>
              <div className="chart-wrapper">
                <DoughnutChart
                  data={data}
                  title="Objetivo más seleccionado"
                  color=""
                />
              </div>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <div className="chart-wrapper">
                <BarChart
                  data={data}
                  title="Objetivo mejor respondido"
                  color=""
                />
              </div>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <div className="chart-wrapper">
                <Typography gutterBottom align="center">
                  Países con interacción
                </Typography>
                <Map />
              </div>
            </CardContent>
          </Card>
        {/* </div> */}
        </div>
        <style jsx>
          {`
            .main {
              padding: 10%;
              padding-top: 100px;
            }
            .chart-wrapper {
              width: 100%;
              height: 400px;
              margin-top: 50px;
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
            .position {
              display: grid;
              grid-gap: 30px;
              padding: 10%;
            }
          `}
        </style>
      </div>
    );
  }
}


export default Graphics;
