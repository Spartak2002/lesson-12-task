import React from "react";
import { IContext, IState } from "./types";


export const initialState: IState = {
    products: [
        { id: 101, name: "Philosophy", price: 27000, picture: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744091960/9780744091960_cover.jpg" },
        { id: 102, name: "Psychology", price: 20000, picture: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744098556/9780744098556_cover.jpg" },
        { id: 103, name: "Economics", price: 37000, picture: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780756698270/9780756698270_cover.jpg" },
        { id: 104, name: "Politics", price: 25000, picture: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465402141/9781465402141_cover.jpg" },
        { id: 105, name: "Business", price: 47000, picture: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_3260,h_1678/dk-core-nonprod/9781465415851/9781465415851_cover.jpg" },
        { id: 106, name: "Science", price: 50000, picture: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465419651/9781465419651_cover.jpg" },
        { id: 107, name: "Sociology", price: 65000, picture: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465436504/9781465436504_cover.jpg" },
        { id: 108, name: "Movie", price: 28000, picture: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465437990/9781465437990_cover.jpg" },
    ],
    basket: [],
}

export const AppContext = React.createContext<IContext | undefined>(undefined)