import './CartProductCounterButton.css';

function CartProductCounterButton({ itemAdded, itemRemoved, count }) {
  return (
    <div className="product__order-counter">
      <span className="me-1"><strong>Manage Cart:</strong></span>
      <button type="button" className="product__order-counter-btn" onClick={itemRemoved}>-</button>
      <span className="mx-2">{count}</span>
      <button type="button" className="product__order-counter-btn" onClick={itemAdded}>+</button>
    </div>
  );
}

export default CartProductCounterButton;
