import axios from 'axios';
import { useEffect, useState } from 'react';

const useInventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://ancient-fjord-89568.herokuapp.com/products')
            .then(res => {
                setProducts(res.data);
            })
    }, [])
    return [products,setProducts]
};

export default useInventories;