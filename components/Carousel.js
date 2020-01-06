// import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import ImageItem from './Image'
const MyCarousel = props => (
    <>
        <link 
            href="/carousel.min.css"
            rel="stylesheet"
            />
        <Carousel showThumbs={false}>
            <div style={{ height:'100px' }}>
                <img src="/adele.png" className="img-fluid" />=
            </div>
            <div>
                <img src="/messiah.jpg" />
            </div>
        </Carousel>
    </>
)

export default MyCarousel