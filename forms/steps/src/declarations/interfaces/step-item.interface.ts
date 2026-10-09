import type {Uuid} from "../types/uuid.type.ts";

export interface StepItem {
    id: Uuid;
    date: string;
    distance: number;
}