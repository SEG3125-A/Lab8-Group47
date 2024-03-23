'use client'
import { usePathname, useRouter } from 'next/navigation';
import styles from "./styles.module.css";
import Link from "next/link";
import Image from 'next/image';

import logo from '../../../assets/logo.svg';
import MyButton from '../button/Button';
import { PersonCircle } from 'react-bootstrap-icons';



export default function Navbar() {
    
    const router = useRouter()
    const pathname = usePathname();

    let rightContent;

    if (pathname === '/welcome') {
        rightContent = (
            <div className={styles.right}>
                <MyButton 
                    onClick={() => router.push('/login')}
                    style={{backgroundColor: "rgba(49, 233, 178, 1)", fontFamily: 'sans-serif'}}
                    size='sm'
                >
                    Login
                </MyButton>
                <MyButton 
                    onClick={() => router.push('/signup')}
                    style={{backgroundColor: "rgba(96, 252, 162, 1)", fontFamily: 'sans-serif'}}
                    size='sm'
                >
                    Sign Up
                </MyButton>
            </div>
        )
    
    } else {
        rightContent = (
            <div className={styles.right}>
                <Link href="/goals" className={pathname === '/goals' ? styles.activeLink : styles.link}>Goals</Link>
                <Link href="/workouts" className={pathname === '/workouts' ? styles.activeLink : styles.link}>Workouts</Link>
                {/* <Link href="/progress">Progress</Link> */}
                <Link href="/account" className={styles.iconContainer}>
                    <PersonCircle className={pathname === '/account' ? styles.activeIconLink : styles.iconLink} />
                </Link>
            </div>
        )
    }

    return (

    <nav className={styles.Navbar}>

        <div className={styles.left}>
            <Image src={logo} className={styles.logo} alt='company logo'/>
            <div className={styles.siteName}>
                <h2 className={styles.health}>Health</h2>
                <h2 className={styles.track}>Track</h2>
            </div>
        </div>

        {rightContent}

    </nav>

    );
}