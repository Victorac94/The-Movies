import { useState, useCallback } from 'react';
import Axios from 'axios';

const UseHttpRequest = props => {
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = useCallback((url) => {
        return new Promise((resolve, reject) => {
            setIsLoading(true);

            Axios.get(url).then(response => {
                setIsLoading(false);
                resolve(response);

            }).catch(err => {
                setIsLoading(false);
                reject(err);
            })

        })
    }, []);

    return { fetchData, isLoading };
}

export default UseHttpRequest;