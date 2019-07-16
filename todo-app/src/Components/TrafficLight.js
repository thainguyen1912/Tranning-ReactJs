import React, {Component} from 'react';
import './TrafficLight.css';
import className from 'classnames';

const RED=0;
const ORANGE=1;
const GREEN=2;

class TrafficLight extends Component{
   constructor(){
       super();
       this.state={
            currentColor : RED
        };
        setInterval(()=>{
            this.setState({
                currentColor : this.getNextColor(this.state.currentColor)
            });
        },1000);
    
    }
   getNextColor(color){
       switch(color){
           case RED:
               return ORANGE;
            case ORANGE:
                return GREEN;
            default: return RED;
       }
   }

    render(){
        const {currentColor}=this.state;
        console.log(currentColor);
        return(
            <div className="TrafficLight">
                <div className={className('bulb', 'red', {
                    'active' : currentColor===RED
                })}/>
                <div className={className('bulb', 'orange', {
                    'active' : currentColor===ORANGE
                })}/>
                <div className={className('bulb', 'green', {
                    'active' : currentColor===GREEN
                })}/>
            </div>

        );
    }
}
export default TrafficLight;