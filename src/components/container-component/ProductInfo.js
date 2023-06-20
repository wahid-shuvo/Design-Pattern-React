import {useResource} from "../custom-hooks-pattern/useResource";

export const ProductInfo = ({productId}) => {

    const product=useResource(`/products/${productId}`)
    const {name, price, description, rating} = product || {}

    return product ? (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>Description: </h3>
            <p>{description}</p>
            <p>Avergae Rating: {rating} </p>
        </>
    ) : <p> 'Loading ..'</p>
}