import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage, ComicsPage, Page404 } from '../pages';

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route exact path="/" element={<MainPage />} />
                        <Route exact path="/comics" element={<ComicsPage />} />
                        <Route path="*">
                            <Page404/>
                        </Route>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;