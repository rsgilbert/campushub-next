import Layout from '../../components/Layout'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { useRouter } from 'next/router'
import Order from '../../components/Order'

const Index = () => {
    const router = useRouter()
    const id = router.query.id

    console.log(id)
    return (
        <Layout>
            <Order id={id} />
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
export default Index
