import type { ClientsConfig } from '@vtex/api'
import { LRUCache, method, Service } from '@vtex/api'

import { Clients } from './clients'
import { validate } from './handlers/validate'
import { formatResponse } from './handlers/formatResponse'

const TIMEOUT_MS = 800
const memoryCache = new LRUCache<string, never>({ max: 5000 })

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    status: {
      memoryCache,
    },
  },
}

export default new Service({
  clients,
  routes: {
    price: method({
      POST: [validate, formatResponse],
    }),
  },
})
