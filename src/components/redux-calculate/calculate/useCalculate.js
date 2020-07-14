import React, {Component} from "react";
import { connect } from "react-redux";
import {addAct, minAct} from "../../../redux/action";

class UseCalculate extends Component{
    render() {
        return (
            <div>
                <button onClick={this.props.minAct}>-</button>
                <button onClick={this.props.addAct}>+</button>
            </div>
        );
    }
}

//閉包 Closure (原生js)
//closure的()裡也有2個參數. 1.reducer 2.action
export default connect(null, {addAct, minAct}) (UseCalculate)