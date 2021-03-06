import { shuffleArray } from "../Utils/utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty, category: string) => {
    if (category === "") {
        const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&category=`;
        const data = await (await fetch(endpoint)).json();
        return data.results.map((question: Question) => {
            return ({
                ...question,
                answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
            })
        })
    }
    const endpoint = `http://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=${category}`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => {
        return ({
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        })
    })
}