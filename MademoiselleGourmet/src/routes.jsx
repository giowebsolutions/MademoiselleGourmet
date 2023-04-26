import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/product/:id" element={<Product />}> </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes