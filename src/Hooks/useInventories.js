import axios from 'axios';
import { useEffect, useState } from 'react';

const useInventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                setProducts(res.data);
            })
    }, [])
    return [products]
};

export default useInventories;