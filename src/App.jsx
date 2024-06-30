import {useState} from 'react'
import Board from "./components/Board.jsx";
import {GameInfo} from "./components/GameInfo.jsx";
import './App.css'

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

function App() {
	const [squaers, setSquaers] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	const handleClick = (index) => {
		const newSquares = squaers.slice();

		if (calculateWinner(newSquares) || newSquares[index]) {
			return;
		}
		newSquares[index] = xIsNext ? 'X' : 'O';
		setSquaers(newSquares);
		setXIsNext(!xIsNext);
	};
	const winner = calculateWinner(squaers);
	let status;
	if (winner) {
		status = 'Winner: ' + winner;
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O');
	}

	const resetGame = () => {
		setSquaers(Array(9).fill(null));
		setXIsNext(true);
	};
	return <div className='app'>
		<h1>Tic Tac Toe React</h1>
		<Board squares={squaers} onClick={handleClick} />
		<GameInfo status={status} onReset={resetGame} />
	</div>
}

export default App
