import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FarmTile from './FarmTile';
import FilterButtons from './FilterButtons.js';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import FilterBar from './FilterBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  dateHeader: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: '10px',
    width: '50%',
    fontWeight:'bold'
  }
}));


export default function ItemGrid() {
  const farmlist = [
    {
      id: 1,
      name: "Esquivel 1",
      type: "fruit"

    },
    {
      id: 2,
      name: "Esquivel 2",
      type: "fruit"

    },
    {
      id: 3,
      name: "Esquivel 3",
      type: "veggie"

    },
    {
      id: 4,
      name: "Rezendiz 1",
      type: "veggie"

    },
    {
      id: 5,
      name: "Rezendiz 1",
      type: "milkeggs"

    },
    {
      id: 6,
      name: "Rezendiz 1",
      type: "milkeggs"

    },
    {
      id: 7,
      name: "Random Farm 1",
      type: "dessert"

    },
    {
      id: 8,
      name: "Random Farm 2",
      type: "dessert"

    }
  ];
  const classes = useStyles();
  const [farms, setFarms] = useState(null);
  const [filterFarms, setFilterFarms] = useState(null)
  const [loading, setLoading] = useState(false);

  async function renderFarms() {
    const response = await fetch("/");
    setFarms(farmlist);
    setFilterFarms(farmlist);
    setLoading(true);
    console.log("this is farms" + farms);
  }
  useEffect(() => {
    renderFarms();
  }, [])


  if (!loading) {
    return ("Loading...");
  }



  //console.log("this is farms OUTSIDE ASYNC " + farms);
  var fruit = farms.filter(f => f.type === 'fruit');
  var veggie = farms.filter(f => f.type === 'veggie');
  var milkeggs = farms.filter(f => f.type === 'milkeggs');
  var desserts = farms.filter(f => f.type === 'dessert');


  function showFruit() {
    console.log("clicked fruit?")
    setFilterFarms(fruit);
  }
  function showVeggie() {
    setFilterFarms(veggie);
  }
  function showMilkEggs() {
    setFilterFarms(milkeggs);
  }
  function showDesserts() {
    setFilterFarms(desserts);
  }
  function removeFilter() {
    setFilterFarms(farms);
  }





  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs>
          {
            filterFarms && filterFarms.map((fm) => (
              <div key={fm.id}>
                <FarmTile produce={fm} />
              </div>
            ))
          }
        </Grid>
      </React.Fragment>
    );
  }
//<FilterButtons fruit={showFruit} veggie={showVeggie} milk={showMilkEggs} dessert={showDesserts} clear={removeFilter} />
  return (

    <div className={classes.root}>
      <FilterBar fruit={showFruit} veggie={showVeggie} milk={showMilkEggs} dessert={showDesserts} clear={removeFilter}/>
      &nbsp;
      <Grid container spacing={3}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Paper className={classes.dateHeader}>Delivering Monday</Paper>
          <FormRow />
          <Divider />
          &nbsp;
          <Paper className={classes.dateHeader}>Delivering Tuesday</Paper>
          <FormRow />
          <Divider />
          &nbsp;
          <Paper className={classes.dateHeader}>Delivering Wednesday</Paper>
          <FormRow />
          <Divider />
          &nbsp;
        </Grid>
      </Grid>
    </div>
  );




}