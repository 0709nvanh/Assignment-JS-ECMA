import { get } from "../../../api/product"

const UpdateProduct = {
    async render(id){
        const { data } = await get(id)
    }
}
