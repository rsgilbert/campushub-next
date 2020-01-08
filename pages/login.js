import Layout from "../components/Layout"
import Link from 'next/link'
import Form from "../components/Form"
import FormItem from "../components/FormItem"
import { useState } from 'react'

const LoginHeader =  (
    <>
        <b>Login</b>
        <Link href="/signup">
            <a>Signup</a>
        </Link>
    </>
)

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        console.log("submitted")
    }

    return (
        <Layout>
            <Form
                submitButtonTitle="LOGIN"
                header={LoginHeader}
                handleSubmit={handleSubmit}
                >
                <FormItem
                    label="Email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    />
    
                <FormItem
                    label="Password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    />
            </Form>
        </Layout>
    )
} 

export default Login