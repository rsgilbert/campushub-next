import Link from 'next/link'
import Form from "./Form"
import FormItem from "./FormItem"
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

// import Router from 'next/link'


const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signup, data] = useMutation(SIGNUP_MUTATION)

    const handleSubmit = event => {
        event.preventDefault()
        signup({
            variables: { email, password }
        })
        console.log(data)
    }
    return (
        <Form
            header={ Header }
            submitButtonTitle="SIGNUP"
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

const Header =  (
    <>
        <b>Signup</b>
        <Link href="/login">
            <a>Login</a>
        </Link>
    </>
)

const SIGNUP_MUTATION = gql`
    mutation (
        $email: String!,
        $password: String!,
    )   {
        signup (
            email: $email,
            password: $password,
        )   {
            token 
        }
    }
`;

export default SignupForm

/**
 * Legacy
 *  <Mutation 
                    mutation={SIGNUP_MUTATION}
                    variables = { 
                        { email, password }
                    }
                    onCompleted={ () => {
                        console.log("completed")
                        // Router.push('/stock')
                    } }
                    onError = { error => {
                        alert(error)
                        console.log("Error" + error)
                        throw error
                    }}
                    onChange = {() => console.log("change")}
                    onClick = { (event) => {
                        event.preventDefault()
                        console.log("prevented")
                    }}
                    { signupMutation => (
                        <button
                            onClick={signupMutation}
                            className="btn btn-block btn-dark"
                            > 
                            SIGNUP
                        </button>
                    )}
                </Mutation>
 */