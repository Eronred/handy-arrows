export type Category = "Arrows" | "Doodles" | "Infographic";

export interface ResourceCollection {
    id: string;
    svg: string;
    category: Category;
}
