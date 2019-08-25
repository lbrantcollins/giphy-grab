import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Image } from 'semantic-ui-react'

const DisplayGifs = (props) => {

	// Display GIFs in a grid of semantic-ui-react "cards"

	const urls = props.gifs.map((gif, i) => { 
		// for each GIF in the search, using the following "card" format
		return 	<Card key={i}>

						<Image src={gif.images.fixed_width.url} alt="" size='medium' /> 

						<Card.Content>
      					<a href={gif.url}><Icon name='linkify' />Image info...</a>
    					</Card.Content>

					</Card>
	});

	// render all the "cards" in a responsive-grid "card group"
	return (

			<Card.Group centered>
				{urls}
			</Card.Group>

	);

}

export default DisplayGifs;

