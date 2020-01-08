import Link from 'next/link'
import Form from "./Form"
import FormItem from "./FormItem"
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, data ] = useMutation(LOGIN_MUTATION)

    const handleSubmit = event => {
        event.preventDefault()
        login({ email, password })
        console.log(data)
    }

    return (
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
    )
} 
const LOGIN_MUTATION = gql`
    mutation (
        $email: String!,
        $password: String!,
    )   {
        login (
            email: $email,
            password: $password,
        )   {
            token 
        }
    }
`;

const LoginHeader =  (
    <>
        <b>Login</b>
        <Link href="/signup">
            <a>Signup</a>
        </Link>
    </>
)

export default LoginForm