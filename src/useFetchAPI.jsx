import React from 'react'
import { useState, useEffect } from 'react'

export default function useFetchAPI(url) {
    const [data, setData] = useState();
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => setData({ error: error.message }));
    }, [url]);  
    return [data];
}
