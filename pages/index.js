import Layout from '../components/Layout'
import ParkList from '../components/ParkList'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Title from '../components/Title'
import ParkActionBar from '../components/ParksActionBar'
import ParksActionBar from '../components/ParksActionBar'

const Index = () => (
    <Layout>
        <Query query={PARKS_QUERY}>
            {({ loading, error, data }) => {
                if(loading) return <div>Fetching</div>
                if(error) throw error
                const parks = data.parks                
                return (
                    <>
                        <ParksActionBar />
                        <Title title="Nearby Parks" />
                        <ParkList parks={parks} />                       
                    </>                    
                )
            }}
        </Query>

    </Layout>
)

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