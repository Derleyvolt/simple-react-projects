import styles from './comments.module.css'

export function Comment(props) {
    const { userPhoto, userName, userComment } = props;

    return (
        <div className={styles.mainDiv}>
            <img className={styles.userPhoto} src={userPhoto} width="25" height="25" ></img>
            
            <div>
                <div className={styles.fieldComment}>
                    <strong className={styles.userName}> {userName} </strong>
                    <p className={styles.comment}> {userComment} </p>
                </div>

                <div className={styles.btnsDiv}>
                    <strong className={styles.btnLike}> Like </strong>
                    <strong className={styles.btnComment}> Comment </strong>
                </div>
            </div>
        </div>    
    )
}