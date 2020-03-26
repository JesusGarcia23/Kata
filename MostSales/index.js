function top3(products, amounts, prices) {
    return products.map((product, index) => {
      return { product, index, revenue: prices[index] * amounts[index]}
      })
      .sort((a, b) => b.revenue - a.revenue || a.index - b.index)
      .slice(0,3)
      .map(eachProduct => eachProduct.product)
  }