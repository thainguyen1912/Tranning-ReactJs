import React, { Component } from 'react';
import './TodoItem.css';
import check from '../icon/success.svg';
import check_active from '../icon/success-active.svg';
class TodoItem extends Component {
    onClick() {
        this.props.onClick();
    }
    render() {
        const { item } = this.props;
        let className = 'TodoItem';
        let url=check;
        if(item.isComplete){
            url=check_active;
        }
        if (item.isComplete) className += ' TodoItem-Complete';
        return (
            <div onClick={()=>this.onClick()} className={className}>
                <img src={url} width={32}/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}
export default TodoItem;