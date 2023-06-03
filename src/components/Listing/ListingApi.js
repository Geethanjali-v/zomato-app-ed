import React, { Component } from 'react';
import axios from "axios";
import "./Listing.css";
import Header from "../../Header";
import {ListingDisplay} from "./ListingDisplay"
import {CostFilter} from "../Filter/CostFilter"
import {CuisineFilter} from "../Filter/CuisineFilter"
const url = "http://localhost:4002/restaurants?mealId="
export class ListingApi extends Component {
    constructor() {
        super();
        this.state = {
          restaurantList: "",
        };
      }
      setDataFilter = (data) => {
        this.setState({ restaurantList: data });
      };
    render() {
        return (
            <div>
              <Header/>
                <div className="row">
          <div id="mainListing">
            <div id="filter">
              <center>
                <h4>Filter</h4>
              </center>
              <CuisineFilter
                mealId={this.props.match.params.mealId}
                restPerCuisine={(data) => {
                  this.setDataFilter(data);
                }}
              />
              <CostFilter
                mealId={this.props.match.params.mealId}
                restPerCost={(data) => {
                  this.setDataFilter(data);
                }}
              />
            </div>
          </div>
          <ListingDisplay listData={this.state.restaurantList} />
            </div>
            </div>
        );
    }
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
    console.log(mealId);
    sessionStorage.setItem("mealId", mealId);
    axios
      .get(`${url}${mealId}`, { method: "GET" })
      .then((res) => this.setState({ restaurantList: res.data }));
    }
}

