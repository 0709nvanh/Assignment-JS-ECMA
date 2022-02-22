import instance from './instance';

export const getAll = () => {
    const url = "/products?_expand=category";
    return instance.get(url)
}

export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const add = (product) => {
    const url = "/products";
    return instance.post(url, product);
}

export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}

export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}
export const search = (keyword)=>{
    const url = `/products?name_like=${keyword}`
    return instance.get(url)
}

// export const sort_ads = {

// }
