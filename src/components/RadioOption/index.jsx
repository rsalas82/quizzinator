const RadioOption = ({id, name, value, label}) => {
    return (
        <div>
            <input type="radio" name={name} value={value} />
            <label for={id}>{label}</label>
        </div>
    )
}

export default RadioOption