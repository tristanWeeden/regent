import make from '../private/make'

export const regexFn = (left, right) => right.test(left)
export default make(regexFn)
