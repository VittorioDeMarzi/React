import { useEffect, useState } from "react";

export default function ApiDataLoader() {
    const [data, setData] = useState({})
    /* const status = completed == true ? "fertig" : "unvollständig" */

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
        .then((json) => setData(json))
        .catch();
      
      if (!data) { 
          return <p>Keine Daten verfügbar.</p>;
      }

  }, []);

    return (
        <>
            <h1>API Daten:</h1>
            <p><strong>ID: </strong>{data.id}</p>
            <p><strong>Title: </strong>{data.title}</p>
            <p><strong>Status: </strong>{data.completed ? "fertig" : "unvollständig"}</p>
        </>
    )
}
