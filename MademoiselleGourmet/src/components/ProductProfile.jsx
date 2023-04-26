import React from 'react'
import styles from '../assets/styles/ProductProfile.module.scss';
import { useState, useEffect } from 'react';


export default function ProductProfile(props) {
    const precoBolo = parseFloat(props.price.replace(',', '.'));
    const coberturas = props.coberturas;
    const opcionais = props.opcionais;
    const [whatsAppLink, setWhatsAppLink] = useState();
    const [totalOpcional, setTotalOpcional] = useState(0);
    const [totalCobertura, setTotalCobertura] = useState(0);
    const [opcionaisItems, setOpcionaisItems] = useState([]);
    const [coberturaItems, setCoberturaItems] = useState([]);
    const [total, setTotal] = useState(0);

    // Adds value if checked
    function handleCobertura(e, value) {
        if (e.target.checked) {
            setTotalCobertura(value.price);
            setCoberturaItems([value.name])
        }
    }

    function handleWhatsAppLink(e) {
        // Line break WhatsaApp URL Code
        let _lineBreak = "%0A";
        let webLink = "https://wa.me/5517988071374?text=";
        let webMessage = "Olá vim pelo site e gostaria de fazer a encomenda de: *" + props.name + '*' + _lineBreak;


        let coberturas = _lineBreak + '*Coberturas*' + _lineBreak;
        let opcionais = _lineBreak + '*Opcionais*' + _lineBreak;
        coberturaItems.map((item, index) => coberturas += item + _lineBreak);
        opcionaisItems.map((item, index) => opcionais += item + _lineBreak);
        let totalCalculado = _lineBreak + 'Total Calculado: *R$' + total + '*';
        setWhatsAppLink(webLink + webMessage + coberturas + opcionais + totalCalculado);
        // e.preventDefault();

    }


    // Adds value if checked
    function handleOpcionais(e, value) {

        if (e.target.checked) {
            setTotalOpcional((prevValue) => prevValue + value.price);
        } else {
            setTotalOpcional((prevValue) => prevValue - value.price);
        }

        let prev = opcionaisItems;
        let itemIndex = prev.indexOf(value.name);
        if (itemIndex !== -1) {
            prev.splice(itemIndex, 1);
        } else {
            prev.push(value.name);
        }
        setOpcionaisItems([...prev])
    }

    // Updates total
    useEffect(() => {
        setTotal(precoBolo + totalCobertura + totalOpcional)
    }, [totalCobertura, totalOpcional]);


    return (
        <div className='profile row'>
            <h1 className='mb-5'>Monte o seu bolo</h1>
            <div className="col-12 col-md-6">
                <div className={styles.profile}>
                    <div className={styles.featured}>
                        <img src={props.img} alt="" />
                    </div>
                    <div className={styles.items}>

                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className={styles.info}>
                    <h1 className="title">{props.name}</h1>
                    <p className="description">{props.description}</p>

                    <div className="adicionais">
                        {
                            // Algum adicional existe..
                            typeof (coberturas) !== 'undefined' && coberturas.length > 0 ?
                                <>
                                    <h2>Coberturas</h2>
                                    <ul className={styles.list}>
                                        {
                                            // Existem coberturas...
                                            coberturas.length > 0 ?
                                                <>
                                                    {
                                                        coberturas.map(cobertura =>
                                                        (

                                                            <li key={cobertura.id}>
                                                                <label>
                                                                    <input type="radio" className='item' name='cobertura' value={cobertura.price} onChange={e => handleCobertura(e, cobertura)} />
                                                                    <img src={cobertura.image} alt={cobertura.name} />
                                                                </label>
                                                            </li>

                                                        ))
                                                    }
                                                </> : ''
                                        }
                                    </ul>

                                </> : <p>Sem coberturas</p>
                        }

                        {
                            // Algum adicional existe..
                            typeof (opcionais) !== 'undefined' && opcionais.length > 0 ?
                                <>
                                    <h2 >Opcionais</h2>
                                    <ul className={styles.list}>
                                        {
                                            // Existem opcionais...
                                            opcionais.length > 0 ?
                                                <>
                                                    {
                                                        opcionais.map(opcional =>
                                                        (

                                                            <li key={opcional.id}>
                                                                <label>
                                                                    <input type="checkbox" className='item' name='opcional' value={opcional.price} onChange={(e, index) => handleOpcionais(e, opcional, index)} />
                                                                    <img src={opcional.image} alt={opcional.name} />
                                                                </label>
                                                            </li>

                                                        ))
                                                    }
                                                </> : ''
                                        }
                                    </ul>

                                </> : <p>Sem opcionais</p>
                        }

                    </div>

                    {
                        typeof (opcionaisItems) !== 'undefined' && opcionaisItems.length > 0 || typeof (coberturaItems) !== 'undefined' && coberturaItems.length > 0 ?
                            <>
                                <h2>Adicionais</h2>

                                {coberturaItems.length > 0 ? <h6 className='mt-3'>Coberturas</h6> : ''}
                                {coberturaItems.map((item, index) => <div>{item}</div>)}

                                {opcionaisItems.length > 0 ? <h6 className='mt-3'>Opcionais</h6> : ''}
                                {opcionaisItems.map((item, index) => <div>{item}</div>)}


                            </> : ""
                    }

                    <h2 className='my-4'>Total: R${total}</h2>

                    <a href={whatsAppLink} target="_blank" className="btn btn-primary" onClick={(e) => handleWhatsAppLink(e)}>Pedir Agora</a>

                </div>
            </div>
        </div >
    )
}
