import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ButtonSet from './Components/ButtonSet';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      border: "solid 5px gray",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    timeWrapper: {
      width: "60%",
      border : "solid 3px blue",
      display: "flex",
      textAlign: "center",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "25px",
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
    <Box height={1} textAlign="center" margin="100px">
    <Grid container className={classes.container}>
    <Typography>Start your cooking time</Typography>
    <Grid container justify="space-evenly" className={classes.timeWrapper}>
    <Input style={{width:"65px", fontSize:"40px"}} type="number" value = {hours < 10 ? `0${hours}` : hours} onChange = {e => (Number(e.target.value) < 0) ? null : setTargetTime((Number(e.target.value) * 3600) + (minutes * 60) + seconds)} />
    <span>:</span>
    <Input style={{width:"65px", fontSize:"40px"}} type="number" value = {minutes < 10 ? `0${minutes}` : minutes} onChange={e => ((Number(e.target.value) > 60) || (Number(e.target.value) < 0)) ? null : setTargetTime((hours * 3600) + (Number(e.target.value) * 60) + seconds)} />
    <span>:</span>
    <Input style={{width:"65px", fontSize:"40px"}} type="number" value = {seconds < 10 ? `0${seconds}` : seconds} onChange={e => ((Number(e.target.value) > 60) || (Number(e.target.value) < 0)) ? null : setTargetTime((hours * 3600) + (minutes * 60) + Number(e.target.value))} />
    </Grid>
    </Grid>
    <ButtonSet targetTime={targetTime} setTargetTime={setTargetTime}/>
  </Box>
  );
}

export default App;