import Layout from "../components/Layout"
import Link from 'next/link'
import Form from "../components/Form"
import FormItem from "../components/FormItem"
import { useState } from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import Router from 'next/link'


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <Layout>
            <Form
                header={ Header }
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
                <Mutation 
                    mutation={SIGNUP_MUTATION}
                    variables = { 
                        { email, password }
                    }
                    onCompleted={ () => {
                        console.log("completed")
                        Router.push('/stock')
                    } }
                    >
                    { signupMutation => (
                        <button
                            onClick={signupMutation}
                            className="btn btn-block btn-dark"
                            > 
                            SIGNUP
                        </button>
                    )}
                </Mutation>
            </Form>
        </Layout>
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
            token,
            user {
                id,
                email
            }   
        }
    }
`;

export default Signup