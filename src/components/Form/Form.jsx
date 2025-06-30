import { Link } from "react-router"
import "./Form.css"
const Form = ({ title, inputs, textArea, submit, log }) => {
    return (
        <form action="">
            <h1>{title}</h1>
            {
                inputs?.map((input, index) => {
                    return (
                        <div key={index} className="input ">
                            <input type={`${input.type}`} placeholder={`${input.placeholder}`} name={`${input.name}`} />
                        </div>
                    )
                })
            }
            {textArea && 
            <div className="textArea">
                <textarea placeholder={textArea}></textarea>
            </div>}
            {submit && <button type="submit">{submit}</button>}
            {
                log
                &&
                <div className="log">
                    <p>{log.text}</p>
                    <Link to={log.link}>Login here</Link>
                </div>
            }
        </form>
    )
}

export default Form
