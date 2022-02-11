import type { ExternalPriceResponse } from '../typings/externalPrice'
import {
  floor
} from 'mathjs'


const getPrice = (skuId: String) => {
  const skuAsInt = Number(skuId)
  if (skuAsInt < 100){
    return skuAsInt * 100
  } else if (skuAsInt >= 100 && skuAsInt < 9999999) {
    return floor(skuAsInt/100)
  } 
  return floor(skuAsInt/9999999)
}

export async function formatResponse(ctx: Context) {
  const { item } = ctx.body

  const response: ExternalPriceResponse = {
    message: 'Price quoted successfully.',
    item: {
      costPrice: 10,
      price: getPrice(item.skuId),
      skuId: item.skuId,
      listPrice: 20,
      priceTables: '',
      priceValidUntil: null,
      index: 0,
    },
  }

  ctx.body = response
  return ctx.status = 200
}
