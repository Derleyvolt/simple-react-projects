import { Word } from './Word'
import { Searcher } from './Searcher'
import { wordsContext } from '../App'
import react, { useState } from 'react';

export function SearcherFilter() {  
    const { current: { words, setWords } } = react.useContext(wordsContext);

    return (
      <div >
        <Searcher > </Searcher>
        { words.map((e, idx) => <div key={idx}> 
                                      <Word content={e} index={idx}> </Word> 
                                   </div>
                      )
        }
      </div>
    )
}