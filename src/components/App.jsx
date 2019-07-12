import React from 'react';
import Nav from './Nav'
import Hero from "./Hero";
import KegList from './KegList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Customer from './Customer'
import Footer from './Footer'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterKegList: []
        };
        this.handleAddNewKegToList = this.handleAddNewKegToList.bind(this);
    }

    handleAddNewKegToList(newKeg) {
        const newMasterKegList = this.state.masterKegList.slice();
        newMasterKegList.push(newKeg);
        this.setState({newMasterKegList: newMasterKegList})
    }

    render() {
        return(
            <BrowserRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Hero}/>
                        <Container>
                            <Route path='/keglist' component={KegList}/>
                            <Route path='/customer' component={Customer}/>
                        </Container>

                    </Switch>

                </div>
            </BrowserRouter>
        )
    }
}

export default App;
