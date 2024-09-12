import { useContext } from "react"
import { AppContext } from "../context"

export const Basket = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("No context")
    }
    const { state, dispatch } = context
    return <div className="col-md-4">
        <h3>Basket</h3>
        <table className="table table-dark table-bordered">
            <tbody>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>SubTotal</th>
                    <th>Actions</th>
                </tr>
            </thead>
                {state.basket.map(item =>
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.count}</td>
                        <td>{item.price * item.count}</td>
                        <td>
                            <button onClick={() => dispatch({ type: "+", payload: item.id })}>+</button>
                            <button onClick={() => dispatch({ type: "-", payload: item.id })}>-</button>
                            <button onClick={() => dispatch({ type: "basket/delete", payload: item.id })}>&times;</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}