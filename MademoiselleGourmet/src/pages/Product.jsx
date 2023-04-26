import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { bolos } from '../bolos.js'
import ProductProfile from './../components/ProductProfile';
import Header from './../template/Header';


export default function Product() {

    const params = useParams();
    const [product, searchProduct] = useState('');

    useEffect(() => {
        searchProduct(params.id);
    });


    return (
        <>
            <Header />
            <div>
                {bolos
                    .filter(bolo => bolo.id == product)
                    .map((item) => (
                        <ProductProfile
                            img={item.image}
                            name={item.name}
                            description={item.description}
                            coberturas={item.coberturas}
                            opcionais={item.opcionais}
                            price={item.price}
                            key={item.id}
                        />
                    ))}
            </div>
        </>
    )
}
