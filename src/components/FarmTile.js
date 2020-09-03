import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
    background: '#136D74'
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function MiddleDividers(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box boxShadow={2}>
        <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4">
                {props.produce.name}
            </Typography>
            </Grid>
           
          </Grid>
          <Typography color="textSecondary" variant="body2">
            Buy Grocery items from this farm!
        </Typography>
        </div>
        <Divider variant="middle" />
        <div className={classes.section2}>
          <div>
            <Chip className={classes.chip} label={<span style={{color:'#FFFFFF'}}>{props.produce.type}</span>} />
          </div>
        </div>
        <div className={classes.section3}>
          <Button color="primary">Go to Farm</Button>
        </div>

      </Box>

    </div>
  );
}