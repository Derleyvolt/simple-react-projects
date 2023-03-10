import { Component } from 'react'
import styles from './userFriends.module.css'

export function UserFriends({ friendPhotos }) {
    friendPhotos = friendPhotos.slice(0, 6);

    const userPhotosDOM = friendPhotos.map( (photos, index) => {
        return (
            <div className={styles.imgDiv} key={index}>
                <img className={styles.img} src={photos} width="40" height="40"></img>                
            </div>
        )
    } );

    return (
        <div className={styles.component}>
            <header className={styles.header}>
                <strong className={styles.headerText}> Friends </strong>
            </header>

            <div className={styles.listFriends}>
                { userPhotosDOM }
            </div>

            <footer className={styles.footer}>
                <p className={styles.headerText}> All friends </p>
            </footer>


            {/* <div className={styles.listFriends}>
                <div className={styles.imgDiv}>
                    <img className={styles.img} src="https://avatars.githubusercontent.com/u/35679266?v=4" width="40" height="40"></img>
                </div>
                <div className={styles.imgDiv}>
                    <img className={styles.img} src="https://avatars.githubusercontent.com/u/35679266?v=4" width="40" height="40"></img>
                </div>
                <div className={styles.imgDiv}>
                    <img className={styles.img} src="https://avatars.githubusercontent.com/u/35679266?v=4" width="40" height="40"></img>
                </div>
                <div className={styles.imgDiv}>
                    <img className={styles.img} src="https://avatars.githubusercontent.com/u/35679266?v=4" width="40" height="40"></img>
                </div>
                <div className={styles.imgDiv}>
                    <img className={styles.img} src="https://avatars.githubusercontent.com/u/35679266?v=4" width="40" height="40"></img>
                </div>
                <div className={styles.imgDiv}>
                    <img className={styles.img} src="https://avatars.githubusercontent.com/u/35679266?v=4" width="40" height="40"></img>
                </div>
             </div> */}
        </div>
    )
}