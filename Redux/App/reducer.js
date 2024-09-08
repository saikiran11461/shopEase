import * as types from "./actionTypes";

const init = {
    isLoading: false,
    isError: false,
    menProducts: []
};

export const reducer = (oldState = init, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_MEN_PRODUCTS_REQUEST:
            return {
                ...oldState,
                isLoading: true,
                isError: false,
                menProducts: []
            };
        case types.GET_MEN_PRODUCTS_SUCCESS:
            return {
                ...oldState,
                isLoading: false,
                isError: false,
                menProducts: payload
            };
        case types.GET_MEN_PRODUCTS_FAILURE:
            return {
                ...oldState,
                isLoading: false,
                isError: true,
                menProducts: []
            };
        default:
            return oldState;
    }
};
