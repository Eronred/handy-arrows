export type Category = "Arrows" | "Doodles" | "Infographic" | "Illustrations";

export interface ResourceCollection {
    id: string;
    svg: string;
    category: Category;
}
