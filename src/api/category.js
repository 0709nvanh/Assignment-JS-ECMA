import instance from "./instance";

export const getAll = () => {
    const url = "/categories";
    return instance.get(url)
}

export const get = (id) => {
    const url = `/category/${id}`;
    return instance.get(url);
}

export const add = (category) => {
    const url = "/categories";
    return instance.post(url, category);
}
export const remove = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url)
}
export const update = (category) => {
    const url = `/category/${category.id}`;
    return instance.put(url, category);
}

// export const getProduct = (id) => {
//     const url = `/categories/`
// }

