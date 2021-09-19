import Basket from "./Basket.jsx";
import Cart from "./Cart";
const Index = ({ cartItems, onAdd, onRemove }) => {
	return (
		<div className="container card mt-5">
			<div className="row">
				<div className="col-md" id="">
					<Cart cartItems={cartItems} />
				</div>
				<div className="col-md" id="">
					<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
				</div>
			</div>
		</div>
	);
};

export default Index;
