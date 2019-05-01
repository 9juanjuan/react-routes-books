import React from 'react';
const bookDetail = {
    'Pro-React': ['Pro React is an amazing book that you should totally read','Jk Rowling'],
    'React-for-Dummies': ['You probably need this if your name is Antonio','Chris Aquino'],
    'React-for-Mega-dummies': ['React for Mega dummies is something you especially need if you are Seil','Seil Cho'],
    'Incredible-world-of-React': ['New york Times calls this a must read if your name is Rebecca','Antonio Garcia'],
    'React-for-mere-mortals': ['If your name is Chris Aquino, you probably wrote this book','Oakley']




}
function BookDetail({match}) {
    return (
        <div>
            <h1>Title: {match.params.book}</h1>
            <h5> Author: {bookDetail[match.params.book][1]}</h5>
            <p>Description: {bookDetail[match.params.book][0]}</p>
        </div>
    )
}


export default BookDetail;