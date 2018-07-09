import React, {Component} from 'react';
import InstagramLogin from './insta';
import { Container, Grid, Image} from 'semantic-ui-react'
import logo from '../assets/newlogo.jpg'

  
class Login extends Component{
    constructor(props){
        super(props);
        this.state= {
            login: false,
            token: null
        }
    }
    responseInstagram = (response) => {
        console.log("response:" + response);
        if (response){
            this.props.set_login(response)
        }
    }

    render(){
        return(
            <Container style={{height:"100vh"}}>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column width={12} style={{marginTop:'-20em'}}>
                    <Image src={logo} />
                    <InstagramLogin
                            clientId="78e448daf2b5426da02cbec99d172889"
                            onSuccess={this.responseInstagram}
                            onFailure={this.responseInstagram}
                        >
                            <i class="fab fa-instagram"></i>

                            <span> Login with Instagram</span>
                        </InstagramLogin>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default Login