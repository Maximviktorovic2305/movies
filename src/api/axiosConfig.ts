import axios from 'axios'

export const instanse = axios.create({
	// baseURL: 'http://85.143.216.62:9000/api/',
	baseURL: 'http://localhost:9000/api/',
})
