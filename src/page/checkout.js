import { getAll } from "../api/product"

const CheckOut = {
    async render(){
        const { data } = await getAll();
    }
}

export default CheckOut;