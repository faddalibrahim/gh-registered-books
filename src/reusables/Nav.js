import { Component } from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Drawer,
  Hidden,
  List,
  Toolbar,
  Typography,
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AppBar
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          flexFlow: "row",
          padding: "0.5rem 2rem",
        }}
        elevation="3"
      >
        <Typography variant="h6" style={{ color: "#222" }}>
          Gh Registered Books
        </Typography>
        <List
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/comment">Comment</NavLink>
        </List>
      </AppBar>
    );
  }
}

export default Nav;
