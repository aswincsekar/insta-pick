import React, {Component} from 'react';
import {Container, Menu, Segment, Input} from 'semantic-ui-react';

class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            token: props.token,
            activeItem: "people"
        }
    }

    static getDerivedStateFromProps(props, state){
        return {...state, token:props.token}
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    inputChange = (e, data) => {console.log(data); this.search_by_name(data.value)}

    search_by_name(name){
        const base_url = "https://www.instagram.com/iamsrk/?hl=en&client_id=78e448daf2b5426da02cbec99d172889";
        fetch(base_url)
        .then(data => data.json())
        .then((data) => {console.log(data)});
    }

    render(){
        const {activeItem} = this.state;
        return(
            <Container>
                <Menu pointing secondary>
                <Menu.Item name='people' active={activeItem === 'people'} onClick={this.handleItemClick} />
                {/* <Menu.Item
                    name='queue'
                    active={activeItem === 'queue'}
                    onClick={this.handleItemClick}
                /> */}
                <Menu.Menu position='right'>
                    <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={()=>this.props.logout()}
                    />
                </Menu.Menu>
                </Menu>

                <Segment>
                    <div>Main Page Token : {this.state.token}</div>
                </Segment>

                <Input placeholder='Search in Instagram' fluid onChange={this.inputChange}/>
                
                
            </Container>
            
        )
    }
}

export default Board