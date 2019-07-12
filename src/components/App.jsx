import React from 'react';
import Nav from './Nav'
import Hero from "./Hero";
import KegList from './KegList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Customer from './Customer'
import Employee from './Employee'
import NewKegListForm from "./NewKegListForm";



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
        this.setState({masterKegList: newMasterKegList})
    }

    render() {
        return(
            <BrowserRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Hero}/>
                        <Container>
                            <Route path='/employee' render={(props) =><Employee onNewKegCreation={this.handleAddNewKegToList} kegList={this.state.masterKegList}/>} />
                            <Route path='/customer' render={(props) =><Customer
                                kegList={this.state.masterKegList} />}/>
                        </Container>

                    </Switch>

                </div>
            </BrowserRouter>
        )
    }
}

export default App;
