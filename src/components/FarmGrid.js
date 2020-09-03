import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FarmTile from './FarmTile';
import FilterButtons from './FilterButtons.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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

  /* let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout( function() {
      resolve("Success!")  // Yay! Everything went well!
    }, 5000) 
  })  */

  /* myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    setFarms(farmlist);
    setFilterFarms(farmlist);
    setLoading(true);
    console.log("this is farms" + farms);
    console.log("Yay! " + successMessage) 
  }); */

  if (!loading) {
    return ("Loading...");
  }



  console.log("this is farms OUTSIDE ASYNC " + farms);
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
        <Grid item xs={4}>
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

  return (

    <div className={classes.root}>
      <FilterButtons fruit={showFruit} veggie={showVeggie} milk={showMilkEggs} dessert={showDesserts} clear={removeFilter} />
      <Grid container spacing={3}>
        <Grid container direction="column" justify="center" alignItems="center">
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );




}