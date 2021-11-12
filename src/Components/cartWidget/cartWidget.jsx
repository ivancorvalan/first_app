import Cart from "./img/cart_white.png"

function CartWidget(){
    return (
        <div id="menu_secundario" className="nav_secondary">
            <button id="cart" className="button-nav">
                <img alt="img" src= {Cart} width="40px" height="40px" />
            </button>
        </div>
    )
}

export default CartWidget