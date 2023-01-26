import styles from './menu.module.scss';

export default function Menu (){ // (need to start with uppercase)
    return (
        <main>
            <nav className={styles.menu}>
                <img src="../../assets/logo_restaurant.svg" alt="Logo Restaurant" />
            </nav> 
        </main>
    )
}