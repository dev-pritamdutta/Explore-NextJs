export default function ProductDetails({params} : { params: {productId: string} }){
    return <h1>Product Details of {params.productId}</h1>
}
// This is TypeScript syntax for defining the component’s props.
// params is an object containing a property called productId, which is a string.
// Next.js automatically provides params when using dynamic routes.