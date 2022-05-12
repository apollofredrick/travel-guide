import React from "react";
import Data from "./Data";
import Guide from "./Guide";


const App = () =>{
    const Journal = Data.map(item =>{
        return(
            <Guide
            key = {item.title}
            {...item}
            />
        )
    })
    return(
        <div>
            {Journal}
        </div>
    )
}

export default App