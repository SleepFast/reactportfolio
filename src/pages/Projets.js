import Card from '../components/Card/Card'

const projets = [
  { 
    image: {
      label: "Teaser projet hangit",
      url: "../../images/hangit.png",
    },
    title: "Site Hangit hébergé sur github",
    description: "Projet site en html, css, js, et php avec une bdd MySQL. C'est un jeux en ligne jouable à plusieurs, qui reprend les règles du jeu du 'pendu'.",
    link: "https://sleepfast.github.io/Hangit.io/"
  },
  {
    image: {
      label: "Teaser projet yellow",
      url: "../../images/yellow.png"
    },
    title: "Site YellowManga",
    description: "Projet en twig, css, js, et symfony avec une bdd MySQL. C'est un site de vente de manga avec un BO pour la contribution des manga et la visualisation des comptes et de leurs commandes.",
    link: ""
  },
  {
    image: {
      label: "Teaser projet sunpower",
      url: "../../images/sunpower.png"
    },
    title: "Premier projet de debut de formation, en équipe de 3. Site suivant un cahier des charges d'un client qui souhaite vendre et donner plus de visibilité à ses 'ombrières solaires'.",
    description: "Projet site en html, css, js tout en utilisant la librairie Bootstrap et la map Leaflet",
    link: "https://sleepfast.github.io/projet2/"
  },
  {
    image: {
      label: "Teaser projet lettremotiv",
      url: "../../images/lettremotiv.png"
    },
    title: "Lettre de motivation en ligne",
    description: "Projet site en html, css, et animations js. Site avec des animations js.",
    link: "https://sleepfast.github.io/lettremotivtype/"
  },
  {
    image: {
      label: "Teaser testKaliop",
      url: "../../images/testKaliop.png"
    },
    title: "Simple layout",
    description: "Test d'entrée en alternance chez Kaliop. Intégration d'une page web selon les guides lines internes de Kaliop.",
    link: "https://sleepfast.github.io/integrationkaliop/"
  },
]

function Projets() {
    return (
      <section>
          <h1>Projets</h1>
          <Card/>
      </section>
    );
  }
  export default Projets;