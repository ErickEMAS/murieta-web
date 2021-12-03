import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { isAuthenticated } from '../services/auth'

function withIsAutenticatedHOC(WrappedComponent) {
    
    return (props) => {
        const history = useHistory();

        useEffect(() => {
            if (!isAuthenticated()) {
                history.push("/login");
            }
        }, []);

        return <WrappedComponent {...props}/>
    }
}

export default withIsAutenticatedHOC;