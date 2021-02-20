import { extend } from 'umi-request'

export const base_url = 'https://lightd.matrixages.com/api'

const request = extend({ prefix: base_url })

export default request
