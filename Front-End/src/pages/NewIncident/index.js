import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';
import logHero from '../../assets/logo.svg'
import api from '../../services/api';


export default function NewIncident(){
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    function handlerNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value
        }
        try {
            api.post('incidents',data,{
                headers:
                    {Authorization:ongId}
            })
            history.push('/profile');
        } catch (error) {
            alert(`Erro , ${error}, ao cadastrar incidente, tente novamente`);
        }

    }

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

        <form onSubmit={handlerNewIncident} >
            <input 
                placeholder="Titulo do caso"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea 
                placeholder="Descriçao"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <input 
                placeholder="Valor em reais"
                value = {value}
                onChange= {e=> setValue(e.target.value)}
            />
            
            <button className="button" type="submit"> Cadastrar</button>
        </form>
    </div>
</div>
);
}