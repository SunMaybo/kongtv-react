import React, { Suspense, lazy } from 'react';

import Store from '@/store';
// import Home from '@/page/home';
// import PlayMovie from '@/page/play';
// import MovieDetail from '@/page/detail';
// import MovieSearch from '@/page/search';
import { Slide } from '@material-ui/core';
import ScrollToTop from '@/components/scrollToTop';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { checkBrowser } from './utils';
import { Loading } from './components';

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@/page/home'));
const PlayMovie = lazy(() => import(/* webpackChunkName: "playmovie" */ '@/page/play'));
const MovieDetail = lazy(() => import(/* webpackChunkName: "moviedetail" */ '@/page/detail'));
const MovieSearch = lazy(() => import(/* webpackChunkName: "moviesearch" */ '@/page/search'));
const WatchHistory = lazy(() => import(/* webpackChunkName: "watchhistory" */ '@/page/watchHistory'));

const routes = [
  { path: '/play', Component: PlayMovie },
  { path: '/detail', Component: MovieDetail },
  { path: '/search/:query', Component: MovieSearch },
  { path: '/search', Component: MovieSearch },
  { path: '/watchhistory', Component: WatchHistory },
  { path: '/', Component: Home },
];

const isSafari = checkBrowser() === 'Safari';
// const isMobile = checkIsMobile();

const renderWithTransition = (path, Component) => {
  const render = props => {
    const { match, history } = props;

    if (!isSafari) {
      const direction = history.action === 'POP' ? 'right' : 'left';
      return (
        <Slide direction={direction} in={match != null} unmountOnExit>
          <div className="page">
            <Component />
          </div>
        </Slide>
      );
    } else {
      if (history.action === 'POP') {
        return <Component />;
      } else {
        return (
          <Slide direction="left" in={match != null} unmountOnExit>
            <div className="page">
              <Component />
            </div>
          </Slide>
        );
      }
    }
  };
  return (
    <Route key={path} exact path={path}>
      {render}
    </Route>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading fullpage />}>
          <Store.Provider>
            <ScrollToTop>
              <Switch>
                {routes.map(({ path, Component }) => renderWithTransition(path, Component))}
              </Switch>
            </ScrollToTop>
          </Store.Provider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
