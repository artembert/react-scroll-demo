import React, {FormEvent, useState} from 'react';
import './App.css';
import {AnotherFormItemMemo} from "./components/another-form-item/another-form-item";
import {FormField} from "./components/form-item/form-item";
import {validateFormField} from "./business-logic/validate-form-field";

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

const App = () => {
    const [shouldScrollToElement, setShouldScrollToElement] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // ⚠️complex business logic to check if <InputField /> is invalid
        const isUniqueFieldValid = validateFormField();
        if (!isUniqueFieldValid) {
            emitErrorInFormField();
        }
    }

    const emitErrorInFormField = () => setShouldScrollToElement(true)

    const resetScroll = () => setShouldScrollToElement(false)


    return (
        <div className="App">
            <main className="form-container">
                <h3>Scroll to field form</h3>
                <form className="form" onSubmit={handleSubmit}>
                    {fields.slice(0, 1).map(item => (
                        <AnotherFormItemMemo key={item.name} {...item}/>
                    ))}
                    <FormField errorMessage={"Error message"} shouldScrollToElement={shouldScrollToElement}
                               onScrollToElement={resetScroll}/>
                    {fields.slice(1).map(item => (
                        <AnotherFormItemMemo key={item.name} {...item}/>
                    ))}
                    <div className="form-footer">
                        <button className="btn-secondary" type="submit">Submit</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default App;
