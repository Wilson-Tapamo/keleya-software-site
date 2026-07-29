const services = [
  {
    signal: "OPTIMISER",
    title: "Logiciels métier",
    description:
      "Des outils sur mesure qui simplifient les opérations, connectent les équipes et transforment les processus critiques en avantage concurrentiel.",
    tags: ["Automatisation", "Opérations", "Intégrations"],
  },
  {
    signal: "LANCER",
    title: "Produits numériques",
    description:
      "De l’idée au marché, nous concevons des expériences web et mobile désirables, utiles et pensées pour grandir.",
    tags: ["Web & mobile", "Expérience produit", "Go-to-market"],
  },
  {
    signal: "ACCÉLÉRER",
    title: "Plateformes évolutives",
    description:
      "Des fondations cloud robustes, sécurisées et observables pour soutenir votre croissance sans ralentir votre ambition.",
    tags: ["Cloud", "Data", "Performance"],
  },
];

const process = [
  {
    number: "01",
    title: "Aligner",
    text: "Comprendre l’enjeu, les utilisateurs et la valeur à créer avant d’écrire la première ligne.",
    output: "Vision produit",
  },
  {
    number: "02",
    title: "Architecturer",
    text: "Transformer l’ambition en une trajectoire claire, une expérience cohérente et une base technique durable.",
    output: "Plan d’exécution",
  },
  {
    number: "03",
    title: "Construire",
    text: "Livrer par cycles courts, tester dans le réel et maintenir un niveau d’exigence constant.",
    output: "Produit fonctionnel",
  },
  {
    number: "04",
    title: "Élever",
    text: "Mesurer, optimiser et faire évoluer le produit pour qu’il reste performant à chaque nouvelle échelle.",
    output: "Impact durable",
  },
];

