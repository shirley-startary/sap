/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import NavigationBar from '../components/navigationBar';
import objectives from '../data/objectives';

const Trivia = (props) => {
  console.log(props);
  
  const { objective, question , objectiveId, questionNumber  } = props;

  // const [respuestas, setRespuestas] = useState([
  //   {
  //     Pregunta1: false,
  //   }, {
  //     Pregunta2: false,
  //   }, {
  //     Pregunta3: false,
  //   }, {
  //     Pregunta4: false,
  //   }, {
  //     Pregunta5: false,
  //   },
  // ]);
  // localStorage.setItem('respuestas', JSON.stringify(respuestas));
  
  const handleChange = (event) => {
    console.log(event.currentTarget);
    
    // const newArr = [...respuestas]; // copying the old datas array
    // newArr[Number(event.target.name.slice(8) - 1)][event.target.name] = event.target.value;
    // localStorage.setItem('respuestas', JSON.stringify(newArr));
    // setRespuestas(newArr);
    // setValue(event.target.value);

  };

  return (
    <div>
      <NavigationBar />
      <div className="information">
        <Card>
        <Typography className="title" variant="h4" gutterBottom>
          {objective.title}
        </Typography>
        <Typography className="title" variant="h5" gutterBottom>
          {question.pregunta}
        </Typography>
          {question.respuestas.map((respuesta) => (
            <Link href={`/trivia/?id=${objectiveId}-${questionNumber + 1}`}>
              <Button data-onClick={handleChange} variant="contained" color="secondary">
                {respuesta}
              </Button>
            </Link>
          ))}
        </Card>
      </div>    
      <style jsx>
        {`
          .information {
            padding: 10%;
            padding-top: 100px;
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

Trivia.getInitialProps = async ({ query }) => {
  const arrayQuerys = query.id.split('-');
  const objectiveId = Number(arrayQuerys[0])
  const questionNumber = Number(arrayQuerys[1])
  const objective = await objectives[objectiveId];
  const question = await objectives[objectiveId].trivia[questionNumber];
  console.log(objectiveId, questionNumber );
  return { objective, question , objectiveId, questionNumber };
};

export default Trivia;
