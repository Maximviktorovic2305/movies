import { instanse } from '../api/axiosConfig'

export function getMovies({ commit }: { commit: any }) {
	instanse.get(`movies`).then(({ data }) => {
		commit('setMovies', data.data)
	})
}

export function setSortingOption({ commit }: { commit: any }, option: string) {
	commit('setActiveSortingOption', option)
}         









// export function searchMealsByLetter({ commit }, letter) {
//   axiosClient.get(`search.php?f=${letter}`)
//     .then(({ data }) => {
//       commit('setMealsByLetter', data.meals)
//     })
// }

// export function searchMealsByIngredient({ commit }, ing) {
//   axiosClient.get(`filter.php?i=${ing}`)
//     .then(({ data }) => {
//       commit('setMealsByIngredients', data.meals)
//     })
// }
