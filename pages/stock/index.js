import Layout from "../../components/Layout"
import StockItems from "../../components/StockItems"

const Index = () => {

    return (
        <Layout>
            <StockItems items={items} />
        </Layout>
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
        id: '2',
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
        id: '3',
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
        id: '4',
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


export default Index