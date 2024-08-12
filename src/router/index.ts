import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../pages/Home.vue'
import MovieDetails from '../pages/MovieDetails.vue'

const routes = [
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{
				path: '/',
				name: 'home',
				component: Home,
			},
			{
				path: '/:id',
				name: 'movieById',
				component: MovieDetails,
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
