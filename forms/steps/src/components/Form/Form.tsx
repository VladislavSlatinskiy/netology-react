import './Form.css'
import {type JSX, type SubmitEvent, useState} from "react";
import type {StepItem} from "../../declarations/interfaces/step-item.interface.ts";

interface Props {
    stepItem: StepItem | null;
    onChange: (stepItem: Partial<StepItem>) => void;
}

export function Form({stepItem, onChange}: Props): JSX.Element {
    const [formData, setFormData] = useState<Partial<StepItem> | null>(stepItem);

    function handleChanges({name, value}: EventTarget & HTMLInputElement): void {
        setFormData((prev: Partial<StepItem> | null) => prev ? {...prev, [name]: value} : {[name]: value});
    }

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        return onChange(formData ?? {})
    }

    return (
        <form className="form" onSubmit={event => handleSubmit(event)}>
            <label className="form__field">
                <span className="form__label">Дата (ДД.ММ.ГГ)</span>
                <input
                    className="form__input"
                    type="date"
                    name="date"
                    value={formData?.date ?? ''}
                    required
                    onChange={event => handleChanges(event.target)}
                />
            </label>

            <label className="form__field">
                <span className="form__label">Пройдено, км</span>
                <input
                    className="form__input"
                    type="number"
                    name="distance"
                    step="0.1"
                    min="0"
                    placeholder="0.0"
                    value={formData?.distance ?? ''}
                    required
                    onChange={event => handleChanges(event.target)}
                />
            </label>

            <button className="form__btn" type="submit">ОК</button>
        </form>
    )
}