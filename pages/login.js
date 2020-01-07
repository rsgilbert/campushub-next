import Layout from "../components/Layout"
import Link from 'next/link'

const handleSubmit = event => {
    event.preventDefault()
    console.log("submitted")
}

const Login = () => (
    <Layout>
        <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-12">
                <div className="card bg-light d-flex">
                    <div className="card-header d-flex justify-content-between">
                        <b>Login</b>
                        <Link href="/signup">
                            <a>Signup</a>
                        </Link>
                    </div>
                    <div className="card-body">
                        <form 
                            method="post" 
                            onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    id="email" 
                                    type="email" 
                                    placeholder="Email"
                                    className="form-control"
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    id="password" 
                                    type="password" 
                                    placeholder="Password"
                                    className="form-control"
                                    />
                            </div>
                            <button className="btn btn-block btn-dark">
                                LOGIN
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)


export default Login