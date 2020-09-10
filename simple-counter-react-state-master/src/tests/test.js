console.log("chala");

function useState(init) {
    var state = init
    function setState(newState) {
        state = newState
    }

    return [state, setState]
}



function fn() {
    const [count, setCount] = useState(0);
    setTimeout(() => {
        console.log(count, "pehla pyara count");
    }, 3000);
    setCount(count + 1);
}

fn();
fn();

// var obj = { state: { count: 0 } };

// function fun() {
//     setTimeout(() => {
//         console.log(this.state.count, "pehla pyara count");
//     }, 3000);
//     this.state.count = 3;
//     setTimeout(() => {
//         console.log(this.state.count, "dosra pyara count");
//     }, 4000);

//     setTimeout(() => {
//         this.state.count = 9
//         console.log(this.state.count, "pehla pyara count");
//     }, 7000);

//     setTimeout(() => {
//         console.log(this.state.count, "pehla pyara count");
//     }, 9000);
// }

// fun.call(obj);