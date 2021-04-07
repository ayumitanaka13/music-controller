import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import RoomJoinPage from './RoomJoinPage'
import CreateRoomPage from './CreateRoomPage'

const HomePage = () => {
    return (
    <Router>
        <Switch>
            <Route exact path="/"><p>Home page</p></Route>
            <Route path="/join" component={RoomJoinPage}></Route>
            <Route path="/create" component={CreateRoomPage}></Route>
        </Switch>
    </Router>
    )
}

export default HomePage
