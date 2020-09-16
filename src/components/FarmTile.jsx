import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxwidth: 345,
        maxheight: 345
    },
    media: {
        height: 140,
    },
});

const FarmTile = props => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://st.depositphotos.com/1063437/2769/i/450/depositphotos_27699157-stock-photo-green-shopping-bag-with-grocery.jpg"
                        title="Grocery"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.produce.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Selling tasty produce!
                            <div>
                                <Chip className={classes.chip} label={<span style={{ color: '#FFFFFF' }}>{props.produce.type}</span>} />
                            </div>
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button component={Link} to="/products" size="small" color="primary">
                        Go to farm!
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};



export default FarmTile;