import { SearcherFilter } from './SearchFiltrer/SearchFilter'
import react, { useEffect, useState, context } from 'react'
import styles from './App.module.css'

export let wordsContext = react.createContext();

function genRandom(min, max) {
    const rnd = Math.floor(Math.random() * max);
    return min + (rnd % (max-min+1));
}

function genRandomWord(minLen, maxLen) {
    const str = [];
    for(var i = 0; i < genRandom(minLen, maxLen); i++) {
        str.push(genRandom('a'.charCodeAt(0), 'z'.charCodeAt(0)));
    }

    return String.fromCharCode(...str);
}

function genRandomWords(count, minLen, maxLen) {
    const words = [];

    for(var i = 0; i < count; i++) {
        words.push(genRandomWord(minLen, maxLen));
    }

    return words;
}

function App() {
    const [words, setWords]             = useState(genRandomWords(10, 50, 80));
    const [wordsBuffer, setWordsBuffer] = useState(words);

    return (
      <div className={styles.outerDiv}>
        <wordsContext.Provider value={ { current: { words, setWords }, buffer: { wordsBuffer, setWordsBuffer }} }>
          <SearcherFilter > </SearcherFilter>
        </wordsContext.Provider>
      </div>
    )
} 

export default App
