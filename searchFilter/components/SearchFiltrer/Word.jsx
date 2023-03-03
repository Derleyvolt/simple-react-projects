import styles from './Word.module.css'
import react, { useState, useEffect } from 'react'
import { wordsContext } from '../App';

export function Word({ content, index }) {
    const { current: { words, setWords}, buffer: { wordsBuffer, setWordsBuffer } } = react.useContext(wordsContext);

    function handleDelete() {
        setWords(words.filter((e, idx) => idx != index));
        setWordsBuffer(wordsBuffer.filter((e, idx) => idx != index));
    }

    return (
        <div className={styles.outerDiv}>
            <button className={styles.btn} onClick={handleDelete}> 
                Erase content
            </button>

            <p className={styles.p}> {content} </p>
        </div>
    )
}