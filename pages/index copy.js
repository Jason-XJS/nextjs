import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
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
                <Link href="posts/first-post">Over ons</Link>
                <Link href="/">Verkoop</Link>
                <Link href="/">Koop</Link>
                <Link href="/">Adviseurs</Link>
                <Link href="/">Contact</Link>
              </div>
              <div className={styles.mobilebutton}>
                <MobileMenu />
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
                <h1>Wij brengen verkopers en kopers samen.</h1>
                <p>
                  Bij Silver Era Transition zijn we toegewijd aan het
                  revolutioneren van de manier waarop kopers en verkopers zich
                  op de markt verbinden, door gebruik te maken van de kracht van
                  geavanceerde kunstmatige intelligentie en statistische
                  analyse.
                </p>
              </div>
              <div className={styles.cfabox}>
                <div>
                  <h2>Wat is jouw rol in de reis met ons?</h2>
                </div>
                <div className={styles.cfarow}>
                  <Link href="#" className={styles.btn}>
                    Verkoper
                  </Link>
                  <Link href="#" className={styles.btn}>
                    Koper
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
          <h1>Zo begeleiden we je door het proces</h1>
          <div className={styles.vl}></div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div>
              <div>
                <h3>Data-Gedreven Inzicht</h3>
                <p>
                  In een wereld vol informatie kan het vinden van de juiste
                  inzichten een uitdaging zijn. Daar komen wij in beeld. Onze
                  oplossingen stellen je in staat om complexe markten
                  gemakkelijk te navigeren. Door gebruik te maken van AI en
                  statistische analyse transformeren we gegevens in bruikbare
                  intelligentie, zodat je de voorsprong krijgt die je nodig hebt
                  om te slagen in de competitieve omgeving van vandaag.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <Image
              src="/images/datadriveninsight.png"
              width={400}
              height={400}
              alt="inzicht"
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
                  <h3>AI-Matchmaking</h3>
                  <p>
                    Bij SET hebben we de kracht van kunstmatige intelligentie
                    ingezet om de manier waarop kopers en verkopers zich
                    verbinden te revolutioneren. Onze op AI gebaseerde
                    matchmaking-tool houdt rekening met tal van factoren, van
                    branchevoorkeuren tot specifieke vereisten, om nauwkeurige
                    en efficiënte matches te vergemakkelijken. Of je nu een
                    koper bent die op zoek is naar het ideale product of dienst,
                    of een verkoper die op zoek is naar de perfecte klant, of
                    zelfs een verkoper die op zoek is naar iemand om je passie
                    en levenswerk voort te zetten, wij zijn hier om die relatie
                    te koesteren en te laten voortduren in de voortzetting van
                    het bedrijf. Ons platform zorgt ervoor dat je matches niet
                    alleen connecties zijn, maar kansen op succes.
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
                    <h3>Real-Time Marktwaardering</h3>
                    <p>
                      Ons platform benut de nieuwste ontwikkelingen in AI om
                      kopers en verkopers naadloos samen te brengen en
                      efficiënte en wederzijds voordelige transacties te
                      bevorderen. Door geavanceerde algoritmen en machine
                      learning te gebruiken, zorgen we ervoor dat elke gemaakte
                      verbinding geworteld is in datagestuurde precisie, wat de
                      kans op succesvolle uitkomsten voor alle betrokken
                      partijen verhoogt.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.column}>
                <Image
                  src="/images/valuation.png"
                  width={400}
                  height={400}
                  alt="waardering"
                  className={styles.colimg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
