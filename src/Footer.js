import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Footer extends React.Component {
    render() {

        return (<footer class="page-footer" style={{marginTop:"2em" , backgroundColor:"grey" , color:"white"}}>
            <div class="container" >
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12">
                        <br/>
                        <h6 class="text-uppercase font-weight-bold">Information about this App</h6>
                        <p>Just Trying to learn React here..... :)
                        </p>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <br/>
                        <h6 class="text-uppercase font-weight-bold">Communicate with me</h6>
                        <p>
                            <br /><i class="fa fa-envelope-o" aria-hidden="true"></i> tsoufis.thodoris@gmail.com
                
                        </p>
                    </div>
                </div>
                <div class="footer-copyright text-center">© 2021 Copyright: thoTsou </div>
            </div>
        </footer>);
    }
}

export default Footer;