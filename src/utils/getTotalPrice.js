const getTotalPrice = (cart)=>{
   const totalPrice = cart.reduce((prevPrice, item)=>{
        return (item[1].amount * item[1].price) + prevPrice
    },0)

    return totalPrice.toFixed(2);
}

export default getTotalPrice;