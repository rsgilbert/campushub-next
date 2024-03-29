import { gql, useQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import Form from "./Form"
import FormItem from "./FormItem"
import CheckBoxItem from './CheckBoxItem'
import { useState } from 'react'
import Link from 'next/link'


const StockForm =  () => {
    const router = useRouter()
    const id = router.query.id

    console.log('id is ' + id)
    // const [ItemQuery] = 
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [inStock, setInStock] = useState(true)


   
    const { loading, error, data } = useQuery(GET_STOCK_ITEM, {
        variables: { id }
    })
    if(loading) {
        return 'Loading'
    }
    if(error) {
        return `Error. ${error.message}`
    }
    if(data) {
        const item = data.item
        console.log(item)
        // setName(item.name)
        // setPrice(item.price)
        // setCategory(item.category)
        // setDescription(item.description)
        // setInStock(item.inStock)
    }
    

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
    )
} 

const GET_STOCK_ITEM = gql`
    query QueryStockItem(
        $id: ID!
    ) {
        stockItem (
            id: $id
        ) {
            id
            name
            price
            category         
        }
    }
`;




export default StockForm
