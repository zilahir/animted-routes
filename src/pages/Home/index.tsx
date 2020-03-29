import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()
	return (
		<div>
			<p onClick={() => history.push('welcome')}>
                Welcome
            </p>
		</div>
	)
}

export default Home