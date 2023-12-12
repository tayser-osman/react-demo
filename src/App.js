import { Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import SesamePage from './pages/products/SesamePage';
import PeanutPage from './pages/products/PeanutPage';
import CottonPage from './pages/products/CottonPage';
import ArabicgumPage from './pages/products/ArabicgumPage';
import NoPage from './pages/NoPage';
import './App.css';

export default function App() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/products/sesame" element={<SesamePage />} />
					<Route path="/products/peanut" element={<PeanutPage />} />
					<Route path="/products/cotton" element={<CottonPage />} />
					<Route path="/products/arabicgum" element={<ArabicgumPage />} />
					<Route path="/*" element={<NoPage />} />
				</Routes>
			</div>
		</div>
	);
}
