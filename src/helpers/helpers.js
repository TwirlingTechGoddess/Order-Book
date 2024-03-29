export const organizeBids = orders => {
  const bidsArray = [];
  var bids = orders.filter(order => order.type === 'bid');
  var bidsSortedByVolume = bids.map(order => order.volume ).sort((a, b) => b - a); 
    bidsSortedByVolume.forEach((num) => orders.forEach((order) => {
      if(num === order.volume && order.type === "bid") {
        order['total']=(order.volume*order.price).toFixed(5);
        order['closed']=false;
        order['key'] = Math.random() * Date.now()/2;
        order.id = Math.random() * Date.now()/2;
        bidsArray.push(order);
      }
    }))
  return bidsArray
}

export const  organizeAsks = orders => {
  const asksArray = [];
  var asks = orders.filter(order => order.type === 'ask');
  var asksSortedByVolume = asks.map(order => order.volume ).sort((a, b) => a - b);
    asksSortedByVolume.forEach((num) => orders.forEach((order) => {
      if(num === order.volume && order.type ==="ask") {
        order['total']=(order.volume*order.price).toFixed(5);
        order['closed']=false;
        order['key'] = Math.random() * Date.now()/2;
        order.id = Math.random() * Date.now()/2;
        asksArray.push(order);
      }
    }))
  return asksArray
}