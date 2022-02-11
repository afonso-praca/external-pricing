import type { ExternalPriceResponse } from '../typings/externalPrice'

export async function formatResponse(ctx: Context) {
  const { item } = ctx.body

  const response: ExternalPriceResponse = {
    message: 'Price quoted successfully.',
    item: {
      costPrice: 10,
      price: 20,
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
