import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from '../features/shopSlice';
import { useDispatch } from 'react-redux';


export default function Articles({ item }) {

  const { name, category, brand, cover, price, rate } = item
  const dispatch = useDispatch();

  function add() {
    dispatch(addToCart(item))
  }

  return (
    <>
      <Col lg='4' className='mb-4 cardHover'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cover} className='productImg' />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{category}</Card.Text>
            <Card.Text>{brand}</Card.Text>
            <Card.Text>{[...Array(rate)].map((_, index) => (
              <FaStar key={index} style={{ color: "gold" }} />
            ))}
            </Card.Text>
            <Card.Text>{price} DT</Card.Text>

          </Card.Body>
          <div className='overLay' onClick={add}>
            <p className='text'>Add to cart <FaShoppingCart /></p>
          </div>
        </Card>
      </Col>
    </>
  )
}
