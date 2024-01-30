import gpl from "graphql-tag";

export const LOGIN_USER = gpl`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}`;

export const ADD_USER = gpl` 
mutation addUser($username: String!, $email: $String!, $password: $String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}`;

export const SAVE_BOOK = gpl`
mutation saveBook($book: SavedBookInput!) {
    saveBook(book: $book) {
        username
        email
        bookCount
        savedBooks {
            authors
            description
            bookId
            image
            link
            title
        }
    }
}`;

export const REMOVE_BOOK =gpl`
mutation removeBook($bookId: String) {
    removeBook(bookId: $bookId) {
        username
        email
        bookCount
        savedBooks {
            authors
            description
            bookId
            image
            link
            title
        }
    }
}`;