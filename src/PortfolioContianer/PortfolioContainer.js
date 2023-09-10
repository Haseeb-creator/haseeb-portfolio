import React from 'react'
import { TOTAL_SCREENS } from '../Utilities/CommonUtils'

function PortfolioContainer() {

	const mapAllScreen = () => {
		return (
			TOTAL_SCREENS.map((screen) => {
				return (
					(screen.component) ? <screen.component screenName={screen.screen_name} key={screen.screen_name} id={screen.screen_name} /> : <div key={screen.screen_name}></div>)
			})
		)
	}

	return (
		<div className='portfolio-container'>{mapAllScreen()}</div>
	)
}

export default PortfolioContainer