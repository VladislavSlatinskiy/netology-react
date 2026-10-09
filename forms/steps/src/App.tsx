import './App.css'
import {type JSX, useState} from "react";
import {Table} from "./components/Table/Table.tsx";
import {Form} from "./components/Form/Form.tsx";
import type {StepItem} from "./declarations/interfaces/step-item.interface.ts";
import type {Uuid} from "./declarations/types/uuid.type.ts";


export function App(): JSX.Element {
    const [selectedItem, setSelectedItem] = useState<StepItem | null>(null);
    const [steps, setSteps] = useState<StepItem[]>([]);
    const [resetCounter, setResetCounter] = useState(0);

    const sortByDate: (a: StepItem, b: StepItem) => number = (a: StepItem, b: StepItem): number => b.date.localeCompare(a.date)

    const handleEdit: (editedItem: Partial<StepItem>) => void = (editedItem: Partial<StepItem>): void => {
        setSteps((prevStepItems: StepItem[]): StepItem[] => {
            return (editedItem.id !== undefined
                ? prevStepItems.map((stateItem: StepItem) =>
                    (stateItem.id === editedItem.id ? {...stateItem, ...editedItem} : stateItem))
                : [...prevStepItems, {
                    id: crypto.randomUUID(),
                    date: editedItem.date ?? '',
                    distance: editedItem.distance ?? 0
                }]).sort(sortByDate);
        })

        setSelectedItem(null);
        setResetCounter((prev: number): number => prev + 1);
    }

    const handleDelete: (id: Uuid) => void = (deletedId: Uuid): void => {
        setSteps((prevStepItems: StepItem[]) => prevStepItems.filter(({id}: StepItem) => id !== deletedId))
    }

    const handleSelectItem: (id: Uuid) => void = (selectedId: Uuid): void => {
        setSelectedItem(steps.find(({id}: StepItem) => id === selectedId) ?? null)
    }

    return (
        <div className="app">
            <Form key={`${selectedItem?.id ?? 'new'}${resetCounter}`} stepItem={selectedItem} onChange={handleEdit}/>

            <Table stepList={steps} onDelete={handleDelete} onEdit={handleSelectItem}/>
        </div>
    )
}