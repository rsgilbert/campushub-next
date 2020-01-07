

const CarouselItem = props => {
    return (
        <div
            style={ imageStyle(props.image) }>   
        </div>
    )
}


const imageStyle = image => ({
    backgroundSize: 'cover',
    height: 344,
    overflow: 'hidden',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
})

export default CarouselItem
