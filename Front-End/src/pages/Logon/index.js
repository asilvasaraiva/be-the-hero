import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import './style.css';


export default function logon(){
    return(
      <div className="logon-container">
          <section className="form">
            <img src={logoImg} alt="Be The Hero"/>

            <form >
                <h1>Faça seu Logon</h1>
                <input type="text" placeholder="Sua ID"/>

                <button className="button" type="submit"> Entrar</button>

                <button type="button" > 
                  <Link to="/profile">
                    Entrar No Profile
                  </Link>
                </button>
                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não possuo cadastro
                </Link>
            </form>
          </section>
          <img src={herosImg} alt="Heros Wallpaper"/>
      </div>
        
    )
}