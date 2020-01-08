import StockItem from './StockItem'
import { gql, useQuery } from '@apollo/client'

import { useQuery, gql } from '@apollo/client'


const StockItems = props => (
    <div
        className="row justify-content-center">
        { 
            props.items.map(
                item => (
                    <StockItem 
                        key = { item.id }
                        item = { item } />
                    )
            )
        }
    </div>
)


export default StockItems