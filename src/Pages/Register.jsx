import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Register() {

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [error, setError] = useState(true);
    const [data, setData] = useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : []);
    const [errorAccount, setErrorAccount] = useState('');

    useEffect(() => {
        if (username.length < 6 && username.length > 0) {
            setUsernameError('❌');
            setError(true);
        } else if (username.length >= 6) {
            setUsernameError('✅');
            setError(false)
        } else {
            setUsernameError('');
            setError(true);
        }

        if (!email.match(mailFormat)) {
            if (email.length > 0) {
                setErrorEmail('❌');
            } else {
                setErrorEmail('');
                setError(true);
            }
        } else {
            setErrorEmail('✅');
            setError(false);
        }

        if (password.length < 8 && password.length > 0) {
            setErrorPassword('❌');
            setError(true);
        } else if (password.length >= 8) {
            if (confirmPassword != password) {
                if (confirmPassword > 0) {
                    setErrorConfirmPassword('❌');
                } else {
                    setErrorConfirmPassword('')
                }
                setError(true);
            } else {
                setErrorConfirmPassword('✅')
                setError(false);
            }
            setErrorPassword('✅');
        } else {
            setErrorPassword('');
            setError(true);
        }
    }, [username, email, password, confirmPassword]);

    function saveData() {
        const userInfo = {
            username: username,
            email: email,
            password: password,
            confirmPassword : confirmPassword
        }

        const mailIndex = data.findIndex((item) => item.email === email);
        if (mailIndex > -1) {
            setErrorAccount('This email already exists');
        } else {
            setData((prevdata) => [...prevdata, userInfo]);
            setErrorAccount('');
        }
    }
    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(data));
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword(''); 
    }, [data]);


    return (
        <>
            <section className='p-5 registerPage'>
                <Container>
                    <div className='d-flex align-items-baseline w-50' style={{margin:'auto'}}>
                        <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <span>{usernameError}</span>
                    </div>
                    <div className='d-flex align-items-baseline w-50' style={{margin:'auto'}}>
                        <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span>{errorEmail}</span>
                    </div>
                    <div className='d-flex align-items-baseline w-50' style={{margin:'auto'}}>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span>{errorPassword}</span>
                    </div>
                    <div className='d-flex align-items-baseline w-50' style={{margin:'auto'}}>
                        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <span>{errorConfirmPassword}</span>
                    </div>
                    <Button variant="primary" className='d-block' style={{margin:'auto'}} disabled={error ? true : false} onClick={saveData}>Register</Button>
                    <p>{errorAccount}</p>
                </Container>

                <h5>Already member ? Then log in <Link to={'login'} className='loginBtn' target='_blank'>here</Link> !</h5>
            </section>
        </>
    )
}

export default Register