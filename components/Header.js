import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import {useAuth} from "@/services/auth";
import {usePathname, useRouter} from "next/navigation";
import {useEffect} from "react";
import {authedRequest, LOCAL_TOKEN} from "@/services/http";


function Header() {
    const {authed, logout, userData} = useAuth();
    const router = useRouter();
    const pathname = usePathname()
    const handleClickLogout = () => {
        logout()
            .then(() => {
                router.replace(`/posts/login`)
            })
    }

    useEffect(() => {
        authedRequest.get(`/api/track`, {
            params: {
                action: 'view page',
                value: pathname
            }
        })
    }, [authed])

    return (
        <div>
            <div className={styles.menucontainer}>
                <div className={styles.menurow}>
                    <div className={styles.menucol}>
                        <div className={styles.logo}>
                            <Link href="/">
                                <Image
                                    src="/images/logo.png"
                                    height={70}
                                    width={70}
                                    className={styles.logoimg}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.menucol}>
                        <div className={styles.linkbar}>
                            <Link href="/posts/about">About</Link>
                            <Link href="/posts/selling">Selling</Link>
                            <Link href="/posts/buying">Buying</Link>
                            <Link href="/">Advisors</Link>
                            <Link href="/posts/contact">Contact</Link>
                            {!authed && <Link href="/posts/login">Login</Link>}
                            {authed && <button onClick={handleClickLogout} className={'text-blue-400'}>Logout</button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.mobilemenu}>
                <MobileMenu />
            </div>
        </div>
    )
}
export default Header;