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


// export async function setSortingOption({ commit }: { commit: any }, option: string) {
// 	commit('setActiveSortingOption', option)
// }         









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
