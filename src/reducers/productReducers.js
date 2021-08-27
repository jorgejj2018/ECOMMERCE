
const initialState = {
    allProduct:[],
    allProductMen:[],
    allProductWoman:[],
    productDetail:[]
}

export const ProdutosReducers = (state = initialState, action) =>{
    switch (action.type) {
        case "getProduct":
            return {...state, allProduct:action.payload}  
        case "getProductMen":
            return {...state, allProductMen:action.payload}  
        case "getProductWoman":
            return {...state, allProductWoman:action.payload}  
        case"getProductDetail":
            return {...state, productDetail:action.payload}  
        default:
            return state
    }
}