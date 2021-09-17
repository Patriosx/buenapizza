import "./App.css";
import Menu from "./components/carta/Menu";
import HeroPage from "./components/hero-page/HeroPage";
import Products from "./components/products";
import { productData } from "./components/products/data";
function App() {
	return (
		<>
			<HeroPage />
			<Menu />
			<Products heading="Choose your pizza" data={productData} />
		</>
	);
}

export default App;
