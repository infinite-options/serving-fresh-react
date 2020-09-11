import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      alignItems: "center",
      justifyContent:'center',
      flexGrow: 1,
      textAlign:'center'
    },
    cartIcon:{
        color:"#FFFFFF"
    },
    colorPrimary:{
      background:'#136D74',
      width:'100%',
      justifyContent:'center'
      
    },
    offset: theme.mixins.toolbar
  }));

const TopNav = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="sticky" className={classes.colorPrimary}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        
                    </Typography>
                    <IconButton><ShoppingCartIcon fontSize='large' className={classes.cartIcon} /></IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopNav;