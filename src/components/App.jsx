import React from 'react';
import Nav from './Nav'
import Hero from "./Hero";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Customer from './Customer'
import Employee from './Employee'
import beer2 from './assets/beer2.jpg'
import beer3 from './assets/beer3.jpg'




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterKegList: [],

        };
        this.handleAddNewKegToList = this.handleAddNewKegToList.bind(this);

    }

    handleAddNewKegToList(newKeg) {
        const newMasterKegList = this.state.masterKegList.slice();
        newMasterKegList.push(newKeg);
        this.setState({masterKegList: newMasterKegList})
    };


    render() {
        return(
            <BrowserRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Hero}/>
                        <Container>
                            <Route path='/employee' render={() =><Employee onNewKegCreation={this.handleAddNewKegToList} kegList={this.state.masterKegList}/>} />
                            <Route path='/customer' render={() =><Customer kegList={this.state.masterKegList} />}/>
                        </Container>

                    </Switch>

                </div>
            </BrowserRouter>
        )
    }
}

export default App;
