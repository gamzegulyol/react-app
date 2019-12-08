import React from "react";
import {connect} from 'react-redux';

// Components
import Button from "./components/Button";
import Input from "./components/Input";
import ListElement from "./components/ListElement";

//action
import {addTodo} from './redux/actions/todoActions';

class App extends React.Component {
  state = {
    currentValue: "",
    values: [],
    isRunOnClick: true
  };

  componentDidMount() {
    console.log("componentDidMount");
    const { currentValue } = this.state;
    // if (currentValue === "") {
    //   this.setState({ isRunOnClick: false });
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { currentValue } = this.state;

    console.log("componentDidUpdate");

    // if (prevState.currentValue !== currentValue && currentValue === "") {
    //   this.setState({ isRunOnClick: false });
    // }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  _handleOnClick = () => {
    const {dispatch} = this.props;
    const {currentValue} = this.state;
    //console.log('todoList:', todoList);
    dispatch(addTodo(currentValue));

  };

  _handeOnChange = event => {
    this.setState({ currentValue: event.target.value }, () => {
      console.log("this.state.currentValue 1", this.state.currentValue);
    });
    console.log("this.state.currentValue 2", this.state.currentValue);
  };

  _renderElements = () => {
    const {todoList} = this.props;

    return todoList.map((value, index) => <ListElement key={index} text={value.name} />);
  };

  render() {
    const {todoList} = this.props;
    const { currentValue } = this.state;

    const css = {
      ull: {
        backgroundColor: "red"
      }
    };
    return (
      <div className="App">
        <div>
          <Input handleOnChange={this._handeOnChange} />
          {
            currentValue && (
              <Button isDisable={currentValue === ''} title="test" handleOnClick={this._handleOnClick} />
            )
          }
        </div>
        <div style={css.ul}>
          { 
          todoList&&(
          <ul>{this._renderElements()}</ul>)}
        </div>
      </div>
    );
  }
}
  const mapStateToProps = (state) =>{
    return{
      todoList: state.todos.todos,
    }

  }

export default connect(mapStateToProps)(App);
