import React, { Fragment, useEffect, useState } from 'react';
import { List, ListItem, Divider } from 'react95';

export default function CustomBox({ x, y, visible }) {
	// Change this to visible, when you find out the solution .
	const [visibleState, setVisible] = useState(visible);
	useEffect(() => {
		if (document.addEventListener) {
			document.addEventListener(
				'click',
				function (e) {
					setVisible(false);
				},
				false
			);
		}
		if (document.addEventListener) {
			document.addEventListener(
				'contextmenu',
				function (e) {
					setVisible(true);
				},
				false
			);
		}
    
	},[visibleState]);

	return (
		<section id ="customBox">
			{visibleState ? (
				<div style={{ position: `absolute`, top: `${y}px`, left: `${x}px`, display: 'inline-block' }}>
					<List>
						<ListItem size="sm" style={{ cursor: 'pointer' }}>
							View
						</ListItem>

						<Divider />
						<ListItem size="sm" style={{ cursor: 'pointer' }}>
							Refresh
						</ListItem>
						<a href="https://github.com/Varuas37" target="_blank">
            <ListItem size="sm" style={{ cursor: 'pointer' }}>
							Github
						</ListItem>
            </a>
            	<a href="https://www.linkedin.com/in/spanthee" target="_blank">
						<ListItem size="sm" style={{ cursor: 'pointer' }}>
							LinkedIn
						</ListItem>
            </a>
						<Divider />
            <a href="http://localhost:3000/resume" target="_blank">
						<ListItem size="sm" style={{ cursor: 'pointer' }}>
							Resume
						</ListItem>
            </a>
					</List>
				</div>
			) : null}
		</section>
	);
}
