import igniteIcon from '../../assets/IgniteIcon.png'
import styles from  './header.module.css'
function Header() {
    return (
        <header className={styles.container}>
                <picture>
                    <img src={igniteIcon} alt=""/>
                </picture>

                <h1 className={styles.title}>Ignite Feed</h1>
        </header>
    );
}

export default Header;