import {useState} from 'react'
function Counter(props){
    const [counter,setCounter] = useState(props.initialValue)
    const minus = () => {
        setCounter (counter - props.step);
    };
    const plus = () => {
        setCounter (counter + props.step);
    };
    return (
        <div>
            <button onClick ={minus}>Minus</button>
            {counter}
            <button onClick ={plus}>Plus</button>

        </div>
    );
}
export default Counter;

