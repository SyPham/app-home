export interface Bpfc {
    id: number;
    name: string;
    description: string;
    username: string;
    category: string;
}
export interface BpfcForCreate {
    id: number;
    name: string;
    description: string;
    userId: number;
    categoryId: number;
}
