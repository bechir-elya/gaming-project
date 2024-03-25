import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ShopCart from './shopCart';
import brandLogo from '../assets/brands/wolf.jpg'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Navbar className="bg-black">
                <Container>
                    <Navbar.Brand href="#home" className='text-white'><img src={brandLogo} alt="logo" className='brandLogo' /></Navbar.Brand>
                    <div className='d-flex justify-content-around' style={{ width:'100%'}}>
                        <Link to={'/'} style={{ color: 'white', fontWeight: 'bold', textDecoration:'none' }}>Home</Link>
                        <Link to={'About us'} style={{ color: 'white', fontWeight: 'bold', textDecoration:'none' }}>About us</Link>
                        <Link to={'Shop'} style={{ color: 'white', fontWeight: 'bold', textDecoration:'none' }}>Shop</Link>
                        <Link to={'Contact'} style={{ color: 'white', fontWeight: 'bold', textDecoration:'none' }}>Contact</Link>
                    </div>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <ShopCart />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
