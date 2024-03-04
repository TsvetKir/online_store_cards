import ReactDOM from 'react-dom/client';

import { products } from './products';
// import { ProductItem } from './ProductItem';
import { ProductList } from './ProductList';

import './main.css';

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

// TODO: Реализовать компонент ProductList
reactRoot.render(<ProductList products={products} />);
