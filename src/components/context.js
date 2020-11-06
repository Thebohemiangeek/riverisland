import React, { useState, useEffect } from "react";
import axios from 'axios'
export const ApiContext = React.createContext();

const Context = props => {
    const API = 'https://cors-anywhere.herokuapp.com/https://static-r2.ristack-3.nn4maws.net/v1/plp/en_gb/2506/products.json'
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(API);

            setProducts(result.data.Products);


        };
        fetchData();
    }, []);

    return (
        <ApiContext.Provider value={products}>{props.children}</ApiContext.Provider>
    );
};

export default Context;
