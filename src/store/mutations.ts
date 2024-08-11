import { MovieProps } from '../types'

export function setMovies(state: any, movies: MovieProps[]) {
	state.movies = movies || []
}

export function setActiveSortingOption(state: any, option: string) {
	state.activeSortingOption = option
}

// export function setMealsByLetter(state, meals) {
//   state.mealsByLetter = meals || []
// }
// export function setMealsByIngredients(state, meals) {
//   state.mealsByIngredient = meals || []
// }
// export function setIngredient(state, ingredient) {
//   state.ingredient = ingredient
// }
