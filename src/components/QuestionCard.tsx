import React from 'react';
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "../Styles/QuestionCard.styles";
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
    setState: () => void;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions,setState }) => {
    if (!question) {
        return (
            <div>
                <button className="start" onClick={() => { setState() }}>Back To Start</button>
                <h3>Sorry, No Questions Found</h3>
            </div>
        )
    } else {
        return (
            <Wrapper>
                <p className="number">
                    Question: {questionNr} / {totalQuestions}
                </p>
                <p dangerouslySetInnerHTML={{ __html: question }} />
                <div>
                    {answers.map(answer => {
                        return (
                            <ButtonWrapper
                                correct={userAnswer?.correctAnswer === answer}
                                userClicked={userAnswer?.answer === answer}
                                key={answer}
                            >
                                <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                                </button>
                            </ButtonWrapper>
                        )
                    })}
                </div>
            </Wrapper>
        )
    }
}

export default QuestionCard;