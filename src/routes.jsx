import App from './App'
import SearchedWord from '@components/SearchedWord'
import Word from '@components/Word'
import Error from '@components/Error'

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/word/:searchedword',
                element: <SearchedWord/>,
                errorElement: <Error/>
            },
            {
                path: '/:word',
                element: <Word/>,
                errorElement: <Error/>
            }
        ]
    },
]

export default routes