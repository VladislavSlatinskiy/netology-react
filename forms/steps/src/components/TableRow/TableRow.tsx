import './TableRow.css'
import type {JSX} from "react";
import type {StepItem} from "../../declarations/interfaces/step-item.interface.ts";
import type {Uuid} from "../../declarations/types/uuid.type.ts";

interface Props {
    stepItem: StepItem;
    onEdit: (id: Uuid) => void;
    onDelete: (id: Uuid) => void;
}

function formatDate(isoDate: string): string {
    if (!isoDate) {
        return ''
    }

    const [year, month, day] = isoDate.split('-');
    if (!year || !month || !day) {
        return ''
    }

    return `${day}.${month}.${year.slice(2)}`;
}

export function TableRow({stepItem, onEdit, onDelete}: Props): JSX.Element {
    return (
        <div className="table__row">
            <div className="table__cell">{formatDate(stepItem.date)}</div>
            <div className="table__cell">{stepItem.distance}</div>
            <div className="table__cell">
                <button
                    className="icon-btn icon-btn_edit"
                    type="button"
                    aria-label="Редактировать"
                    onClick={() => onEdit(stepItem.id)}
                >
                    <span className="material-icons">edit</span>
                </button>
                <button
                    className="icon-btn icon-btn_delete"
                    type="button"
                    aria-label="Удалить"
                    onClick={() => onDelete(stepItem.id)}
                >
                    <span className="material-icons">delete</span>
                </button>
            </div>
        </div>
    )
}