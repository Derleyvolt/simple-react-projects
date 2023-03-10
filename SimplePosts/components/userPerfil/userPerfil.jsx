import styles from './userPerfil.module.css'
import { UserFriends } from '../UserFriends/userFriends';

export function UserPerfil(props) {
    const { name, imgUrl, age, role, university } = props;

    const friendPhotos = Array(6).fill("https://avatars.githubusercontent.com/u/35679266?v=4");

    return (
        <aside className={styles.aside}>
            <div className={styles.userPhotoDiv}>
                <img className={styles.userPhoto} src="https://avatars.githubusercontent.com/u/35679266?v=4" width="100" height="100"></img>
            </div>
            
            <div className={styles.userInfo}>
                <strong className={styles.text}> Name: {name}  </strong>
                <strong className={styles.text}> Age: {age} </strong>
                <strong className={styles.text}> Role: {role} </strong>
                <strong className={styles.text}> University: {university} </strong>
            </div>


            <div className={styles.btns}>
                <button className={styles.btn}> Ranking </button>  
                <button className={styles.btn}> Friend List </button>  
            </div>

            <div className={styles.userFriendsDiv}>
                <UserFriends friendPhotos={friendPhotos}> </UserFriends>
            </div>
        </aside>
    )
}