import { Link } from "react-router-dom"
import { NotFoundContainer } from "./NotFound.style";

const NotFound = () => {

    return (
        <NotFoundContainer>
            <h1>404 - Not found</h1>
            <p>Back to <Link to={'/'}>home page</Link> </p>
        </NotFoundContainer>
    )
}

export default NotFound;