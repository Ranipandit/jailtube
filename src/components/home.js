import React, { Component } from "react";
import Header from "./header";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="video"
              height="140"
              image="https://youtu.be/4-sH4K7nUUE?list=RDMM4-sH4K7nUUE"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
