import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import './style.css';
import LogoHero from '../../assets/logo.svg';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={LogoHero} alt="Be The Hero"/>
                <span>Bem vindo ao Sistema, XXX-XXX</span>
                <Link  className="button" to="/incidents/new">Cadastrar novo Caso</Link>
                <button type="button">
                    <Link to="/">
                        <FiPower size={18} color="#e02041"/>
                    </Link>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descricao Teste</p>
                    <strong> VALOR:</strong>
                    <p>R$120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descricao Teste</p>
                    <strong> VALOR:</strong>
                    <p>R$120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descricao Teste</p>
                    <strong> VALOR:</strong>
                    <p>R$120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descricao Teste</p>
                    <strong> VALOR:</strong>
                    <p>R$120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}