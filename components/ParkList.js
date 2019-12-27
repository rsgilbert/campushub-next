import React from 'react'
import Park from './Park'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'


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

`
export default function LinkList(props) {
    
    return (        
        <Query query={PARKS_QUERY}>
            {({ loading, error, data }) => {
                if(loading) return <div>Fetching</div>
                if(error) {
                    throw error
                    return <div>Error </div>
                }
                const parks = data.parks                
                return (
                    <div className="container pt-2 text-left">
                        <h3>Nearby Parks</h3>
                        { parks.map(
                            park => <Park 
                                key={park.id}
                                park={park}
                                />
                            ) }                            
                    </div>
                    
                )
            }}
        </Query>
    )
}

const localLinks = [
    {
        id: 1,
        url: "https://prisma.com"
    },
    {
        id: 2,
        url: "https://apollo.com"
    }
]