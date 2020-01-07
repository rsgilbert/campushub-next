const Form = props => (
    <div className="row justify-content-center">
        <div className="col-lg-8 col-sm-12">
            <div className="card bg-light d-flex">
                <div className="card-header d-flex justify-content-between">
                    { props.header }
                </div>
                <div className="card-body">
                    <form 
                        method="post" 
                        onSubmit={props.handleSubmit}>
                        { props.children }
                        <button className="btn btn-block btn-dark">
                            { props.submitButtonTitle }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)


export default Form