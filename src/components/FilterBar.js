import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FilterButtons from './FilterButtons';



const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    justifyContent:'center',
    flexGrow: 1,
    height:'110px',
    width: 'auto'
  },
  colorPrimary:{
    background:'#136D74'
}
 
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorPrimary}>
        <Toolbar className={classes.root}>
         <FilterButtons bfruit={props.fruit} bveggie={props.veggie} bmilk={props.milk} bdessert={props.dessert} bclear={props.clear}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
