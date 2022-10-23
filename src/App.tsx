import React, {FormEvent, useState} from 'react';
import './App.css';
import {AnotherFormItemMemo} from "./components/another-form-item/another-form-item";
import {FormField} from "./components/form-item/form-item";

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
        if (true) { // ⚠️check if <InputField /> is invalid
            setShouldScrollToElement(true)
        }
    }


    return (
        <div className="App">
            <main className="form-container">
                <h3>Scroll to field form</h3>
                <form className="form" onSubmit={handleSubmit}>
                    {fields.slice(0, 1).map(item => (
                        <AnotherFormItemMemo key={item.name} {...item}/>
                    ))}
                    <FormField errorMessage={"Error message"} shouldScrollToElement={shouldScrollToElement}
                               onScrollToElement={() => setShouldScrollToElement(false)}/>
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
