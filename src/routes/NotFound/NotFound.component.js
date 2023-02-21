import { Link } from "react-router-dom"
import { NotFoundContainer } from "./NotFound.style";

const NotFound = () => {

    return (
        <NotFoundContainer>
            <h1>404 - Nie znaleziono</h1>
            <p>Powrót do <Link to={'/'}>strony głównej</Link> </p>
        </NotFoundContainer>
    )
}

export default NotFound;