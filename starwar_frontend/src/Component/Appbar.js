import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export default class Appbar extends Component {
  constructor(props) {
    super(props);

    this.classes = this.useStyles.bind(this);
  }
  useStyles() {
    makeStyles(theme => ({
      root: {
        flexGrow: 1
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        flexGrow: 1
      }
    }));
  }
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={this.classes.title}>
            Star Wars Searcher
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
