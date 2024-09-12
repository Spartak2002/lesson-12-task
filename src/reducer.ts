import { IAction, IState } from "./types";

export const Reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case "products/delete":
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
                basket: state.basket.filter(item => item.id != action.payload)
            };

        case "product/move":
            const prod = state.products.find(prod => prod.id === action.payload);

            if (!prod) {
                return state;
            }

            const found = state.basket.find(item => item.id === prod.id);

            if (found) {
                return {
                    ...state,
                    basket: state.basket.map(item =>
                        item.id === prod.id
                            ? { ...item, count: item.count + 1 }
                            : item
                    )
                };
            } else {
                return {
                    ...state,
                    basket: [...state.basket, { ...prod, count: 1 }]
                };
            }
        case "+":
            return {
                ...state,
                basket: state.basket.map((item) =>
                    item.id === action.payload
                        ? { ...item, count: item.count + 1 }
                        : item
                ),
            };

        case "-":
            return {
                ...state,
                basket: state.basket.map((item) =>
                    item.id === action.payload && item.count > 1
                        ? { ...item, count: item.count - 1 }
                        : item
                ),
            };

        case "basket/delete":
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload)
            };

        default:
            return state;
    }
};