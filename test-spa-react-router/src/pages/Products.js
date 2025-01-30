import {Link} from 'react-router-dom';

const PRODUCTS = [
    {id: 'p1', name: 'Product 1'},
    {id: 'p2', name: 'Product 2'},
    {id: 'p3', name: 'Product 3'},
    {id: 'p4', name: 'Product 4'},
]

export default function Products() {
    return (
        <>
            <h1>Products Page</h1>
            <ul>
                {PRODUCTS.map(prod => <li key={prod.id}><Link to={`/products/${prod.id}`}>{prod.name}</Link></li>)}
            </ul>
        </>
    )
}