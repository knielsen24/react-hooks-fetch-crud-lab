import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionsData, handleDelete, handleAnswerUpdate }) {

	const displayQuestions = questionsData.map(question => {
		return (
			<QuestionItem
				handleAnswerUpdate={handleAnswerUpdate}
				handleDelete={handleDelete}
				key={question.id}
				question={question}
			/>
		)
	})

	return (
		<section>
			<h1>Quiz Questions</h1>
			<ul>{displayQuestions}</ul>
		</section>
	);
}

export default QuestionList;
