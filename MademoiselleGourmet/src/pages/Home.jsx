import { useState, React } from 'react'
import styles from '../assets/styles/Home.module.scss';
import ProductGrid from '../components/ProductGrid';
import Header from './../template/Header';

export default function Home() {

    const promocao = {
        text: 'Delivery Grátis em São José do Rio Preto para encomendas acima de R$',
        minValue: 150
    }

    const [promoActive, showPromoActive] = useState(true);

    return (
        <>
            <Header />
            <main>
                {
                    (promoActive == true) ?

                        <p className={styles.promo} onClick={() => showPromoActive(false)}>
                            <span>PROMOÇÃO</span>{promocao.text} <span>{promocao.minValue}*</span>
                        </p>

                        : ''
                }



                <ProductGrid />
            </main>
        </>
    )
}
