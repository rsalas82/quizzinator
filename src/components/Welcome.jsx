import { useState } from 'react'
import './Welcome.css'

const Welcome = (props) => {
    const { handleWelcomeSubmit } = props;
    const [username, setUsername] = useState();

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    const handleClick = () => {
        console.log(user)
        handleWelcomeSubmit(username);
    }

    return (
        <div className='welcome__form'>
            <p>What's your name, little human?</p>
            <input type="text" name="username" onChange={handleChange}/>
            <button onClick={handleClick}>Enviar</button>
        </div>
    )
}

export default Welcome;