import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
	const [page, setPage] = useState("List");
	const [questions, setQuestions] = useState([])

	useEffect(() => {
		fetch('http://localhost:4000/questions')
			.then(r => r.json())
			.then(data => setQuestions(data))
	}, [])

	const handleNewQuestion = (newQuestion) => {
		setQuestions([...questions, newQuestion])
	}

	const handleAnswerUpdate = (updatedQuestion) => {
		const updatedQuestions = questions.map(question => {
			return question.id === updatedQuestion.id ? updatedQuestion : question
		})
		setQuestions(updatedQuestions)
	}

	const handleDelete = (deletedItem) => {
		const updatedQuestions = questions.filter(question => question.id !== deletedItem.id)
		console.log(updatedQuestions)
		setQuestions(updatedQuestions)
	}

	return (
		<main>
			<AdminNavBar onChangePage={setPage} />
			{page === "Form" ?
				<QuestionForm handleNewQuestion={handleNewQuestion} />
				:
				<QuestionList
					questionsData={questions}
					handleDelete={handleDelete}
					handleAnswerUpdate={handleAnswerUpdate}
				/>
			}
		</main>
	);
}

export default App;
