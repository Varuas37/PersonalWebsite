import React, { Fragment, useState } from 'react';
import {
	Window,
	WindowHeader,
	WindowContent,
	NumberField,
	Tabs,
	Tab,
	Fieldset,
	Checkbox,
	TabBody,
	Button,
} from 'react95';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';

import { closePortfolio } from '../../../Redux/action/applications';

const Portfolio = ({ closePortfolio, portfolio }) => {
	const [state, setState] = useState({
		activeTab: 0,
	});
	const handleChange = (e, value) => setState({ activeTab: value });

	const { activeTab } = state;
	return (
		portfolio && (
			<Draggable bounds="parent">
				<Window
					style={{
						width: '40%',
						minWidth: 'fit-content',
						height: 'fit-content',
						position: 'absolute',
						left: '5%',
						top: '5%',
						overflowY: 'auto',
					}}
				>
					<WindowHeader>
						<span role="img" aria-label="dress">
							💻 {'  '}
						</span>
						PortFolio
						<Button style={{ position: 'absolute', right: '15px' }} onClick={() => closePortfolio()}>
							{/* <span className="close-icon" />x */}
							<span style={{ fontWeight: 'bolder' }}>x</span>
						</Button>
					</WindowHeader>
					<WindowContent>
						<Tabs value={activeTab} onChange={handleChange}>
							<Tab value={0}>In Progress</Tab>
							<Tab value={1}>All Projects</Tab>
							<Tab value={2}>Feedbacks</Tab>
						</Tabs>
						<TabBody style={{ height: 'fit-content', minHeight: '100%' }}>
							{activeTab === 0 && (
								<div>
									<Fieldset label="On Going Projects">
										<a href="https://floral-dust-7553.animaapp.io/home" target="_blank">
											Libri
										</a>
										<br />
										<a href="https://guarded-spire-09619.herokuapp.com/" target="_blank">
											Canvas Comment
										</a>
									</Fieldset>
									<br></br>
									<Fieldset label="Data Structures 📚 (In Progress...)">
										<p>Sorting Algorithms</p>
										<p>Path Finding Algorithms</p>
									</Fieldset>
								</div>
							)}
							{activeTab === 1 && (
								<div>
									<a href="https://sauravpanthee.wixsite.com/portfolio" target="_blank">
										Portfolio Website
									</a>
								</div>
							)}
							{activeTab === 2 && (
								<div>
									<iframe
										src="https://docs.google.com/forms/d/e/1FAIpQLSf5UObxSifi5-DhovM8ZYWOo1UjO-O2nADRVDgKCiA9FDT5Tw/viewform?embedded=true"
										width="640"
										height="443"
										frameborder="0"
										marginheight="0"
										marginwidth="0"
									>
										Loading…
									</iframe>
								</div>
							)}
						</TabBody>
					</WindowContent>
				</Window>
			</Draggable>
		)
	);
};

const mapStateToProps = (state) => ({
	portfolio: state.applications.portfolio,
});

export default connect(mapStateToProps, { closePortfolio })(Portfolio);
