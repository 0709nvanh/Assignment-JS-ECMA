import axios from "axios"
import { get } from "../api/product"

const DetailProduct = {
    async render(id){
        const { data } = await get(id);
        return /*html*/`
            <div>
                <h1>${data.name}</h1>
            </div>
        `
    }
}
export default DetailProduct;