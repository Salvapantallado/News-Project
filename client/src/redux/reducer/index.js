const initialState = {
	productCategories: [],
	allProducts: [],
	productDetail: [],
	page: 0,
	setPagination: {
		filter: "",
		valueFilter: "",
		valueFilter2: "",
	},
	favoriteProducts: [],
};

const rootReducer = (state = initialState, action) => {
	// switch (action.type) {
	// 	default: {
	// 		return state;
	// 	}
	// }
};

export default rootReducer;