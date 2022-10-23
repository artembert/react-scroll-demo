import React from 'react';
import './App.css';
import {Form} from "./components/form/form";

function App() {
    return (
        <div className="App">
            <main className="form-container">
                <h2>Scrolling form</h2>
                <Form/>
            </main>
        </div>
    );
}

export default App;
