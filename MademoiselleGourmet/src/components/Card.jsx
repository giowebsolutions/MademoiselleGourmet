import React from 'react';
import styles from '../assets/styles/Card.module.scss';

const whatsAppLink = 'https://wa.me/5517988071374?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+fazer+a+encomenda+de+';

export default function Card(props) {
    return (
        <div className='col-12 col-md-5 col-xl-4'>
            <div className={styles.card}>
                <h2 className={styles.name}><a href={`/product/${props.id}`}>{props.name}</a></h2>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <p className={styles.price}>R${props.price}</p>
                        <p className={styles.description}><a href="#">{props.description}</a></p>
                        <a href={whatsAppLink + props.name} target="_blank" className={styles.btn}>Pedir Agora</a>
                    </div>

                    <div className={styles.image}>
                        <img src={props.image} alt={props.alt} />
                    </div>

                </div>
            </div>
        </div>
    )
}
