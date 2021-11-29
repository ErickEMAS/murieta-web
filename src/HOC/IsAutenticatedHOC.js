import { Component } from 'react'
import LoginPage from '../pages/login/login'
import { isAuthenticated } from '../services/auth'

function IsAutenticatedHOC(WrappedComponent) {
    return class extends Component{
        render() {
            return !isAuthenticated()
            ? <LoginPage/>
            : <WrappedComponent {...this.props}/>
        }
    }
}

export default IsAutenticatedHOC;