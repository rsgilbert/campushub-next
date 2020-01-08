import Carousel from './Carousel'
import ActionBar from './ActionBar'
import Icon from './Icon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'

const ItemDetail = props => {
    const router = useRouter()
    const id = router.query.id

    const { loading, error, data } = useQuery(GET_ITEM_BY_ID, {
        variables: { id }
    })
    
    if(loading) {
        return 'Loading'
    }
    if(error) {
        return `Error. ${error.message}`
    }
    const item = data.item
    return (
        <>
            <Carousel 
                images={item.images}
                />
            <div
                className="my-4 pb-4">    
                <h2>{ item.name }</h2>
                <p>{ item.price } shs</p>
                <p>{ item.description }</p>
            </div>            

            <ActionBar>
                <Link
                    href={`/orders/${item.id}`}> 
                    <a>
                        <Icon className="fa-paper-plane"/>
                        <span className="mx-2">
                            Place Order
                        </span>
                    </a>
                </Link>
            </ActionBar>
        </>
    )
}

const GET_ITEM_BY_ID = gql`
    query ItemQuery(
        $id: ID!
    ) {
        item(id: $id) {
            id
            name
            price
            description
            category
            images {
                src
                id
            }
        }
    }
`;

export default ItemDetail