// import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/css/font-awesome.min.css'
// "https://ajax.aspnetcdn.com/ajax/bootstrap/4.3.1/css/bootstrap.min.css"
// yarn add apollo-boost graphql react-apollo

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'
import NavBar from './NavBar'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

// fetch('http://localhost:4000/test')
//     .then(jsonData => {
//         console.log(jsonData)
//     })

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
