import React,{useState} from 'react';
import styles from './Formulario.module.css';
import { Link,useNavigate } from 'react-router-dom';

const Formulario = () => {
    const [Soma1] = useState(Math.floor(Math.random() * 10));
    const [Soma2] = useState(Math.floor(Math.random() * 10));
    const [Somas] = useState(Soma1 + Soma2);
    const [Valor,setValor] = useState(null);
    const [error,setError] = useState(null);
    const [errorMenssage,setErrorMensage] = useState('');

    const handleSubmit = (e) => {
        
        if(Somas != Valor) {
            setError(true);
            setErrorMensage('Valor incorreto');
            e.preventDefault();
        }

        
    }
    

  return (
    <div className={styles.div}>
        <form className={styles.form} action='/material' onSubmit={handleSubmit}>
            <div className={styles.article}>
                <h2>Faça o download grátis aqui</h2>
                <p>Preencha o formulario abaixo para acessar o<br />ebook.</p>
            </div>
            <div className={styles.email}>
                <label htmlFor='email'>
                    Email*
                </label>
                <input type="email" id='email' required/>
            </div>
            <div className={styles.soma}>
                <label htmlFor="soma">
                    {Soma1} + {Soma2} = ?
                </label>
                <input type="number" onChange={(e) => setValor(e.target.value)} value={Valor} required/>
                {error ? (<p style={{color:'red'}}>{errorMenssage}</p>) : (<p></p>)}
            </div>
            <div>
                <label htmlFor="Checkado">
                    <input type="checkbox" id="Checkado" required/>
                    Eu concordo em receber comunicações
                </label>
            </div>
            <div>
                <p>Ao informar meus dados, eu concordo com a <Link to='/' target='_blank'>Politica de Privacidade.</Link></p>
            </div>
            <div>
                <button type='submit' >Acessar Ebook agora!</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario