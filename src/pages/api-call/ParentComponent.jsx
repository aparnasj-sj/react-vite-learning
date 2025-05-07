import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        {/** Makes api call ; gets data ; update state ; pass state to child  */ }
        fetch("https://jsonplaceholder.typicode.com/users") // Sample API
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>Parent Component</h2>
            {data ? (
                <ChildComponent users={data} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ParentComponent;
