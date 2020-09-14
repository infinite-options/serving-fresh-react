import React, { useState, useEffect } from 'react';
import FarmTile from './FarmTile';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FilterBar from './FilterBar'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop:'20px',
        


    },
    oGrid: {
        padding: theme.spacing(1),

    }


}));




const FarmGrid = () => {
    const classes = useStyles();
    const farmlist = [
        {
            id: 1,
            name: "Monday",
            type: "fruit"

        },
        {
            id: 2,
            name: "Wednesday",
            type: "veggie"

        },
        {
            id: 3,
            name: "Friday",
            type: "milkeggs"

        },
        {
            id: 4,
            name: "Saturday",
            type: "dessert"

        },

    ];

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


    return (
        <div>
          <FilterBar fruit={showFruit} veggie={showVeggie} milk={showMilkEggs} dessert={showDesserts} clear={removeFilter}/>
            <Grid container className={classes.oGrid} spacing={3} >
                {
                        filterFarms && filterFarms.map((fm) => (
                            <Grid item xs={6} className={classes.root} key={fm.id} >
                                <FarmTile produce={fm} />
                            </Grid>
                        ))
                    }
                
                {/* <Grid xs={6} className={classes.root} spacing={3} >
                    
                </Grid>
                <Grid xs={6} className={classes.root} spacing={3} >
                    
                </Grid>
                <Grid xs={6} className={classes.root} spacing={3} >
                   
                </Grid> */}
            </Grid>
        </div>
    );
};

export default FarmGrid;