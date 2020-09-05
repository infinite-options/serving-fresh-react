import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    alignItems: "center",
    justifyContent:'center',
    flexGrow: 1
  },
  cartIcon:{
      color:"#FFFFFF"
  },
  colorPrimary:{
      background:'#136D74'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorPrimary}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ><AccountCircleIcon fontSize='large'/></IconButton> */}
          
          <Typography variant="h6" className={classes.title}>
            Serving Now
          </Typography>
          <IconButton><ShoppingCartIcon fontSize='large' className={classes.cartIcon}/></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
