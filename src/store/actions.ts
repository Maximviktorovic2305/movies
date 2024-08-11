import { instanse } from '../api/axiosConfig'

export async function getMovies({ commit }: { commit: any }) {
	commit('setLoading', true)
	try {
		const response = await instanse.get('movies')
		commit('setMovies', response.data.data)
		
	} catch (error) {
		console.log(error)
	} finally {
		commit('setLoading', false)
	}
}   


export function getSortByName({ commit }: { commit: any }, sortByName: boolean) {
	commit('setSortByName', sortByName)
}   

export function getSortByYear({ commit }: { commit: any }, sortByYear: boolean) {
	commit('setSortByYear', sortByYear)
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
