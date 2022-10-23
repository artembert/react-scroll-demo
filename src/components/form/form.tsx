import React from "react"
import {AnotherFormItem} from "../another-form-item/another-form-item";
import "./form.css"
import {FormField} from "../form-item/form-item";

const fields = Object.entries(
    {
        "name": "Ulla Craft",
        "phone": "(211) 220-4317",
        "email": "a.feugiat@protonmail.net",
        "address": "566-2953 Lorem Road",
        "postalZip": "36061",
        "region": "West Region",
        "country": "Spain",
        "text": "aptent taciti sociosqu ad litora torquent per conubia nostra, per",
        "numberrange": "9",
        "currency": "$48.08",
        "alphanumeric": "VJH17YDR8QE"
    }).map(([key, value]) => ({name: key, label: key, value: value}))


export const Form = () => {
    return (
        <form className="form">
            {fields.slice(0, 1).map(item => (
                <AnotherFormItem key={item.name} {...item}/>
            ))}
            <FormField errorMessage={"Error message"}/>
            {fields.slice(1).map(item => (
                <AnotherFormItem key={item.name} {...item}/>
            ))}
            <div className="form-footer">
                <button className="btn-secondary" type="submit">Submit</button>
            </div>
        </form>
    )
}
