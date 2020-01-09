import StockItem from './StockItem'
import { gql, useQuery } from '@apollo/client'
import Alert from './Alert'
import Link from 'next/link'


const StockItems = props => {
    const { loading, error, data } = useQuery(GET_STOCK)
    if(loading) {
        return 'Loading'
    }
    if(error) {
        return `Error. ${error.message}`
    }
    const items = data.stock
    console.log(data)
    return (
        items.length
        ? 
        <div
            className="row justify-content-center">
            { 
                items.map(
                    item => (
                        <StockItem 
                            key = { item.id }
                            item = { item } />
                        )
                )
            }
        </div>
        :
        (
            <>
                <Alert 
                    type="warning"
                    message="You have no items in stock"
                    />
                <Link href="/stock/new">
                    <a 
                        className="btn btn-block btn-secondary"
                        >
                        Add Items
                    </a>   
                </Link> 
            </>
        ) 
        
    )
}


const GET_STOCK = gql`
    {
        stock {
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
`;

export default StockItems