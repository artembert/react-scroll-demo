import React, {useId, useRef} from "react";
import "./form-item.css"

export const FormField = (props: {
    shouldScrollToElement?: boolean, errorMessage?: string, onScrollToElement?: () => void
}) => {
    const {shouldScrollToElement, errorMessage, onScrollToElement} = props;
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();
    if (shouldScrollToElement) {
        ref?.current?.scrollIntoView();
        onScrollToElement?.();
    }

    return (<div ref={ref} className="form-group">
        <label htmlFor={id} className="text-danger">Unique Input</label>
        <input type="text" id={id} name='unique-input' defaultValue="Invalid field" className="input-block"/>
        {errorMessage ? (<div className="validation-message background-danger">{errorMessage}</div>) : null}
    </div>)
}
