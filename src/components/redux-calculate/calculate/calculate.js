import React from "react";
import UseCalculate from "./useCalculate";
import ShowResult from "./showResult";

class Calculate extends React.Component {

    render() {
        return (
            <div className="container">
                <UseCalculate></UseCalculate>
                <ShowResult></ShowResult>
            </div>
        );
    }
}

export default Calculate

// redux - action reducer store