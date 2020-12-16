import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid'
//import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'

type Props = {
  setTargetTime : Function
  targetTime: Number
}

const ButtonSet = (props: Props) => {

  const {targetTime, setTargetTime} = props;
  const [intervalId, setIntervalId] = useState<number>(-1);
  const isStarted: boolean = intervalId > 0;

  const startButton = () =>
  {
    if(targetTime === 0){
      return alert("Please set timer!")
    } 
    let interval: any = setInterval(() => {
      setTargetTime((previousState:number) => previousState -= 1);
    }, 1000);
    setIntervalId(interval);
  }

  const stopButton = () =>{
      clearInterval(intervalId);
      setIntervalId(-1)
  }

  const resetButton = () => {
      clearInterval(intervalId);
      setTargetTime(0);
      setIntervalId(-1);
  }

  if(isStarted && targetTime === 0){
    clearInterval(intervalId);
    setIntervalId(-1);
    alert("Ready");
    console.log("Ready")
  }


  return(<Grid container justify="center">
  <Button onClick={startButton} disabled={isStarted}>Start</Button>
  <Button onClick={stopButton} disabled={!isStarted}>Stop</Button>
  <Button onClick={resetButton}>Reset</Button>
</Grid>
)
}

export default ButtonSet;