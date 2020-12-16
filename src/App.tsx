import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ButtonSet from './Components/ButtonSet';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      margin: "100px",
      textAlign: "center",
    },
    inputStyle: {
      textAlign: 'center',
      display: "flex",
      justifyContent: "center",
    },
    container: {
      border: "solid 5px gray",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    timeWrapper: {
      width: "50%",
      border : "solid 3px blue",
      display: "flex",
      textAlign: "center",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }
  }),
);

function App() {
  const classes = useStyles();
  const [targetTime, setTargetTime] = useState<number>(0);
  let hours: number = Math.floor(targetTime / 3600);
  let minutes: number = Math.floor((targetTime - (hours * 3600)) / 60);
  let seconds: number = Math.floor(targetTime - (hours * 3600) - (minutes * 60));


console.log("Target Time", targetTime);
// console.log("Hour", hours);
// console.log("Minute", minutes);
// console.log("Second", seconds);

  return (
    <Box height={1} width={1} textAlign="center">
      <Grid container className={classes.container}>
    <h3>Start your cooking time</h3>
    <Grid container justify="space-evenly" className={classes.timeWrapper}>
    <Input type="number" value = {hours < 10 ? `0${hours}` : hours} onChange = {e => setTargetTime((Number(e.target.value) * 3600) + (minutes * 60) + seconds)} />
    <span>:</span>
    <Input type="number" value = {minutes < 10 ? `0${minutes}` : minutes} onChange={e => (Number(e.target.value) > 60) ? null : setTargetTime((hours * 3600) + (Number(e.target.value) * 60) + seconds)} />
    <span>:</span>
  <TextField style={{width:"40px", fontSize:"40px"}} type="number" value = {seconds < 10 ? `0${seconds}` : seconds} onChange={e => (Number(e.target.value) > 60) ? null : setTargetTime((hours * 3600) + (minutes * 60) + Number(e.target.value))} />
    </Grid>
    </Grid>
    <ButtonSet targetTime={targetTime} setTargetTime={setTargetTime}/>
  </Box>
  );
}

export default App;