import { Carousel } from 'react-responsive-carousel'
import CarouselItem from './CarouselItem'

const MyCarousel = props => (
    <Carousel 
        showThumbs={false} 
        showStatus={false}
        infiniteLoop={true}
        >
        { props.images && props.images.map(image => (
            <CarouselItem
                key={image.id}
                image={image.src}
                />
        ))}
    </Carousel>
)



export default MyCarousel