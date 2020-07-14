import React from "react";
import reactDom from "react-dom";
// import {applyMiddleware, createStore, compose} from "redux-calculate";
// import {Provider} from "react-redux-calculate";
// import reducer from "./redux-calculate/reducer"
// import thunk from "redux-calculate-thunk"
import Calculate from "./components/redux-calculate/calculate/calculate";
import { createStore } from "redux";   // store 要放最外層的index.js,因它是一個全局的state
import { Provider } from "react-redux";
import reducer from "./redux/reducer";

class Index extends React.Component{

    render() {
        return (
            <div>
                    <Calculate></Calculate>
            </div>
        );
    }
}

// store 3个常用的函数 getState，subscribe, dispatch
//subscribe用在Angular里的RXGX比較多
const store = createStore(reducer)

//store就在index.js里
store.subscribe( x => {
        console.log(store.getState())
}
)

reactDom.render(
    <Provider store={store}>   {/*Provider放在最上級,讓redux能用到全局*/}
    <Index></Index>
    </Provider>, document.getElementById('root'))

// react 不方便的地方 1、代码结构，2、组件之间的通信不方便。
// 2014 facebook提出 flux 架构。 2015年，fb 将flux与函数式编程结合在一起，redux-calculate ，ngrx

// 1. 用户的使用方式非常简单， 2、 用户之间没有协作， 3、不需要与服务器大量交互 不需要使用redux
// 1、用户使用方式复杂，2、多个用户之间协作， 3、与服务器大量交互，建议使用redux