import Park from './Park'

const ParkList = props => (
    <>
        { props.parks.map(park => (
            <Park 
                key={park.id}
                park={park}
                />
        ))}
    </>
)

export default ParkList
