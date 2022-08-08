import Title from "./Title";
import { Link } from "react-router-dom";

function Checkout() {
  let cartItem = {
    cartItems: [
      {
        id: 5,
        name: "藍梅",
        price: 10,
        image: "blueberry.jpg",
        description: "新鮮藍梅50克，補眼之寶",
        quantity: 3,
      },
      {
        id: 4,
        name: "西瓜",
        price: 20,
        image: "watermelon.jpg",
        description: "新鮮西瓜2公斤，夏季必備",
        quantity: 1,
      },
    ],
  };
  let { cartItems } = cartItem;
  let cartEmpty = cartItems.length <= 0 ? true : false;
  let grandTotal = cartItems.reduce((total, product) => {
    return (total += product.price * product.quantity);
  }, 0);
  const freeShippingPrice = 99;

  return (
    <div>
      <Title mainTitle="你的購物車" />

      {cartEmpty && (
        <div>
          購物車現在沒有商品 <br />
          <Link to="/">去產品頁看看吧</Link>
        </div>
      )}

      {!cartEmpty && (
        <div>
          <div id="cartSection">
            {/* 產品列表 */}
            {cartItems.map((product: any) => (
              <div key={product.id}>
                <img src={process.env.PUBLIC_URL + "/img/" + product.image} />
                {product.name}
                {product.description}
                {product.price}
                購買數量{product.quantity}
              </div>
            ))}
          </div>

          <div id="checkOutSection">
            {/* 價錢總數 */}
            <div>全部貨品總共</div>
            <div>{grandTotal}元</div>

            {
              // 免費送貨
              grandTotal >= freeShippingPrice ? (
                <div>我們免費送貨</div>
              ) : (
                <div>
                  滿${freeShippingPrice}免費送貨
                  <br />
                  還差${freeShippingPrice - grandTotal}
                </div>
              )
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
