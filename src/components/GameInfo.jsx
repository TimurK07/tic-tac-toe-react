
export const GameInfo = ({status, onReset}) => {
	return (
			<div className='game-info'>
				<div>{status}</div>
				<button onClick={onReset}>Reset Game</button>
			</div>
	)
}