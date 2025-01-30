<<<<<<< HEAD
import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from 'react-router-dom';
=======
import ErrorMessage from "../errorBoundary/ErrorBoundary";
import { Link } from "react-router-dom";
>>>>>>> 162b86df8f6fb8502380875a9e83bc1015a1f850

const Page404 = () => {
    return (
        <div>
<<<<<<< HEAD
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
=======
            <ErrorMessage>
                <p style={{'textAlign' : 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
                <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to='/'>Back to main page
                </Link>
            </ErrorMessage>
>>>>>>> 162b86df8f6fb8502380875a9e83bc1015a1f850
        </div>
    )
}

<<<<<<< HEAD
export default Page404;
=======
export default Page404
>>>>>>> 162b86df8f6fb8502380875a9e83bc1015a1f850
