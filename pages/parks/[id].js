import Layout from '../../components/Layout'
import ImageList from '../../components/ImageList'
import Carousel from '../../components/Carousel'
import { useRouter } from 'next/router'
import Title from '../../components/Title'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'




export default function Park() {
    const router = useRouter()
    const id = router.query.id
    return (
        <Layout parkId={id}>
            <Query query={PARK_QUERY} variables={ { id } }>
            {({ loading, error, data }) => {
                // if(loading) return <div>Fetching</div>
                // if(error) throw error
                // const park = data.park                
                return (
                    <>
                        {/* <Title title={park.name} />  */}
                        <Carousel />
                        {/* <ImageList />
                        <div>
                            Managed by: {park.manager.name}
                        </div>                   
                        <div>
                            Located at: { park.location.place }
                        </div> */}
                    </>
                )
            }}
            </Query>
        </Layout>
    )
}


const PARK_QUERY = gql`
    query ($id: ID!)  {
        park(id: $id) {
            id,
            name,
            manager {
                name
            },
            location {
                place
            }
        }
    }
`;
