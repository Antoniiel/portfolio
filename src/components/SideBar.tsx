import styles from '../styles/home.module.scss'
import Link from 'next/link'
function SideBar(){
    return (
    <div className={styles.header_logo}>
        <Link href="/" legacyBehavior>
        <a className={styles.logo}>shavanna</a>
        </Link>
        <div className={styles.projetos}>                       
            <ul>
                <li>
                    
                <Link href="/about" legacyBehavior>
                    <a>Sobre</a>
                </Link>
                </li>
                <li>
                <a href="/project1">Projeto 1</a> 
                </li>
                <li>
                <a href="">Projeto 2</a> 
                </li>
            </ul>
            
           
        </div>
    </div>
    )
    }
    
    export default SideBar;