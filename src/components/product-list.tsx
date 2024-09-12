import { useContext } from "react"
import { AppContext } from "../context"

export const ProductList = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("error ...")
    }
    const { state, dispatch } = context
    return <div className="row">
        <h3>ProductList</h3>
        {
            state.products.map(product =>
                <div
                    className="col-md-3"
                    key={product.id}
                >
                    <img
                        src={product.picture}
                        style={{ width: 150, height: 150, objectFit: "cover" }}
                    />
                    <h4>{product.name}</h4>
                    <h3>{product.price}</h3>
                    <button  className="btn btn-danger" onClick={() => dispatch({ type: "products/delete", payload: product.id })}>Delete</button>
                    <button className="btn btn-info" onClick={()=>dispatch({type:"product/move",payload:product.id})}>Move</button>
                </div>
            )
        }
    </div>
}