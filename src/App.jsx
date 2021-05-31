import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HomeContainer from './components/home/HomeContainer';
import MovieDetailContainer from './components/moviedetail/MovieDetailContainer';
import SearchPageContainer from './components/searchPage/SearchPageContainer';

export const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={HomeContainer} exact />
          <Route path="/movie/:id" component={MovieDetailContainer} />
          <Route path="/search" component={SearchPageContainer} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
