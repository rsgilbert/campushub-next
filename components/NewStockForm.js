import { gql, useMutation } from '@apollo/client'
import Form from "./Form"
import FormItem from "./FormItem"
import CheckBoxItem from './CheckBoxItem'
import { useState } from 'react'
import DangerAlert from './DangerAlert'


const NewStockForm =  () => {
    const [showDangerAlert, setShowDangerAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [inStock, setInStock] = useState(true)

    const [NewStockItemMutation] = useMutation(NEW_STOCK_ITEM, {
        onCompleted: data => {
            location.href = "/stock"
        },
        onError: error => {
            setShowDangerAlert(true)
            console.log("Error: " + error)
        }
    })
    

    const handleSubmit = event => {
        event.preventDefault()
        NewStockItemMutation({
            variables: { name, price: parseInt(price), category, description, inStock }
        })
    }
    return (
        <>
            { showDangerAlert && 
                <DangerAlert 
                    message = 'Invalid Input' 
                    />
            }
            <Form
                submitButtonTitle="CREATE"
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
        </>
    )
} 


const NEW_STOCK_ITEM = gql`
    mutation NewStockItemMutation(
        $name: String,
        $description: String,
        $price: Int,
        $category: String,
        $inStock: Boolean
    ) {
        newItem (
            name: $name,
            price: $price,
            description: $description,
            category: $category,
            inStock: $inStock
        ) {
            id
            name
            price
            category  
            description       
        }
    }
`;

const Header = (
    <div>New Stock Item</div>
)


export default NewStockForm
