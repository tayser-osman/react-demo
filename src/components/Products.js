import Product from './Product';

export default function Products() {
    const products = [
        {id: 1, title: 'Sesame', description: 'Sesame is good for health and body. Sudan is number one exporter of sesame.', image: '/123.jpg', link: '/products/sesame'},
        {id: 2, title: 'Peanut', description: 'Peanut is good for health and body. Sudan is number one exporter of peanut.', image: '/123.jpg', link: '/products/peanut'},
        {id: 3, title: 'Cotton', description: 'Cotton is good for body and used in medical and clothes. Sudan is number one exporter of cotton.', image: '/123.jpg', link: '/products/cotton'},
        {id: 4, title: 'Arabic Gum', description: 'Arabic gum is good for health and body and used in medicine. Sudan is number one exporter of arabic gum.', image: '/123.jpg', link: '/products/arabicgum'}
    ];
    return (
        <div>
            {products.map(product => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
}