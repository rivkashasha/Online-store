export const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products/category/mobile-accessories');
    const result = await response.json();
    return result.products;
};
export const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    return result;
};