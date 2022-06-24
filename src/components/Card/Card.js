import "./Card.scss";
import ArrowSlide from '../Icons/arrowSlide';
 
function Card() {
 
  return (
    <div className="Card"> 
      <div className="Card-container">
        <img class="Card-img" src={require('../../images/hangit.png')} alt="Teaser projet hangit" />
      </div>
      <div className="Card-content">
        <h3 className="Card-title">Site Hangit hébergé sur github</h3>
        <p className="Card-description">Projet site en html, css, js, et php avec une bdd MySQL. C'est un jeux en ligne jouable à plusieurs, qui reprend les règles du jeu du 'pendu'.</p>
      </div>
      <div className="Card-footer">
        <a className="Card-link" href="https://sleepfast.github.io/Hangit.io/">Voir le projet</a>
        <ArrowSlide/>
      </div>
    </div> 
  ); 
} 
export default Card;