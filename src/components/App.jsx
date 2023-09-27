import React, { useState } from 'react'
import Quiz from './Quiz/Quiz'
import classes from './App.module.scss'
import Result from './Result/Result'
import data from '../data/data'

const App = () => {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const [time, setTime] = useState()
	const questions = data
	const question = data[step]
	const currentQuestion = step + 1
	const numberQuestions = questions.length

	const currentVariant = index => {
		setStep(step + 1)
		if (index === question.correct) {
			setCorrect(correct + 1)
		}
	}

	return (
		<div className={classes.app}>
			{step !== questions.length ? (
				<Quiz
					step={step}
					question={question}
					variants={questions[step].variants}
					currentVariant={currentVariant}
					currentQuestion={currentQuestion}
					numberQuestions={numberQuestions}
				/>
			) : (
				<Result
					correct={correct}
					numberQuestions={numberQuestions}
					time={time}
				/>
			)}
		</div>
	)
}

export default App
