import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import {useAuth} from "@/services/auth";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className={styles.bodyHome}>
      <div>
        <Header />
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div>
                <div>
                  <h1>We connect sellers and buyers.</h1>
                  <p>
                    At Silver Era Transition, we are committed to
                    revolutionizing the way buyers and sellers connect in the
                    market, leveraging the power of cutting-edge artificial
                    intelligence and statistical analysis.
                  </p>
                </div>
                <div className={styles.cfabox}>
                  <div>
                    <h2>What is your role in the journey with us?</h2>
                  </div>
                  <div className={styles.cfarow}>
                    <Link href="/posts/selling" className={styles.btn}>
                      Seller
                    </Link>
                    <Link href="/posts/buying" className={styles.btn}>
                      Buyer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <Image
                src="/images/handshake.png"
                width={400}
                height={400}
                alt="Handshake"
                className={styles.colimg}
              />
            </div>
          </div>
          <div className={styles.colcentered}>
            <h1>This is how we guide you through the process</h1>
            <div className={styles.vl}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <div>
                <div>
                  <h3>Data-Driven Insight</h3>
                  <p>
                    In a world engulfed with information, finding the right
                    insights can be a challenge. That's where we come in. Our
                    solutions empower you to navigate complex markets with ease.
                    By leveraging AI and statistical analysis, we transform data
                    into actionable intelligence, giving you the edge you need
                    to succeed in today's competitive environment.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <Image
                src="/images/datadriveninsight.png"
                width={400}
                height={400}
                alt="insight"
                className={styles.colimg}
              />
            </div>
          </div>
        </div>
        <div className={styles.bgsand}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <Image
                  src="/images/matchmaking.png"
                  width={400}
                  height={400}
                  alt="matchmaking"
                />
              </div>
              <div className={styles.column}>
                <div>
                  <div>
                    <h3>AI Matchmaking</h3>
                    <p>
                      Our AI-driven matchmaking tool takes into account a
                      multitude of factors, from industry preferences to
                      specific requirements, to facilitate precise and efficient
                      matches. Whether you're a buyer seeking the ideal product
                      or service, or a seller searching for the perfect
                      customer, or even a seller searching for someone to
                      continue your passion and life&rsquo;s work, we are here
                      to nurture that relationship into the continuation of the
                      business. Our platform ensures that your matches are not
                      just connections but opportunities for success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bgbeach}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <div>
                    <div>
                      <h3>Real-Time Market Valuation</h3>
                      <p>
                        Our platform harnesses the latest advancements in AI to
                        bring buyers and sellers together seamlessly, nurturing
                        efficient and mutually beneficial transactions. By
                        utilizing sophisticated algorithms and machine learning,
                        we ensure that every connection made is rooted in
                        data-driven precision, enhancing the probability of
                        successful outcomes for all parties involved.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.column}>
                  <Image
                    src="/images/valuation.png"
                    width={400}
                    height={400}
                    alt="valuation"
                    className={styles.colimg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
