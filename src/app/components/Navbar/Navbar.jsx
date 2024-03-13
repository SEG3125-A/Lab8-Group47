'use client'
import { usePathname } from 'next/navigation';
import styles from "./styles.module.css";
import Link from "next/link";
import Image from 'next/image';
import logo from '../../../assets/logo.svg';


export default function Navbar() {
    
    const pathname = usePathname();

    return (

    <nav className={styles.Navbar}>

        <div className={styles.left}>
            <Image src={logo} className={styles.logo}/>
            <div className={styles.siteName}>
                <h2 className={styles.health}>Health</h2>
                <h2 className={styles.track}>Track</h2>
            </div>
        </div>

        <div className={styles.right}>
            <Link href="/goals" className={pathname === '/goals' ? styles.activeLink : styles.link}>Goals</Link>
            <Link href="/workouts" className={pathname === '/workouts' ? styles.activeLink : styles.link}>Workouts</Link>
            {/* <Link href="/progress">Progress</Link> */}
        </div>

    </nav>

    );
}