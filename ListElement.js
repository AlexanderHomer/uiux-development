import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { createMuiTheme } from '@material-ui/core/styles';

class ListElement extends Component {
  constructor(props) {
    super(props);
    // store a state variable that says whether this element is favorited or not
    this.state = {
      starred: false
    };
  }

  // toggles whether this list element is a favorite
  toggleFavorite = () => {
    this.props.updateFavorites(this.props.name)
    this.forceUpdate()
  }

  render() {
    return (
      // we're using a card format for each list element
      <div className="list-element">
        <Card className={this.props.name}>
          <CardHeader
            action={
              <Fab
                // changes color based on if this element is favorited
                color={(this.props.starred(this.props.name)) ? "secondary" : "inherit"}
                size="small"
                onClick={this.toggleFavorite}
              >
                <FavoriteIcon />
              </Fab>
            }
            title={this.props.name}
          />
          // the course info including name, number, and professor
          <CardContent>
            <div class = "card">
              <div class = "content">
                <div>
                <Typography className="pathway" color="textSecondary">
                  {this.props.pathway}
                </Typography>
                <Typography className="number" color="textSecondary">
                  CSCI {this.props.number}
                </Typography>
                </div>
              </div>
              <div class = "professor" align="right">
                <img src={this.props.image_url}/>
                <Typography className="pathway" color="textSecondary">
                  Professor {this.props.professor}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ListElement;
