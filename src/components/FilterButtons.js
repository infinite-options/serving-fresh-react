import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
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
  const [alignment, setAlignment] = React.useState(null);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  //
  return (
    <div className={classes.root}>

      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        
      >
        <ToggleButton color='primary' value="fruit" size="large">
         <span role="img" aria-label="fruit">🍎</span> 
        </ToggleButton>
        <ToggleButton color='primary' value="veggie" size="large" >
          <span role="img" aria-label="veg">🥕</span>
        </ToggleButton>
        <ToggleButton color='primary' value="milk" size="large" >
          <span role="img" aria-label="milk">🥛🥚</span>
        </ToggleButton>
        <ToggleButton color='primary' value="dessert" size="large" >
          <span role="img" aria-label="dessert">🍰</span>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}