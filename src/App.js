import { Route, Switch } from 'react-router-dom';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import Profil from './pages/Profil';
import Projets from './pages/Projets';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route path='/reactportfolio' exact>
            <Profil/>
          </Route>
          <Route path='/reactportfolio/competences' exact>
            <Competences/>
          </Route>
          <Route path='/reactportfolio/projets' exact>
            <Projets/>
          </Route>
          <Route path='/reactportfolio/contact' exact>
            <Contact/>
          </Route>
        </Switch> 
    </>
  );
}

export default App;