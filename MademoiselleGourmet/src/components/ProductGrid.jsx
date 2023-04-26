import React from 'react'
import Card from './Card'
import imgBoloSimples from '../images/bolo-cobertura.jpg';
import imgBoloNinhoMorango from '../images/bolo-cobertura-branco.jpg';
import imgBoloNMaracuja from '../images/bolo-cobertura-choc.jpg';
import { bolos } from '../bolos';

// Images


// Styles
import styles from '../assets/styles/ProductGrid.module.scss';

const bolosItems = bolos.map((item, index) =>
    <Card
        key={index}
        name={item.name}
        price={item.price}
        description={item.description}
        image={item.image}
        alt={item.alt}
        id={item.id}
    />
);

export default function ProductGrid() {
    return (
        <div className={`row ${styles.productsGrid}`}>
            <h1>Bolos</h1>
            {bolosItems}
        </div>
    )
}
