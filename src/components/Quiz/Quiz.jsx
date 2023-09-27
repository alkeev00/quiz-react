import React from 'react'
import classes from './Quiz.module.scss'

const Quiz = ({
	question,
	variants,
	currentVariant,
	currentQuestion,
	numberQuestions,
}) => {
	return (
		<div className={classes.quiz}>
			<h2 className={classes.title}>quiz</h2>
			<div className={classes.quizWrapper}>
				<div className={classes.statusBar}>
					Question {currentQuestion} / {numberQuestions}
				</div>
				<div className={classes.questionWrapper}>
					<div className={classes.question}>{question.title}</div>
					<ul className={classes.answers}>
						{variants.map((text, index) => (
							<li
								onClick={() => currentVariant(index)}
								className={classes.answer}
								key={text}
							>
								{text}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Quiz
