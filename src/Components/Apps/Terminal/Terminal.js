import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Cutout, Window, WindowContent, WindowHeader, Toolbar, Button } from 'react95';
import iconConsole from './iconConsole.png';
import iconClose from './iconClose.png';
import UseOnEnter from './UseOnEnter.js';
import MapConsoleOutput from './MapConsoleOutput.js';
import Draggable from 'react-draggable';

import { connect } from 'react-redux';

import {
	openTerminal,
	closeTerminal,
	openMinesweeper,
	closeMinesweeper,
	openPortfolio,
	closePortfolio,
	openProfile,
	openNavigation,
	closeNavigation,
	openSettings,
	closeSettings,
	openDocuments,
	closeDocuments,
	openHelp,
	closeHelp,
	openProgram,
	closeProgram,
	openResume,
	closeResume,
} from '../../../Redux/action/applications';
import { closeComputer } from '../../../Redux/action/computer';
import { Redirect } from 'react-router-dom';
const Terminal = ({
	terminal,
	openTerminal,
	closeTerminal,
	openMinesweeper,
	closeMinesweeper,
	openPortfolio,
	closePortfolio,
	openProfile,
	openNavigation,
	closeNavigation,
	openSettings,
	closeSettings,
	openDocuments,
	closeDocuments,
	openHelp,
	closeHelp,
	openProgram,
	closeProgram,
}) => {
	const inputText = useRef();
	const [consoleOutput, commandValues, onEnter] = UseOnEnter();

	useEffect(() => {
		if (terminal) {
			inputText.current.value = '';
			inputText.current.focus();
		}
		// if(consoleOutput=="exit"){
		//   closeTerminal();
		// }
	});
	useEffect(() => {
		console.log(commandValues);
		if (commandValues == 'open portfolio') {
			openPortfolio();
		}
		if (commandValues == 'close portfolio') {
			closePortfolio();
		}
		if (commandValues == 'open profile') {
			openPortfolio();
		}
		if (commandValues == 'open minesweeper') {
			openMinesweeper();
		}
		if (commandValues == 'close minesweeper') {
			closeMinesweeper();
		}
		if (commandValues == 'open documents') {
			openDocuments();
		}
		if (commandValues == 'close documents') {
			closeDocuments();
		}
		if (commandValues == 'open help') {
			openHelp();
		}
		if (commandValues == 'close help') {
			closeHelp();
		}
		// if (commandValues == 'open programs') {
		// 	openProgram();
		// }
		// if (commandValues == 'close programs') {
		// 	closeProgram();
		// }
		if (commandValues == 'exit') {
			closeTerminal();
		}
		if (commandValues == 'shutdown') {
			closeComputer();
			closeTerminal();
			closePortfolio();
			closeProgram();
			closeMinesweeper();
			closeHelp();
			closeDocuments();
		}
		if (commandValues == 'cat resume.pdf') {
			window.location.href = 'http://localhost:3000/resume';
		}
	}, [commandValues]);

	return (
		terminal && (
			<Draggable bounds="parent">
				<Window>
					<WindowHeader className="window-header">
						<span style={{ display: 'flex', alignContent: 'center', gap: '10px' }}>
							{' '}
							<img src={iconConsole} />
							SP-DOS Prompt
						</span>
						<Button onClick={() => closeTerminal()}>
							<img src={iconClose} />
						</Button>
					</WindowHeader>
					<Toolbar>
						<Button variant="menu" size="sm">
							File
						</Button>
						<Button variant="menu" size="sm">
							Edit
						</Button>
						<Button variant="menu" size="sm">
							View
						</Button>
						<Button variant="menu" size="sm">
							Terminal
						</Button>
						<Button variant="menu" size="sm">
							Tabs
						</Button>
						<Button variant="menu" size="sm">
							Help
						</Button>
					</Toolbar>
					<WindowContent
						style={{
							width: '700px',
							height: '500px',
							maxHeight: '1000px',
							minWidth: '600px',
							padding: '3px',
						}}
						onClick={() => inputText.current.focus()}
					>
						<Cutout
							style={{
								width: '100%',
								height: '100%',
								padding: '20px',
								backgroundColor: 'black',
								overflow: 'scroll',
							}}
						>
							<div style={{ color: 'white', fontSize: '16px' }} className="input-prompt">
								<div className="terminalText" style={{ paddingBottom: '20px' }}>
									Saurav (R) Personal Website 97 (C) Copyright Saurav 1997-2020
								</div>
								<MapConsoleOutput consoleOutput={consoleOutput} />
								<span className="terminalText">Personal Website:\{' >'} </span>
								<input
									type="text"
									className="terminalText"
									ref={inputText}
									style={{
										border: 'none',
										backgroundColor: 'black',
										color: 'white',
										outline: 'none',
										fontSize: '16px',
										width: '70%',
									}}
									onKeyPress={({ target: { value }, key }) => onEnter(value, key)}
								/>
							</div>
						</Cutout>
					</WindowContent>
				</Window>
			</Draggable>
		)
	);
};

Terminal.propTypes = {};

const mapStateToProps = (state) => ({
	terminal: state.applications.terminal,
});

export default connect(mapStateToProps, {
	openTerminal,
	closeTerminal,
	openMinesweeper,
	closeMinesweeper,
	openPortfolio,
	closePortfolio,
	openProfile,
	openNavigation,
	closeNavigation,
	openSettings,
	closeSettings,
	openDocuments,
	closeDocuments,
	openHelp,
	closeHelp,
	openProgram,
	closeProgram,
})(Terminal);
