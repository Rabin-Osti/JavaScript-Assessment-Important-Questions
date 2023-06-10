class ParkingLot {
  slots = [];
  constructor(slots) {
    for (let i = 0; i < slots; i++) {
      this.slots.push(null);
    }
  }
  park(carId) {
    let leftIndex = this.slots.findIndex((ele) => ele === null);
    if (leftIndex === -1) {
      return false;
    }
    this.slots[leftIndex] = carId;
    return true;
  }
  getSlots() {
    return this.slots;
  }
  remove(carId) {
    let isThere = this.slots.findIndex((ele) => ele === carId);
    if (isThere === -1) return false;
    this.slots[isThere] = null;
    return true;
  }
}
// const newPark = new ParkingLot(3);
// newPark.park("BMW")
// newPark.park("Mercedes")
// newPark.park("Lamborgini")
// newPark.remove("Mercedes")
// console.log(newPark.getSlots())
