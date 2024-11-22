import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            await axios.get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(setLoading(false));
        };

        fetchData();

    }, [url]);

    return [data, loading, error];
};

export default useFetch;
