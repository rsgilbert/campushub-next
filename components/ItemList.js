import Item from './Item'

const ItemList = props => {
    return (
        <div
            className="row justify-content-center">
                { items.map(item => (
                    <Item 
                        item={item}
                        key={item.id}
                    />
                )) }
        </div>
    )
}


const items = [
    {
        id: '1',
        name: 'Belt',
        price: 2000,
        images: [
            "/adele.png",
            "/clare.PNG",
            '/me.jpg',
            '/messiah.jpg'
        ]
    },
    {
        id: 2,
        name: 'Belt',
        price: 2000,
        images: [
            "/adele.png",
            "/clare.PNG",
            '/me.jpg',
            '/messiah.jpg'
        ]
    },
    {
        id: 3,
        name: 'Belt',
        price: 2000,
        images: [
            "/adele.png",
            "/clare.PNG",
            '/me.jpg',
            '/messiah.jpg'
        ]
    },
    {
        id: 4,
        name: 'Belt',
        price: 2000,
        images: [
            "/adele.png",
            "/clare.PNG",
            '/me.jpg',
            '/messiah.jpg'
        ]
    },
]


export default ItemList
