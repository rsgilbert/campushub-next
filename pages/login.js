import Layout from "../components/Layout"
import Link from 'next/link'
import Form from "../components/Form"
import FormItem from "../components/FormItem"


const handleSubmit = event => {
    event.preventDefault()
    console.log("submitted")
}

const LoginHeader =  (
    <>
        <b>Login</b>
        <Link href="/signup">
            <a>Signup</a>
        </Link>
    </>
)

const Login = () => (
    <Layout>
        <Form
            submitButtonTitle="LOGIN"
            header={LoginHeader}
            handleSubmit={handleSubmit}
            >
            <FormItem
                label="Email"
                placeholder="Email"
                type="email"/>

            <FormItem
                label="Password"
                placeholder="Password"
                type="password"/>
        </Form>
    </Layout>
)

export default Login