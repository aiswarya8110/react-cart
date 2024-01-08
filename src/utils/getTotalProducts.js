const getTotalProducts = (cart)=>{
  const productAmount = cart.reduce((prevAmount, item)=>{
        return item[1].amount + prevAmount
    },0)

    return productAmount;
}

export default getTotalProducts;