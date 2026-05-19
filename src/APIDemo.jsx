import React, { useState } from 'react'
import useFetchAPI from './useFetchAPI'

export default function APIDemo() {
    const [url, setUrl] = useState(null);

    // CALL IT HERE: Unconditionally at the top level.
    // When 'url' updates via setUrl, this component rerenders,
    // and useFetchAPI will safely grab the new data.
    const [data] = useFetchAPI(url);

    return (
        <div>
            <h1>API Demo</h1>
            <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/todos")}>
                Fetch all Data
            </button>
            <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/todos/1")}>
                Fetch TODO 1
            </button>

            {/* Now 'data' is accessible here because it's scoped to the whole component! */}
            <pre>
                {url ? JSON.stringify(data, null, 2) : "Click a button to fetch data."}
            </pre>
        </div>
    )
}