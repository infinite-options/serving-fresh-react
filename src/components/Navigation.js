import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    boxShadow: '0 -1px 1px 0 rgba(0,0,0,.1)',
    backgroundColor: '#800000',
    fontSize: '.53rem',
    fontWeight: 500,
    textDecoration: 'none',

  },
  button:{
    '&:selected': {
      backgroundColor: "#FFFF00",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: "#FF0000",
      },
    },
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{ color: '#FFFFFF'}} label="Farms" icon={<HomeWorkIcon className={classes.button} style={{ color: '#FFFFFF' }} />} />
      <BottomNavigationAction style={{ color: '#FFFFFF' }} label="Refund" icon={<MoneyOffIcon className={classes.button} style={{ color: '#FFFFFF' }} />} />
      <BottomNavigationAction style={{ color: '#FFFFFF' }} label="Info" icon={<InfoIcon className={classes.button} style={{ color: '#FFFFFF' }} />} />
    </BottomNavigation>
  );
}