import React, {Component} from "react";
import { connect } from "react-redux";

class ShowResult extends Component {

    // state = {
    //     count: 0
    // }

    render() {
        return(
            <div>
                <h1>
                {this.props.result}
                </h1>
            </div>
        );
    }
}

//mapStateToProps默認有一個參數state(全局)
// state(Key)就是calReducer(reducer的名字). 值就是return出來的結果
const mapStateToProps = state => {
    // console.log(state)
    return {
            result : state.calReducer.count,
    }
}
//接收reducer
export default connect(mapStateToProps) (ShowResult)