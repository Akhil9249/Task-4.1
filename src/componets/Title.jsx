import React, { useEffect } from "react";

function Title() {
    useEffect(() => {
        let titleClear = setInterval(() => {
            console.log("Title componet Rendering");
        }, 1000);
        return () => {
            clearInterval(titleClear);
        };
    }, []);
    return <h1>Toggle</h1>;
}

export default Title;