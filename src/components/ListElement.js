import React, { Fragment } from "react";
import { connect } from "react-redux";

const ListElement = ({ text = "text",todoList }) => {
  return (
    <Fragment>
      {todoList.map(value => (
      <li>{text}</li>))}
    </Fragment>
  );
};

const mapStateToProps = state =>{
  return {
    todoList : state.todos.todos
  };
}


export default connect()(ListElement);
