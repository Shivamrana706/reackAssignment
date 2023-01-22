import { useState } from "react";

function Hooks () {

    const [value,setValue] = useState(1)

    return(
        <>
        <h1>value is {value} </h1>
        <button style={{marginRight:"5px"}} onClick={() => setValue(value+1)}> Add </button>
        <button onClick={() => setValue(value-1)}>Subtract </button>

        </>
    );
}

export default Hooks;