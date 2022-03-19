import RadioOption from "../RadioOption"
import './Question.css'

const Question = ({type, id, question, correctAnswer, options}) => {

    return (
        <div className="Question">
            <div className="Question_question">
                <strong>{question}</strong>
            </div>
            <div className="Question_answers">
                {options.map((answer, index) => {
                    return <RadioOption key={`radio_option_${index}`} id={id} name={`quesiton_${id}`} value={`answer_${index}`} label={answer} />
                })}
            </div>
        </div>
    )
}

export default Question