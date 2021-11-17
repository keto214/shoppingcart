import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "DAREU EH469 7.1 RGB PINK",
      description:
        "Thương hiệu: DareU",
      price: 440000,
      image:
        "https://product.hstatic.net/1000026716/product/_gvn8888_e6d7b1f9ae3e4d249016d8b2338ceb30.jpg",
    },
    {
      id: 2,
      title: "Tai nghe DareU EH722X 7.1 White",
      description:
        "Thông tin chung: Hãng sản xuất: DareU Tình trạng: Mới Bảo hành: 12 Tháng",
      price: 590000,
      image:
        "https://product.hstatic.net/1000026716/product/gearvn-tai-nghe-dareu-eh722x-7-1-white-666_0d31c9147b02414181cc6394444c96eb.jpg",
    },
    {
      id: 3,
      title: "Tai nghe gaming DareU EH925S Pink RGB",
      description:
        "Thông tin chung: Hãng sản xuất: DareU Tình trạng: Mới Bảo hành: 12 Tháng",
      price: 890000,
      image:
        "https://product.hstatic.net/1000026716/product/gearvn-tai-nghe-gaming-dareu-eh925s-pink-rgb-666_ff9eb8be3df94fc5927285fae3bd1d9a.jpg",
    },
    {
      id: 4,
      title: "Tai nghe Razer Hammerhead PRO V2",
      description:
        "Thông tin chung: Nhà Sản Xuất : Razer Tình Trạng : Mới Bảo Hành : 24 tháng",
      price: 950000,
      image:
        "https://hstatic.net/716/1000026716/1/2016/5-7/3d2d1c331e6247a5a224b20331050de7.png",
    },
    {
      id: 5,
      title: "Tai nghe Rapoo VH710 7.1",
      description:
        "Nhà Sản Xuất : Rapoo · Tình Trạng : Mới 100% - Fullbox · Bảo Hành : 24 tháng · Màu sắc: Đen · RGB Led Backlight · Port: USB Port",
      price: 950000,
      image:
        "https://product.hstatic.net/1000026716/product/1601191696-3920_45d0a4de2fd34a6d8f70a712ac6cfaf5.png",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
