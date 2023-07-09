import './DropDown.css'

const DropDown = (props) => {

    return (
        <div className="drop-down">
            <label>{props.label}: </label>
            <select onChange={event => props.onChange(event.target.value)} value={props.value} required={props.requiredField}>
                {props.language.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown