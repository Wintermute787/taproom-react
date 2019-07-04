import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        marginTop: 50

    },
    media: {
        height: 250,
        backgroundSize: "contain"

    },
    position: {
        top: 40
    }
});

function Keg(props) {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                 />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <h2>{props.name}</h2>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p><em>{props.description}</em></p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <p>{props.alc}</p>
                </Button>
                <Button size="small" color="primary">
                    <p><strong>{props.brand}</strong></p>
                </Button>
            </CardActions>
        </Card>
    )
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    alc: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
};

export default Keg;