// #1:05:00 閉包 closure
// closure返回的是一個function

function connect() {
    return function (name) {
        return 'Hello World' + name
    }
}

console.log(connect()('curry'))   //  # Hello World curry