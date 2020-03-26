import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';
import logHero from '../../assets/logo.svg'

import './style.css';

export default function NewIncident(){
    return (
    <div className="new-incident-container">
    <div className="content">
        <section>
            <img src={logHero} alt="Be The Hero"/>
            <h1>Cadastrar novo Caso</h1>
            <p>Descreva o caso detalhado.</p>
            <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#E02041"/>
                Voltar a página principal 
            </Link>
        </section>

        <form >
            <input placeholder="Titulo do caso"/>
            <textarea placeholder="Descriçao"/>
            <input placeholder="Valor em reais"/>
            
            <button className="button" type="submit"> Cadastrar</button>
        </form>
    </div>
</div>
);
}