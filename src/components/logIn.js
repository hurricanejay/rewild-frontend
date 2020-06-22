import React, {useState} from 'react'
import { connect } from 'react-redux';
import { loginActionCreater } from '../action/actionCreator'
import {Redirect} from 'react-router-dom';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        props.login(username, password)
    }

    return (
        <div>
            {props.user ? <Redirect to='/shop' /> :
                <form onSubmit={onSubmit}>
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
        login: (username, password) => dispatch(loginActionCreater(username, password))
    }
}

export default connect(msp, mdp)(Login)