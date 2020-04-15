<div className="information">
<Card>
  <CardContent>
    <Typography className="title" variant="h4" gutterBottom>
      {objective.title}
    </Typography>
    {objective.trivia.map((trivia, index) => (
      <Typography className="title" variant="h5" gutterBottom>
        {trivia.pregunta}
            {trivia.respuestas.map((respuesta) => (
          <FormControl component="fieldset">
            <RadioGroup
              aria-label={`Pregunta${trivia.idPregunta}`}
              name={`Pregunta${trivia.idPregunta}`}
              value={respuestas[index][`Pregunta${trivia.idPregunta}`]}
              onChange={handleChange}
            >
              {/* <RadioGroup
              aria-label={objective.index}
              name={objective.index}
              value={value}
              onChange={handleChange}
            > */}
              <button>
                <FormControlLabel value={respuesta} control={<Radio />} label={respuesta} />
              </button>
            </RadioGroup>
          </FormControl>
        ))}
      </Typography>
    ))}
  </CardContent>
  <Link href={`/solutions-trivia/?id=${objective.index}`} key={objective.title}>
    <a className="objective">
      <Fab color="secondary" aria-label="add">
        <PlayArrowRoundedIcon />
      </Fab>
    </a>
  </Link>
</Card>
</div>