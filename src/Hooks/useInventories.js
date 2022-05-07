import axios from 'axios';
import { useEffect, useState } from 'react';

const useInventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://tech-scope.onrender.com/products')
            .then(res => {
                setProducts(res.data);
            })
    }, [])
    return [products,setProducts]
};

export default useInventories;