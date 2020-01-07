import { Carousel } from 'react-responsive-carousel'
import CarouselItem from './CarouselItem'

const MyCarousel = props => (
    <>
        <Carousel 
            showThumbs={false} 
            showStatus={false}
            infiniteLoop={true}
            >
            { props.images.map(image => (
                <CarouselItem
                    key={image}
                    image={image}
                    />
            ))}
        </Carousel>
    </>
)



export default MyCarousel