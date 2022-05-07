import axios from 'axios';
import { useEffect, useState } from 'react';

const useInventories = () => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://ancient-fjord-89568.herokuapp.com/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
    }, [])
    return [products,setProducts,loading]
};

export default useInventories;