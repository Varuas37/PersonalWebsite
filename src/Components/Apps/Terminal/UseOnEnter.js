import React, { useState } from 'react';
import { closeTerminal } from '../../../Redux/action/applications';

const commands = {
	help:
		'quit: exit the applicaiton , shutdown: shuts down the computer, clear: clears the text, cd: Goes inside the folder, open: open PROGRAMNAME opens a program. try open Minesweeper,cat: cat filename -opens the file. try open resume.pdf, hire: To get my contact info.',
	quit: 'Qutting the application',
	ls: 'Portfolio  Profile  Minesweeper  Document Help  Shutdown',
	'cd document': 'resume.pdf',
	'cd portfolio': 'You can open a directory by pressing open DIRECTORY_NAME. Try open Portfolio',
	'open portfolio': 'Portfolio is now open',
	'close portfolio': 'Portfolio closed',
	'open minesweeper': 'Minesweeper is now open',
	'close minesweeper': 'Minesweeper closed',
	'cat resume.pdf': 'Redirecting...',
	'open profile': 'Profile is now open',
	'close profile': 'Profile closed',
	'open documents': 'Documents is now open',
	'close documents': 'Documents closed',
	'open help': 'Help is now open',
	'close help': 'Help closed',
	'open settings': 'Settings is now open',
	'close settings': 'Settings is now closed',
	hire: 'Please send me an email at spanthee@patriots.uttyler.edu',
	'i love you': 'I love you too. But, I think Tinder is what you should be looking for #ad #not_really',
	// 'open programs': 'Program is now open',
	// 'close programs': 'Program closed',
	clear: 'clear',
	exit: "Exitting. You probably won't see this",
};

const UseOnEnter = () => {
	const [consoleOutput, updateConsoleOutput] = React.useState([]);
	const [commandValues, setCommandValues] = React.useState([]);

	const onEnter = (value, key) => {
		if (key === 'Enter') {
			if (value.toLowerCase() == 'clear') {
				updateConsoleOutput([]);
			}

			setCommandValues(value.toLowerCase());
			const newConsoleLine = commands[value.toLowerCase()] || `invalid command: ${value}`;
			return updateConsoleOutput((consoleOutput) => consoleOutput.concat(newConsoleLine));
		}
	};

	return [consoleOutput, commandValues, onEnter];
};
export default UseOnEnter;
