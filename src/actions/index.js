export const storeUsername = username => ({
  type: 'STORE_USERNAME',
  username
});

export const storeBalances = balances => ({
  type: 'STORE_BALANCES',
  balances
});

export const storeOrders = orders => ({
  type: 'STORE_ORDERS',
  orders
});

export const storeAsks = asks => ({
  type: 'STORE_ASKS',
  asks
});

export const storeBids = bids => ({
  type: 'STORE_BIDS',
  bids
});

export const updateUser = balances => ({
  type: 'UPDATE_USER',
  balances
})