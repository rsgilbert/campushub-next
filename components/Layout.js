import { 
    ApolloProvider,
    ApolloClient,
    HttpLink, 
    InMemoryCache    
} from '@apollo/client'
import { setContext } from 'apollo-link-context' // depends on graphql
import fetch from 'isomorphic-unfetch'
import NavBar from './NavBar'
import { AUTH_TOKEN } from '../constants'

const uri = 'https://campushub-server.herokuapp.com/graphql'

const httpLink = new HttpLink({
    uri, fetch
})

// authMiddleware. Sets authorization token on every request
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN)
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

const Layout = props => (
    <ApolloProvider client={client}>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://ajax.aspnetcdn.com/ajax/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link 
            href="/carousel.min.css"
            rel="stylesheet"
            />
        <NavBar/>
        <div className="container pt-2">
            { props.children }
        </div>
    </ApolloProvider>
)

export default Layout
