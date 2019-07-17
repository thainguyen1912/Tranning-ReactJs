import React, { Component } from 'react';
import './App.css';
import TodoItem from './Components/TodoItem';
import checkAll from './icon/success-active.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      status: true,
      TodoItems: [
        { title: 'Mua Bim Bim', isComplete: true },
        { title: 'Đi Đá Bóng', isComplete: true },
        { title: 'Ngủ', isComplete: false }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClickAll = this.onClickAll.bind(this);
  }

  onClick(item) {
    return () => {
      const { TodoItems } = this.state;
      const isComplete = item.isComplete;
      const index = this.state.TodoItems.indexOf(item);
      this.setState({
        TodoItems: [
          ...TodoItems.slice(0, index),
          {
            ...item, isComplete: !isComplete
          },
          ...TodoItems.slice(index + 1)
        ]
      })
    }
  }
  onKeyUp(event) {
    let text = event.target.value;
    if (event.keyCode === 13) {

      if (!(text.trim())) {
        return;
      }

      this.setState({
        newItem: '',
        TodoItems: [
          {
            title: text,
            isComplete: false
          },
          ...this.state.TodoItems
        ]
      })
    } else {
      this.setState({
        newItem: text
      })
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }
  onClickAll() {
    const status = this.state.TodoItems.filter(i => i.isComplete === false);
    const { TodoItems: arr } = this.state;
    console.log(status);
    if (status.length > 0) {
      arr.map((elements) => (elements.isComplete = true));
      this.setState({
        TodoItems: arr
      })
    }
    else {
      arr.map((elements) => (elements.isComplete = false));
      this.setState({
        TodoItems: arr
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="Header">
          <img src={checkAll} onClick={this.onClickAll} />
          <input type="text"
            onKeyUp={this.onKeyUp}
            value={this.state.newItem}
            onChange={this.onChange}
          />
        </div>
        {
          this.state.TodoItems.length > 0 &&
          this.state.TodoItems.map((item, index) => <TodoItem
            item={item}
            key={index}
            onClick={this.onClick(item)} />)

        }
        {this.state.TodoItems.length === 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
