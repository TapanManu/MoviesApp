import Blog from './routes/Blog.svelte'
import Movie from './routes/Movie.svelte'
import PageNotExists from './routes/PageNotExists.svelte'

export default [
	{
		path: '/',
		component: Blog
	},
	{
		path: '/movies/:obj',
		component: Movie
	},
	{
		path: '*',
		component: PageNotExists
	}
]