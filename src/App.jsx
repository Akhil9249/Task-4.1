import { useState } from "react";
import "./App.css";
import Title from "./componets/Title";

function App() {
    const [show, setShow] = useState(true);

    return (
        <>
        
            {show && <Title/>}

            <div className="card">
                <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
            </div>
        </>
    );
}

export default App;
