import Layout from '../../components/Layout'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { useRouter } from 'next/router'

import Detail from '../../components/Detail'

const Index =  () => {
    const router = useRouter()
    const id = router.query.id

    return (
        <Layout>
            <Detail id={id} item={item} />
        </Layout>
    )
} 
// const Index = () => (
//     <Layout>
//         <Title title="Nearby Parks" />
//         <Query query={PARKS_QUERY}>
//             {({ loading, error, data }) => {
//                 if(loading) return <div>Fetching</div>
//                 if(error) throw error
//                 const parks = data.parks
//                 return (
//                     <>
//                         <ParkList parks={parks} />
//                     </>
//                 )
//             }}
//         </Query>
//     </Layout>
// )

const PARKS_QUERY = gql`
    query {
        parks {
            id,
            name,
            location {
                place
            }    
        }
    }
`;

let item = {
    id: '1',
    name: 'Belt',
    price: 2000,
    images: [
        "/adele.png",
        "/clare.PNG",
        '/me.jpg',
        '/messiah.jpg'
    ]
}

const items = [
    {
        id: '1',
        name: 'Belt',
        price: 2000,
        images: [
            "/adele.png",
            "/clare.PNG",
            '/me.jpg',
            '/messiah.jpg'
        ]
    },
    {
        id: '2',
        name: 'Belt',
        price: 2000,
        images: [
            "/adele.png",
            "/clare.PNG",
            '/me.jpg',
            '/messiah.jpg'
        ]
    },
    {
        id: '3',
        name: 'Belt',
        price: 2000,
        images: [
            "/adele.png",
            "/clare.PNG",
            '/me.jpg',
            '/messiah.jpg'
        ]
    },
    {
        id: '4',
        name: 'Belt',
        price: 2000,
        images: [
            "/adele.png",
            "/clare.PNG",
            '/me.jpg',
            '/messiah.jpg'
        ]
    },
]

export default Index
