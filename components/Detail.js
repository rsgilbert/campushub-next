import Carousel from './Carousel'
import ActionBar from './ActionBar'
import Icon from './Icon'
import Link from 'next/link'
import { useRouter } from 'next/router'




const Detail = props => {
    const item = props.item
    const router = useRouter()
    const id = router.query.id
    console.log(id)
    return (
        <>
            <Carousel 
                images={props.item.images}
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




export default Detail