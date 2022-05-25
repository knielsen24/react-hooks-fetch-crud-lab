import React from "react";

function QuestionItem({ question, handleDelete, handleAnswerUpdate }) {
	const { id, prompt, answers, correctIndex } = question;

	const handleDeleteQuestion = () => {
		fetch(`http://localhost:4000/questions/${id}`, {
			method: 'DELETE'
		})
			.then((r) => r.json())
			.then(() => handleDelete(question))
	}

	const handlePatch = (e) => {
		fetch(`http://localhost:4000/questions/${id}`, {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"correctIndex": parseInt(e.target.value)
			})
		})
			.then(r => r.json())
			.then((question) => handleAnswerUpdate(question))
	}

	const options = answers.map((answer, index) => (
		<option key={index} value={index}>
			{answer}
		</option>
	));

	return (
		<li>
			<h4>Question {id}</h4>
			<h5>Prompt: {prompt}</h5>
			<label>
				Correct Answer:
				<select onChange={handlePatch} defaultValue={correctIndex}>{options}</select>
			</label>
			<button onClick={handleDeleteQuestion} >Delete Question</button>
		</li>
	);
}

export default QuestionItem;
