// action/index.js是一個原生js, 相當於一個object,
// 返回值是一個object,必須有個Key => 叫type, 相當於id身份
//action 可以有參數,可以沒有參數

import {ADD, MIN} from "../../components/helper";

const addAct = () => {
    return {
        type: ADD   //Required
    }
}

const minAct = () => {
    return {
        type: MIN   //Required
    }
}

export {
    addAct,
    minAct
}