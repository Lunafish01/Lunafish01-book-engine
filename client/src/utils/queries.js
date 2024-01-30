import gpl from "graphql-tag";

export const GET_ME = gpl`
{
    me {
        _id
        username
        email
        bookCount
        savedBoooks {
            bookId
            suthors
            description
            title
            image
            link
        }
    }
}`;
