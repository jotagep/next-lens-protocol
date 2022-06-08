import { createClient } from 'urql'
import { API_GRAPHQL_URL } from '../config/constants'

export const client = createClient({
  url: API_GRAPHQL_URL
})