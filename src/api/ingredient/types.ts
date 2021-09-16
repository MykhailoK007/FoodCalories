export interface GetIngredientsResponse {
  id: string;
  name: string;
  description: string;
  picture: string;
  caloriesPer1g: number;
  createdAt: Date;
  createdBy: string;
}
export type AddIngredientRequest = Pick<
  GetIngredientsResponse,
  'name' | 'caloriesPer1g' | 'description' | 'picture'
>;
export type UpdateIngredientRequest = {
  id?: string;
  name: string;
  description: string;
  picture: string;
  caloriesPer1g: number;
  mode: 'edit' | 'new';
};
