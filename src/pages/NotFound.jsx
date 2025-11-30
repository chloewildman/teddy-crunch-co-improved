import { Link } from 'react-router-dom';

function NotFound() {
    return(
        <div>
            <p>Sorry, we're having a hard time locating that page. Trying going back to <Link to="/">Home</Link>.</p>
        </div>
    )
}

export default NotFound;