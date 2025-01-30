import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {MainPage, ComicsPage, Page404, SingleComicPage} from '../pages';
import AppHeader from "../appHeader/AppHeader";
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage, ComicsPage, Page404 } from '../pages';
>>>>>>> 162b86df8f6fb8502380875a9e83bc1015a1f850

const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
<<<<<<< HEAD
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                         
                        <Route path="*">
                            <Page404/>
                        </Route>
                    </Switch>
=======
                    <Routes>
                        <Route exact path="/" element={<MainPage />} />
                        <Route exact path="/comics" element={<ComicsPage />} />
                        <Route path="*">
                            <Page404/>
                        </Route>
                    </Routes>
>>>>>>> 162b86df8f6fb8502380875a9e83bc1015a1f850
                </main>
            </div>
        </Router>
    )
}

export default App;