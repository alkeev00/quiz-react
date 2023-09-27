import React from 'react'
import classes from './Result.module.scss'

const Result = ({ correct, numberQuestions, time }) => {
	const percentCorrect = Math.round((correct / numberQuestions) * 100)
	return (
		<div className={classes.result}>
			<h2 className={classes.title}>Quiz results</h2>
			<div className={classes.resultWrapper}>
				<div className={classes.percent}>
					<span>{percentCorrect}% correct</span>
				</div>
				<div className={classes.score}>
					Score:{' '}
					<span>
						{correct} of {numberQuestions}
					</span>
				</div>
				<a className={classes.restart} href='/'>
					try again
				</a>
			</div>
		</div>
	)
}

export default Result
