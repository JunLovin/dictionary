import App from './App'
import SearchedWord from '@components/SearchedWord'
import Word from '@components/Word'

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/word/:searchedword',
                element: <SearchedWord/>
            },
            {
                path: '/:word',
                element: <Word/>
            }
        ]
    },
]

export default routes