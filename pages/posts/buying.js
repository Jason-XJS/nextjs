import { Inter, Stint_Ultra_Condensed } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Buying() {
  return (
    <div>
      <Header />

      <div className={styles.abtContainer}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div>
              <div>
                <h1>The takeover plan you can trust</h1>
                <h3>We offer three plan based on the duration</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.columns}>
            <div className={styles.box}>
              <div className={styles.subbox_t}>
                <h1>€150</h1>
              </div>
              <div className={styles.subbox_b}>
                <p>3 months</p>
                <div className={styles.subbtn}>
                  <sub>subscribe</sub>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.box}>
              <div className={styles.subbox_t}>
                <h1>€245</h1>
              </div>
              <div className={styles.subbox_b}>
                <p>6 months</p>
                <div className={styles.subbtn}>
                  <sub>subscribe</sub>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.box}>
              <div className={styles.subbox_t}>
                <h1>€400</h1>
              </div>
              <div className={styles.subbox_b}>
                <p>1 year</p>
                <div className={styles.subbtn}>
                  <sub>subscribe</sub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
