import React, {useState} from 'react'
import { connect } from 'react-redux';
import { signupActionCreater } from '../action/actionCreator'
import {Redirect} from 'react-router-dom';

function Signup(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        props.signup(username, password, email)
    }

    return (
        <div>
            {props.user ? <Redirect to='/shop' /> :
                <form onSubmit={onSubmit}>
                 <input type="text" placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />    
                <input type="text" placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button variant="primary" type="submit">
                    Submit
                </button>
            </form>
}
        </div>
    )
}

const msp = state => {
    return {
        user: state.user
    }
}

const mdp = (dispatch) => {
    return {
        signup: (username, password, email) => dispatch(signupActionCreater(username, password, email))
    }
}

export default connect(msp, mdp)(Signup)