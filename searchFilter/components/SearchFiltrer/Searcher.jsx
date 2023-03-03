import styles from './Searcher.module.css'
import react, { useState, useEffect } from 'react';
import { wordsContext } from '../App';

export function Searcher() {
    let { current: { words, setWords}, buffer: { wordsBuffer } } = react.useContext(wordsContext);

    function filterInputOnChange(e) {
        const text = e.target.value;

        setWords(wordsBuffer.filter( (e) => {
            return e.indexOf(text) == 0;
        } ));
    }

    return (
        <div className={styles.outerDiv}>
            <button className={styles.btn}> Filter </button>
            <input className={styles.in} type='text' placeholder='Filtro' onChange={filterInputOnChange}/>
        </div>
    )
}