import Root from "./Root";
import {createBrowserRouter} from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Books from "./components/Books/Books";
import About from "./components/About/About";
import BookDetails from "./components/BookDetails/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'books',
                element: <Books/>,
                loader: () => fetch('https://api.itbook.store/1.0/new'),
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'book/:id',
                element: <BookDetails/>,
                loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
            }
        ]
    }
])