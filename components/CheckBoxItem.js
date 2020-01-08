
const CheckBoxItem = props => {
    const handleChange = event => {
        props.onChange(event.target.checked)
    }
    return (
        <div className="custom-control custom-checkbox py-1">
            <input 
                className="custom-control-input" 
                type="checkbox"
                checked={ props.checked }
                id="checkbox-item"
                onChange={ handleChange }
                />
            <label
                className="custom-control-label" 
                htmlFor="checkbox-item">
                    { props.label }
                </label>
        </div>
    )
}

export default CheckBoxItem