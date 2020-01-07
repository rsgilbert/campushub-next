import StockItem from './StockItem'



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