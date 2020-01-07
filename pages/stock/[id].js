import Layout from '../../components/Layout'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { useRouter } from 'next/router'
import Form from "../../components/Form"
import FormItem from "../../components/FormItem"
import CheckBoxItem from '../../components/CheckBoxItem'
import { useState } from 'react'
import Link from 'next/link'


const UpdateStock =  () => {
    const router = useRouter()
    const id = router.query.id
    const [name, setName] = useState(item.name || '')
    const [price, setPrice] = useState(item.price || '')
    const [category, setCategory] = useState(item.category || '')
    const [description, setDescription] = useState(item.description || '')
    const [inStock, setInStock] = useState(item.inStock || true)

    const handleSubmit = event => {
        event.preventDefault()
        console.log("submitted")
    }

    const Header = (
        <>
            <b>Details</b>
            <Link href={`/images/${id}`}>
                <a>Images</a>
            </Link>
        </>
    )

    return (
        <Layout>
            <Form
                submitButtonTitle="UPDATE"
                header={ Header }
                handleSubmit={handleSubmit}
                >
                <FormItem
                    label="Name"
                    placeholder="eg. brown leather belt"
                    value={name}
                    onChange={setName}
                    />                    

                <FormItem
                    label="Price"
                    type="number"
                    placeholder="eg. 1500"
                    value={price}
                    onChange={setPrice}
                    />

                <FormItem
                    label="Category"
                    placeholder="eg. belts"
                    value={category}
                    onChange={setCategory}
                    />
                <FormItem
                    label="Description"
                    placeholder="eg. 2m long"
                    value={description}
                    onChange={setDescription}
                    />
                <CheckBoxItem 
                    label="In Stock" 
                    checked={inStock}
                    onChange={setInStock}
                    />
            </Form>
        </Layout>
    )
} 









let item = {
    id: '1',
    name: 'Belt',
    price: 2000,
    description: "Halelujah",
    inStock: true,
    images: [
        "/adele.png",
        "/clare.PNG",
        '/me.jpg',
        '/messiah.jpg'
    ]

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

export default UpdateStock
