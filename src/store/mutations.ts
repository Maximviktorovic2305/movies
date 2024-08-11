import { MovieProps } from '../types'

export function setMovies(state: any, movies: MovieProps[]) {
	state.movies = [...movies] || []
}

export function setLoading(state: any, isLoading: boolean) {
	state.loading = isLoading
}

export function setSortByName(state: any, sortByName: boolean) {
	state.sortByName = sortByName

}
export function setSortByYear(state: any, sortByYear: boolean) {
	state.sortByYear = sortByYear
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
