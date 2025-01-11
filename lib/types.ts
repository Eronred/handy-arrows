export type Category = "Arrows" | "Doodles" | "Infographic" | "Illustrations" | "Underlines";

export interface ResourceCollection {
    id: string;
    svg: string;
    category: Category;
}
