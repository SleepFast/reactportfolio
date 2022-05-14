import { Route, Switch } from 'react-router-dom';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import Profil from './pages/Profil';
import Projets from './pages/Projets';
import Navbar from './components/Navbar'

function App() {
  return (
    <Navbar>
      <Switch>
        <Route path='/' exact>
          <Profil/>
        </Route>
        <Route path='/competences'>
          <Competences/>
        </Route>
        <Route path='/projets'>
          <Projets/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch> 
    </Navbar>
  );
}

export default App;