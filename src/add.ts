import createMathOperation from '../.internal/createMathOperation'

/**
 * Adds two numbers.
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 */
type AddOperand = "string"|"number"
const add = createMathOperation((augend:AddOperand, addend:AddOperand) => augend + addend, 0)

export default add
