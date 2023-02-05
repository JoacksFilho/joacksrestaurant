import styles from './menu.module.scss';
import {ReactComponent as LogoRestaurant} from '../../assets/LogoRestaurant.svg';
import Buscador from '../menu/Search';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenator from '../menu/Ordenator';
import Itens from './Itens';

//'../../assets/LogoRestaurant.svg'; - forma relativa de chamar um arquivo.
//Necessario importar a logo para que o webpack entenda que o src é um arquivo estático. 
// ReactCompoimport Buscador from './../Search/index';
//ReactComponent transforma logo.svg em um componente.

export default function Menu (){ // (need to start with uppercase)
    const[busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador,  setOrdenador] = useState("");
    return (
        <main>
            <nav className={styles.menu}>
                <LogoRestaurant/>                            
            </nav> 
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa da Massa.
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Menu</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenator ordenador={ordenador} setOrdenador={setOrdenador}/>
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
            </section>
        </main>
    )
}