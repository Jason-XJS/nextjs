import { Inter, Stint_Ultra_Condensed } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div className={styles.bodyAbout}>
      <div>
        <Header />

        <div className={styles.abtContainer}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div>
                <div>
                  <h1>Who we are</h1>
                  <h4>Smart & Trusted Partner.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div>
                <div>
                  <h5 className={styles.abtparagraph}>
                    At Silver Era Transition (SET), we are committed to
                    revolutionizing the way buyers and sellers connect in the
                    market, leveraging the power of cutting-edge artificial
                    intelligence and statistical analysis. Founded on the
                    principle of data-driven decision-making, our mission is to
                    empower businesses and individuals to make informed choices
                    by providing access to up-to-date market insights and
                    precise matchmaking solutions.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <div>
                <div>
                  <h5 className={styles.paragraph}>
                    Our platform harnesses the latest advancements in AI to
                    bring buyers and sellers together seamlessly, nurturing
                    efficient and mutually beneficial transactions. By utilizing
                    sophisticated algorithms and machine learning, we ensure
                    that every connection made is rooted in data-driven
                    precision, enhancing the probability of successful outcomes
                    for all parties involved.
                  </h5>
                  <h5 className={styles.paragraph}>
                    We take pride in our unwavering dedication to transparency
                    and accuracy. Our team of experts constantly refines our AI
                    models to deliver up-to-date market valuations, enabling our
                    users to navigate dynamic market conditions with confidence.
                    At SET, we are more than just a platform; we are a trusted
                    partner in your journey towards successful transactions and
                    informed decision-making.
                  </h5>
                </div>
              </div>
            </div>

            <div className={styles.column}>
              <Image
                src="/images/about.png"
                width={500}
                height={500}
                alt="about"
                className={styles.centerimg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
