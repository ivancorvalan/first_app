import Cart from "./img/cart.png"

function cartWidget(){
    return (
        <div id="menu_secundario" className="nav_secondary">
            <button id="cart" className="button-nav">
                <img alt="cartWidget" src= {Cart} width="35px" height="30px" />
                <h1 className="qty-cart">1</h1>
            </button>
        </div>
    )
}

export default cartWidget