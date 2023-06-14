import './Btn.css'

const Btn = (props) => {
    return (<button className={props.className} type={props.type} >
            {props.children}
        </button>
    )
}

export default Btn