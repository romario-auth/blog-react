import './DropDown.css'

const DropDown = (props) => {

    return (
        <div className="drop-down">
            <label>{props.label}: </label>
            <select>
                {props.language.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown