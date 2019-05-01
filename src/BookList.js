import React from 'react';
import BookDetail from './BookDetail'
import { Link,
        Route} from 'react-router-dom';


const arrayOfBooks = [
    'Pro-React',
    'React-for-Dummies',
    'React-for-Mega-dummies',
    'Incredible-world-of-React',
    'React-for-mere-mortals'
]

function BookList (props) {
    const bookLinks = arrayOfBooks.map(
        book=> (
            <li>
                <Link to={`/${book}`}>{book}</Link>
            </li>
        )
    )
    return(
        <div>
            <h1>Books in Library</h1>
                <ul>{bookLinks}</ul>


                <Route path="/:book" component={BookDetail} />
        </div>

    )
}


export default BookList 