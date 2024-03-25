import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from "react-redux";
import { addToCart, decrementQty, deleteProduct, clearCart } from "../features/shopSlice";
import { useDispatch } from "react-redux";
import { shopCart } from "../features/shopSlice";
import { Badge } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

export default function ShopCart() {

  const [show, setShow] = useState(false);
  const cart = useSelector(shopCart);
  const dispatch = useDispatch()

  let totalOneProduct;
  let subTotal = 0;

  cart.map((item, index) => {
    totalOneProduct = item.price * item.quantity
    return subTotal += totalOneProduct
  })
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FaShoppingCart onClick={handleShow} style={{ fontSize: '20px', cursor: "pointer", color: "white" }} />
      <Badge bg="danger" className='cartBadge'>{cart.length}</Badge>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Panier</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length > 0 ? (
            <>
              {cart.map((item, index) => (
                <div key={index} className='d-flex judstify-content-center align-items-center mb-4 product'>
                  <img src={item.cover} alt={item.name} width={100} />
                  <div>
                    <p>{item.name}</p>
                    <p><span>{item.quantity} x </span>{item.price} DT</p>
                    <p>{item.quantity * item.price} DT</p>
                  </div>
                  <div className='trashNCount'>
                  <FaTrashAlt onClick={() => dispatch(deleteProduct(item))} className='mb-3 trash' />
                  <Button variant="secondary" onClick={() => dispatch(decrementQty(item))}>-</Button>
                  <Button variant="secondary" style={{ backgroundColor: 'white', color: 'black' }}>{item.quantity}</Button>
                  <Button variant="secondary" onClick={()=>dispatch(addToCart(item))}>+</Button>
                  </div>
                </div>
              ))}
                <div className='d-flex justify-content-between align-items-baseline'>
                <Button variant="outline-secondary" onClick={() => dispatch(clearCart())}>Clear cart</Button>
                <p>Total price : </p>
                <p>{subTotal} DT</p>
                </div>
            </>
          ) : (
            <p>Votre panier est vide.</p>
          )
        }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
