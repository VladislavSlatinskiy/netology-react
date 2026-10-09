import './Table.css'
import type {JSX} from "react";
import {TableRow} from "../TableRow/TableRow.tsx";
import type {StepItem} from "../../declarations/interfaces/step-item.interface.ts";
import type {Uuid} from "../../declarations/types/uuid.type.ts";

interface Props {
    stepList: StepItem[];
    onEdit: (id: Uuid) => void;
    onDelete: (id: Uuid) => void;
}


export function Table({stepList, onEdit, onDelete}: Props): JSX.Element {
    return (
        <div className="table">
            <div className="table__head">
                <div className="table__cell">Дата (ДД.ММ.ГГ)</div>
                <div className="table__cell">Пройдено, км</div>
                <div className="table__cell">Действия</div>
            </div>

            <div className="table__body">
                {stepList.map((item: StepItem): JSX.Element => (
                    <TableRow key={item.id} stepItem={item} onEdit={onEdit} onDelete={onDelete}/>
                ))}
            </div>
        </div>
    )
}