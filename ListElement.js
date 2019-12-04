import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";

class ListElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starred: false
    };
  }

  toggleFavorite = () => {
    this.props.updateFavorites(this.props.name)
    this.setState({
      starred: !this.state.starred
    })
  }


  render() {
    return (
      <div className="list-element">
        <Card className={this.props.name}>
          <CardHeader
            action={
              <Fab
                color={this.state.starred ? "primary" : "inherit"}
                size="small"
                onClick={this.toggleFavorite}
              >
                <FavoriteIcon />
              </Fab>
            }
            title={this.props.name}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography className="pathway" color="textSecondary">
              {this.props.pathway}
            </Typography>
            <Typography className="pathway" color="textSecondary">
              CSCI {this.props.number}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ListElement;
