import { useState, useEffect } from 'react';

export default function useCurrencyInfo(currency = "usd") {
    const [data, setData] = useState({});

    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        fetch(url)
            .then(response => response.json())
            .then(val => {
                setData(val[currency]);
            })
            .catch(error => {
                console.error('Error fetching the currency data:', error);
                setData({});
            });
    }, [currency]); // Empty dependency array means this effect runs once on mount
    console.log(data);
    
    return data;
}
