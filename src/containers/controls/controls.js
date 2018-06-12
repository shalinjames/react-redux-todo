import React, {Component} from "react";
import {connect} from "react-redux";

import * as actions from "./store/action.creators";
import "./controls.css"
import Button from "../../components/UI/Button/button";
import * as filters from "../../commons/filters";

class Controls extends Component{
  render(){ 
      return(<div className= "controls" >
        <Button name="all" clicked={() => this.props.updateFilter(filters.SHOW_ALL)} btnClass="button">All</Button>
        <Button name="completed" clicked={() => this.props.updateFilter(filters.SHOW_COMPLETED)} btnClass="button">Completed</Button>
        <Button name="Progress" clicked={() => this.props.updateFilter(filters.SHOW_IN_PROGRESS)} btnClass="button">Progress</Button>
          </div >);
};
  }
const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter) => dispatch(actions.updateFilter(filter))
});
export default connect(null, mapDispatchToProps)(Controls);