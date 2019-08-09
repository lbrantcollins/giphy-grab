import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Image } from 'semantic-ui-react'

const DisplayGifs = (props) => {

	const urls = props.gifs.map((gif, i) => { 
		return 	<Card key={i}>
						<Image src={gif.images.fixed_width.url} alt="" size='medium' /> 
						<Card.Content>
      					<a href={gif.url}><Icon name='linkify' />Image info...</a>
    					</Card.Content>
					</Card>
	});

	return (
			<Card.Group centered>
			{urls}
			</Card.Group>

	);

}

export default DisplayGifs;

