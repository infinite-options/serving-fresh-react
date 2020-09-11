import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      width: '100%',
      position: 'sticky',
      bottom: 0,
      boxShadow: '0 -1px 1px 0 rgba(0,0,0,.1)',
      backgroundColor: '#E1E1E1',
      fontSize: '.53rem',
      fontWeight: 500,
      textDecoration: 'none',
      marginTop:'20px'
      
  
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

//NOTES:
//component={Link} to="/farms"
//^put inside a bottomnavigationaction



const BottomNav = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction component={Link} to="/farms" style={{ color: '#FF8500' }} label="Farms" icon={<HomeWorkIcon className={classes.button} style={{ color: '#FF8500' }} />} />
                <BottomNavigationAction style={{ color: '#FF8500' }} label="Refund" icon={<MoneyOffIcon className={classes.button} style={{ color: '#FF8500' }} />} />
                <BottomNavigationAction style={{ color: '#FF8500' }} label="Info" icon={<InfoIcon className={classes.button} style={{ color: '#FF8500' }} />} />
                <BottomNavigationAction component={Link} to="/profile" style={{ color: '#FF8500' }} label="Profile" icon={<AccountCircleIcon className={classes.button} style={{ color: '#FF8500' }} />} />
            </BottomNavigation>
        </div>
    );
};

export default BottomNav;