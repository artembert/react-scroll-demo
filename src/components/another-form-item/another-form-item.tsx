import {useId} from "react";
import "./another-form-item.css"

export const AnotherFormItem = (props: { name: string, label: string, value: string }) => {
    const {name, label, value} = props;
    const id = useId();

    return (<div className="form-group">
        <label htmlFor={id} className="label">{label}</label>
        <input type="text" id={id} name={name} defaultValue={value} className="input-block"/>
    </div>)
}
