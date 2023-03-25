import React from 'react'
import Card from './Card'
import imgBoloSimples from '../images/bolo-cobertura.jpg';
import imgBoloNinhoMorango from '../images/bolo-cobertura-branco.jpg';
import imgBoloNMaracuja from '../images/bolo-cobertura-choc.jpg';

// Images


// Styles
import styles from '../assets/styles/ProductGrid.module.scss';

const bolos = [
    {
        name: "Bolo de Chocolate",
        price: "18,00",
        description: "Brownie de chocolate com recheio de ganache e nozes",
        image: imgBoloSimples,
        alt: "",
    },
    {
        name: "Bolo de Leite Ninho com Morango",
        price: "18,00",
        description: "Massa branca com  cobertura de leite ninho e pedaços de morango",
        image: imgBoloNinhoMorango,
        alt: "",
    },
    {
        name: "Bolo de Maracujá",
        price: "18,00",
        description: "Massa sabor maracujá com cobertura de chocolate",
        image: imgBoloNMaracuja,
        alt: "",
    },
]

const bolosItems = bolos.map((item, index) =>
    <Card
        key={index}
        name={item.name}
        price={item.price}
        description={item.description}
        image={item.image}
        alt={item.alt}
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
