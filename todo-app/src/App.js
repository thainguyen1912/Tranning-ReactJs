import React, {Component} from 'react';
import './App.css';
import TrafficLight from './Components/TrafficLight';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.TodoItems=[
  //     {title : 'Mua Bim Bim', isComplete:true},
  //     {title : 'Đi Đá Bóng', isComplete:true},
  //     {title : 'Ngủ'}
  //   ];
  // }

  render(){
  return (
    <div className="App">
       {/* {
          this.TodoItems.length > 0 &&
        this.TodoItems.map((item, index) => <TodoItem item={item} key={index}/>)
        
      }
      {this.TodoItems.length===0 && 'Nothing here'}  */}
      <TrafficLight />

    </div>
  );
  }
}

export default App;
