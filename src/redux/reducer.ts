import { Reducer, Action } from "redux";

type Seller = {
    name: string,
}

type ShopCartState = {
    total: number,
    products: any,
    seller: Seller
}

const shopcart = {
    total: 10,
    products: [],
    seller: {
        name: 'Magazine Siará',
    }
}

export type GlobalState = {
 count: number;
 shopcart: ShopCartState;
}

type Meta = {
    reducer: Reducer<GlobalState>;
};

export interface GlobalAction extends Action {
    type: string;
    payload?: object;
    meta?: Meta
}

function reducer(state = {
    count: 12,
    shopcart,
}, action: GlobalAction): GlobalState {

    console.log('Reducer', action);
    if (action?.meta?.reducer) {
        return action.meta.reducer(state, action);
    }

    return state;
}

export default reducer;