import { useState, createContext, useContext } from 'react';
import styles from './doComments.module.css'
import { messageContext } from '../user/userInterface';

export function DoComments({ userPhoto, userName }) {
    const [comment, setComment] = useState('');

    let data = useContext(messageContext);

    function onChange(e) {
        setComment(e.target.value);
        console.log(comment);
    }

    function onComment() {
        data.comments.push({ userPhoto, userName, comment });
        data.setComments([...data.comments]);
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.bodyComments}>
                <header className={styles.header}>
                    <strong> Fazer Publicação </strong>
                </header>
                <hr />
                <div className={styles.userInfo}>
                    <img className={styles.userPhoto} src="https://avatars.githubusercontent.com/u/35679266?v=4" width="30" height="30" />
                    <strong className={styles.userName}> Derley </strong>
                </div>

                <div className={styles.comment}>
                    <textarea onChange={onChange} className={styles.makeComment} cols="41" rows="5" placeholder='O que você está pensando?' ></textarea>
                </div>

                <button onClick={onComment} className={styles.btnPublicar}> Publicar </button>
            </div>
        </div>
    )
}