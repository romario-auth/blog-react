import './DropDown.css'

const DropDown = (props) => {

    //const handleChangePostLanguage = event => {
    //    props.setPostLanguage(event.target.value)
    //}

    return (
        <div className="drop-down">
            <label>{props.label}: </label>
            <select onChange={event => props.aoAlterado(event.target.value)} value={props.value} required={props.requiredField}>
                {props.language.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown