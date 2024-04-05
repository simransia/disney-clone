import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Detail from "./views/movieDetails";
import WatchMovie from "./views/watchMovie";
import MySpace from "./views/my-space";
import { Layout } from "./components";
import Explore from "./views/explore";
import Shows from "./views/shows";
import Movies from "./views/movies";
import Sports from "./views/sports";
import Categories from "./views/categories";
import { ROUTES } from "./constants/routes";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.MOVIE_DETAILS} element={<Detail />} />
            <Route path={ROUTES.SUBSCRIBE} element={<WatchMovie />} />
            <Route path={ROUTES.PROFILE} element={<MySpace />} />
            <Route path={ROUTES.SEARCH} element={<Explore />} />
            <Route path={ROUTES.SHOWS} element={<Shows />} />
            <Route path={ROUTES.MOVIES} element={<Movies />} />
            <Route path={ROUTES.SPORTS} element={<Sports />} />
            <Route path={ROUTES.CATEGORIES} element={<Categories />} />
          </Routes>
        </Layout>
      </Router>
    </Fragment>
  );
};

export default App;
