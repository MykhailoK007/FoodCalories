export interface GetIngredientsResponse {
  id: string;
  name: string;
  description: string;
  picture: string;
  caloriesPer1g: number;
  createdAt: Date;
  createdBy: string;
}
export type AddIngredient = Pick<GetIngredientsResponse, 'name' | 'caloriesPer1g' | 'createdBy'>;
