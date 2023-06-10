function processOrderList(orderList, orderId, state) {
  if (state == "Processing") {
    let findIndex = orderList.findIndex((ele) => ele.id === orderId);
    orderList[findIndex].state = "Processing";
    return orderList;
  } else {
    return orderList.filter((ele) => ele.id !== orderId);
  }
}
console.log(
  processOrderList(
    [
      {
        id: 1,
        state: "random",
      },
      {
        id: 2,
        state: "random",
      },
      {
        id: 3,
        state: "random",
      },
    ],
    1,
    "Processing"
  )
);
