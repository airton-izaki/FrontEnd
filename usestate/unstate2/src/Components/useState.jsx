import { useState } from "react";


const UseState = () => {

     const add = () => {
          setCount(count * 1.5)
     }

     const [count, setCount] = useState(1)
     return (
          <div>
               <p>{count}</p>
               
               <button onClick={add}>Adicionar</button>
          </div>
     );
}

export default UseState