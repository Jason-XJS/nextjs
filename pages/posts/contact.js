import { Inter, Stint_Ultra_Condensed } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div>
      <Header />
      <div className={styles.colcentered}>
        <h1>Contact us</h1>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Image
            src="/images/contact.png"
            width={500}
            height={500}
            alt="contact"
            className={styles.centerimg}
          />
        </div>
      </div>
      <div className={styles.colcentered}>
        <div className={styles.row}></div>

        <Image
          src="/images/email.png"
          width={500}
          height={500}
          alt="email"
          className={styles.iconimg}
        />

        <p>info@silvereratransition.com</p>
      </div>
      <div className={styles.menucontainer}>
        <div className={styles.row}>
          <div className={styles.linkbar}>
            <Link href="https://www.linkedin.com/company/silver-era-transition/">
              <Image
                src="/images/linkedin.png"
                width={500}
                height={500}
                alt="linkedin"
                className={styles.iconimg}
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/facebook.png"
                width={500}
                height={500}
                alt="facebook"
                className={styles.iconimg}
              />
            </Link>
            <Link href="https://instagram.com/silvereratransition?igshid=MzMyNGUyNmU2YQ==">
              <Image
                src="/images/instagram.png"
                width={500}
                height={500}
                alt="instagram"
                className={styles.iconimg}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
