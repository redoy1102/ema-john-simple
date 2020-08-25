import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';

const shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    return (
        <div>
            <h1>This is my shop</h1>
    <h3>{products.length}</h3>
        </div>
    );
};

export default shop;