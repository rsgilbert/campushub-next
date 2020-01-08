// The most beautiful code I have ever written. 10:29PM, 8th Jan 2020
import Item from './Item'
import { gql, useQuery } from '@apollo/client'

const ItemList = props => {
    const { loading, error, data } = useQuery(GET_ITEMS)
    if(loading) {
        return 'Loading'
    }
    if(error) {
        return `Error. ${error.message}`
    }

    return (
        <div
            className="row justify-content-center">
                { data.items.map(item => (
                    <Item 
                        item={item}
                        key={item.id}
                    />
                )) }
        </div>
    )
}

const GET_ITEMS = gql`
    {
        items {
            id
            name
            price
            description
            category
            images {
                id
                src
            }
        }
    }
`

export default ItemList
