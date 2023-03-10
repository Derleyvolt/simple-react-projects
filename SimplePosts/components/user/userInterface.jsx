import { useEffect, useState, createContext } from 'react'
import styles from './userInterface.module.css'
import { UserPerfil } from '../userPerfil/userPerfil'
import { DoComments } from '../doComments/doComments'
import { Comment } from '../comments/comments'

export const messageContext = createContext();

export function UserInterface() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        console.log(comments);
    }, [comments])

    const userPhoto = "https://avatars.githubusercontent.com/u/35679266?v=4";
    const userName  = "Derley";

    return (
        <div>
            <div className={styles.mainDiv}>
                <UserPerfil name='Derley' role='Programador' university='UFC' age='26' >  </UserPerfil>
                <div className={styles.doComments}>
                    {/* {user: { userName, userPhoto }, comment */}
                    <messageContext.Provider value={ {comments, setComments} }>
                        <DoComments userPhoto={userPhoto} userName={userName} > </DoComments>
                    </messageContext.Provider>
                    
                    { comments.map((e, idx) => {
                        return (
                            <div key={idx}>
                                <Comment userPhoto={e.userPhoto} userName={e.userName} userComment={e.comment}>  </Comment>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
} 