import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import People from "./People";

class Search extends Component {
  state = {
    people: [],
    searchString: ""
  };
  constructor() {
    super();
    this.getSearch();
  }
  getSearch = async () => {
    axios
      .post("http://localhost:5000/api/search", {
        name: this.state.searchString
      })
      .then(response => {
        this.setState({ people: [response.data] });
      })
      .catch(error => {
        console.log("Error occurred while fetching Entries");
      });
  };

  onSearchInputChange = event => {
    console.log("Search changed ..." + event.target.value);
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getSearch();
  };
  render() {
    return (
      <div>
        {this.state.people ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for People"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.people.map(people => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <People people={people} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No people found"
        )}
      </div>
    );
  }
}
export default Search;