const principles = [
  {
    title: "Excellence par défaut",
    text: "La qualité n’est pas une étape finale. Elle guide chaque décision, du premier atelier à la mise en production.",
  },
  {
    title: "Clarté radicale",
    text: "Des choix expliqués, une progression visible et une communication directe tout au long du projet.",
  },
  {
    title: "Portée mondiale",
    text: "Une équipe ancrée au Cameroun, des produits conçus pour les usages, les marchés et les ambitions du monde.",
  },
];

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand${inverse ? " brand--inverse" : ""}`} href="#accueil" aria-label="Keleya — Accueil">
      <span className="brand__mark" aria-hidden="true">
        <img src="/keleya-mark-red.png" alt="" width="1600" height="1600" />
      </span>
      <span className="brand__word">KELEYA</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <header className="site-header" aria-label="Navigation principale">
        <Brand inverse />
        <nav className="site-nav" aria-label="Sections">
          <a href="#expertise">Expertise</a>
          <a href="#approche">Approche</a>
          <a href="#exigence">Exigence</a>
        </nav>
        <a className="header-cta" href="#contact">
          Démarrer un projet <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="contenu">
        <section className="hero" id="accueil" aria-labelledby="hero-title">
          <div className="hero__media" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/keleya-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero__veil" />
          <div className="hero__grid" aria-hidden="true" />

          <div className="hero__content">
            <div className="hero__eyebrow hero-animate hero-animate--one">
              <span className="status-dot" />
              <span>Studio d’ingénierie logicielle</span>
              <span className="hero__location">Cameroun — Worldwide</span>
            </div>

            <h1 className="hero__title" id="hero-title">
              <span className="hero-animate hero-animate--two">Le logiciel</span>
              <span className="hero__title-outline hero-animate hero-animate--three">comme avantage</span>
              <span className="hero__title-accent hero-animate hero-animate--four">décisif.</span>
            </h1>

            <div className="hero__footer hero-animate hero-animate--five">
              <p>
                Keleya conçoit des produits numériques et des systèmes métier qui
                donnent aux entreprises le pouvoir d’aller plus vite, plus loin.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#contact">
                  Lancer un projet <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#expertise">
                  Découvrir notre expertise <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero__index" aria-hidden="true">
            K / 001
          </div>
          <div className="hero__scroll" aria-hidden="true">
            <span>Scroll</span>
            <i />
          </div>
        </section>

        <section className="manifesto section-pad" aria-labelledby="manifesto-title">
          <div className="section-kicker reveal">
            <span>Pourquoi Keleya</span>
            <span className="section-kicker__line" />
            <span>Built for momentum</span>
          </div>
          <div className="manifesto__layout">
            <h2 className="manifesto__statement reveal" id="manifesto-title">
              Nous transformons les idées ambitieuses en logiciels{" "}
              <em>fiables, utiles</em> et prêts à changer d’échelle.
            </h2>
            <div className="manifesto__aside reveal">
              <span className="mini-label">NOTRE CONVICTION</span>
              <p>
                Un bon logiciel ne se contente pas de fonctionner. Il réduit la
                complexité, amplifie les équipes et ouvre de nouvelles possibilités.
              </p>
              <a className="text-link text-link--dark" href="#approche">
                Voir comment nous travaillons <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
        </section>

        <section className="expertise section-pad" id="expertise" aria-labelledby="expertise-title">
          <div className="section-heading reveal">
            <div>
              <span className="mini-label mini-label--light">CE QUE NOUS CONSTRUISONS</span>
              <h2 id="expertise-title">De l’idée au système.</h2>
            </div>
            <p>
              Stratégie, design et ingénierie réunis pour créer des solutions
              qui produisent un impact réel.
            </p>
          </div>

          <div className="services">
            {services.map((service) => (
              <article className="service-row reveal" key={service.title}>
                <span className="service-row__signal">{service.signal}</span>
                <div className="service-row__main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ul className="service-row__tags" aria-label={`Domaines : ${service.tags.join(", ")}`}>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className="service-row__arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        <div className="capability-rail" aria-label="Compétences">
          <div className="capability-rail__track">
            <span>Stratégie</span><i /> <span>Design produit</span><i />
            <span>Ingénierie</span><i /> <span>Cloud</span><i />
            <span>Data</span><i /> <span>IA appliquée</span><i />
            <span aria-hidden="true">Stratégie</span><i aria-hidden="true" />
            <span aria-hidden="true">Design produit</span><i aria-hidden="true" />
            <span aria-hidden="true">Ingénierie</span><i aria-hidden="true" />
          </div>
        </div>

        <section className="approach section-pad" id="approche" aria-labelledby="approach-title">
          <div className="approach__intro reveal">
            <span className="mini-label mini-label--light">NOTRE APPROCHE</span>
            <h2 id="approach-title">
              La vitesse,
              <br />
              <em>sans les raccourcis.</em>
            </h2>
            <p>
              Une méthode exigeante qui transforme les incertitudes en décisions,
              puis les décisions en produit.
            </p>
          </div>

          <ol className="process-list">
            {process.map((step) => (
              <li className="process-step reveal" key={step.number}>
                <span className="process-step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className="process-step__output">{step.output}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="standards section-pad" id="exigence" aria-labelledby="standards-title">
          <div className="standards__top">
            <div className="standards__mark reveal" aria-hidden="true">
              <img src="/keleya-mark-red.png" alt="" width="1600" height="1600" />
            </div>
            <div className="standards__headline reveal">
              <span className="mini-label">LE STANDARD KELEYA</span>
              <h2 id="standards-title">
                Conçu pour durer.
                <br />
                <em>Mesuré pour performer.</em>
              </h2>
            </div>
          </div>

          <div className="principles">
            {principles.map((principle) => (
              <article className="principle reveal" key={principle.title}>
                <span className="principle__cross" aria-hidden="true">+</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__orbit" aria-hidden="true" />
          <span className="mini-label mini-label--light reveal">UN PROJET EN TÊTE ?</span>
          <h2 className="reveal" id="contact-title">
            Construisons votre
            <br />
            prochain avantage.
          </h2>
          <div className="contact__bottom reveal">
            <p>
              Racontez-nous le défi. Nous vous aiderons à trouver la trajectoire
              la plus claire entre l’ambition et le produit.
            </p>
            <a
              className="contact__button"
              href="mailto:contact@keleya.cm?subject=Nouveau%20projet%20—%20Keleya"
            >
              <span>Parler à Keleya</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Brand inverse />
        <p>Ingénierie logicielle · Cameroun → Monde</p>
        <div className="footer__links">
          <a href="#accueil">Retour en haut ↑</a>
          <a href="mailto:contact@keleya.cm">contact@keleya.cm</a>
        </div>
        <span className="footer__legal">© 2026 Keleya. Tous droits réservés.</span>
      </footer>
    </>
  );
}
