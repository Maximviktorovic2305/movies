export interface CollapseProps {
	duration: string[] | null
}

export interface MovieProps {
	id: number
	title: string
	description: string | null
	year: number
	poster: string
	actors: string[] | null
	directors: string[] | null
	genres: string[]
	collapse: CollapseProps
	frames: string[]
}

export interface SortProps {
	sortByName: boolean
	sortByYear: boolean
}
