export const changeAmount = (item, newAmount) => ({
    type: 'cart/changeAmount',
    payload: { item, newAmount }
})