import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import gbg from '../assets/login-img/gbg.jpg'

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  function connectProfile() {
    const data = JSON.parse(localStorage.getItem('userData'));

    const userIndex = data.findIndex((item) => item.email === email);
    if (userIndex == -1) {
      setErrorEmail('User not found');
    } else {
      if (password == data[userIndex].password) {
        navigate('/');
      } else {
        setErrorPassword('Incorrect password');
      }
    }
  }


  return (
    <>
      <section className="loginPage">
        <Container>
          <div className='mainDiv'>
            <img src={gbg} alt="gaming bg" className='loginBG'/>
            <div className='logFormular'>
              <div className='w-50' style={{ margin: 'auto' }}>
                <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                <span style={{color:'red'}}>{errorEmail}</span>
              </div>
              <div className='w-50' style={{ margin: 'auto' }}>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <span style={{color:'red'}}>{errorPassword}</span>
              </div>
              <Button variant="primary" className='d-block' style={{ margin: 'auto' }} onClick={connectProfile}>Log in</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Login