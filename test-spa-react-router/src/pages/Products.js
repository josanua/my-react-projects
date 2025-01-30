import {Link} from 'react-router-dom';

const PRODUCTS = [
    {id: 1, name: 'Product 1'},
    {id: 2, name: 'Product 2'},
    {id: 3, name: 'Product 3'},
    {id: 4, name: 'Product 4'},
]

export default function Products() {
    return (
        <>
            <h1>Products Page</h1>
            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
            </ul>
        </>
    )
}