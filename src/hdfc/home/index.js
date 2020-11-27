import React, { Component } from 'react'
export class Home extends Component {
    render() {
        return (
            <div className="container">
            <section className="p-3">
                <div className="container" >
                    <div className="row">
                        <div className="col">
                            <div className="card d-flex justify-content-center">
                                <div className="card-header text-black"> 
                                    <h3>Online Mandate Registration</h3>
                                    <h6>Online Mandate Registration is supported by version IE9+ | Chrome  35+| Firefox 35+  | Safari 5+</h6>
                                </div>
                                <div className="card-body d-flex justify-content-center">
                                    <form>
                                        <div className="form-group">
                                            <label >Policy no</label><input type="text" class="form-control" placeholder="policy no" style={{width:200,marginLeft:50}}/>
                                            </div>
                                            <div className="form-group">
                                            <label >Date</label><input type="date" class="form-control" placeholder="Date" style={{width:200,marginLeft:50}}/>
                                            <br></br>
                                            <a href="/Payment" type="button" class="btn btn-primary">Proceed</a>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-black">
                                        <h6>For All Policy Releted Quries Simplechat</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default Home
