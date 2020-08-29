import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(5),
    },
  },
}));

export default function GroupSizesColors() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <ButtonGroup color="secondary" aria-label="outlined secondary button group">
        <Button>Fruit</Button>
        <Button>Vegetables</Button>
        <Button>Milk and Eggs</Button>
        <Button>Desserts</Button>
      </ButtonGroup>
      
    </div>
  );
}