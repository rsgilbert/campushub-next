import Carousel from './Carousel'
import Link from 'next/link'


const StockItem = props => (
    <div
        className="col-lg-5 col-sm-12
        my-2 px-0 px-lg-2"
        >
        <div className="card">
            <p className="m-1"><b>{props.item.name}</b></p>
            <p className="m-1">{props.item.price} shs</p>
            
            <Carousel 
                images={props.item.images}
                />
                <Link
                    href={`/stock/${props.item.id}`}
                    >
                    <a
                        className=" text-right p-2"
                        >
                        UPDATE
                    </a>
                </Link>
        </div>
    </div>
)

export default StockItem