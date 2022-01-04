import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favourites from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetups />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route path='/favourites'>
          <Favourites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
