import React, {useState} from 'react'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('submit', username, password)
    }

    return (
        <div>
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
        </div>
    )
}

export default Login;