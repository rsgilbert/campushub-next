import Link from 'next/link'
import Form from "./Form"
import FormItem from "./FormItem"
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { saveToken } from './utils'
import DangerAlert from './DangerAlert'

const LoginForm = () => {
    let [showDangerAlert, setShowDangerAlert] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [LoginMutation] = useMutation(LOGIN_MUTATION, {
        onCompleted: data => {
            saveToken(data.login.token)
            location.href = "/"
        },
        onError: error => {
            setShowDangerAlert(true)
            // console.log("Error: " + error)
        }
    })

    const handleSubmit = event => {
        event.preventDefault()
        LoginMutation({
            variables: { email, password }
        })
    }

    return (   
        <>
            { showDangerAlert && 
                <DangerAlert 
                    message = "Invalid credentials" 
                    />
            }
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
        </>
    )
} 
const LOGIN_MUTATION = gql`
    mutation LoginMutation (
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