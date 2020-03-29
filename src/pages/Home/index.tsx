import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()
	return (
		<div>
			<p onClick={() => history.push('welcome')}>
                go to welcome page
            </p>
			<p onClick={() => history.push('demo')}>
                go to sub page
            </p>
		</div>
	)
}

export default Home