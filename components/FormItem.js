// props: id, label, type(optional), placeholder
import { useState } from 'react'


const FormItem = props => {
    const [value, setValue] = useState()
    const handleChange = event => {
        props.onChange(event.target.value)
    }
        
    return ( 
        <div className="form-group">
            <label htmlFor={ props.label }>
                { props.label }
            </label>
            <input 
                id={ props.label } 
                type={ (props.type && props.type) || 'text' } 
                placeholder={ props.placeholder || props.label }
                className="form-control"
                value={ props.value }
                onChange={ handleChange }
                />
        </div>
    )
}

export default FormItem