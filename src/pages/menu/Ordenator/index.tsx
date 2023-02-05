import styles from "./Ordenator.module.scss";
import options from "./options.json";
import React, { useState } from 'react';
import classNames from 'classnames';
import {MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
    ordenador: string;
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenator({
    ordenador,
    setOrdenador
}: Props) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && options.find(option => option.value === ordenador)?.nome;
    return(
        <button 
            className={classNames({
            [styles.ordenadot]: true,
            [styles["ordenador--ativo"]]: ordenador !== "",
        })} 
        onClick={() => setAberto(!aberto)}
        onBlur={() => setAberto(false)}
        >

            <span>{nomeOrdenador || "Ordenar Por"}</span>
            {aberto ? (< MdKeyboardArrowUp size={20}/>) : (< MdKeyboardArrowDown size={20}/>)}
            <div 
            className={classNames({
                [styles.ordenador__options]: true,
                [styles["ordenador__options--ativo"]]: aberto,
            })}>
                {options.map((option) => (
                    <div className={styles.ordenador__option} 
                        key={option.value} 
                        onClick={() => setOrdenador(option.value)}
                    >
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}