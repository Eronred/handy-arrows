export type Category = "AI" | "Arrows" | "Doodles" | "Infographic";

export interface ArrowDesign {
    id: string;
    svg: string;
    category: Category;
}
