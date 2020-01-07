import Layout from "../components/Layout"
import Link from 'next/link'
import Form from "../components/Form"
import FormItem from "../components/FormItem"


const handleSubmit = event => {
    event.preventDefault()
    console.log("submitted")
}

const Header =  (
    <>
        <b>Signup</b>
        <Link href="/login">
            <a>Login</a>
        </Link>
    </>
)

const Signup = () => (
    <Layout>
        <Form
            submitButtonTitle="SIGNUP"
            header={ Header }
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

export default Signup