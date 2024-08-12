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
