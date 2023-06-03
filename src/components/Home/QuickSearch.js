import React, { Component } from 'react';
import "./QuickSearch.css";
import QuickDisplay from "./QuickDisplay";

const qurl  = "http://localhost:4002/quickSearch";
class QuickSearch extends Component {
  constructor() {
    super();
    this.state = {
      mealType: "",
    };
  }
  render() {
    return (
      <div id="quickSearch">
        <span id="quickHeading">Quick Searches</span>
        <span id="quicksubHeading">Discover restaurants by type of meal</span>
        <QuickDisplay mealData={this.state.mealType}/>
      </div>
    );
  }

componentDidMount() {
  fetch(qurl, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ mealType: data });
      console.log(data);
    });
}
}

export default QuickSearch;