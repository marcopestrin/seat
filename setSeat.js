var matrix = []

var price, newMatrix = [];
var priceFirst = 50, priceSecond = 40, priceThird = 25;
var seatToLocate = 1;
var id = 0;
createMatrix();
seatToLocate == 1 ? assegnateSeatOnePerson() : null
seatToLocate == 1 ? assegnateSeatOnePerson() : null

function changeInfo ( value, desc ) {
    for (var i in matrix) {
      if (matrix[i].value == value) {
         matrix[i].desc = desc;
         break; //Stop this loop, we found it!
      }
    }
 }

function createMatrix() {
    var totalColumn = 6, totalRow = 15;
    for(var i=0; i<totalRow; i++){
        for(var a=0; a<totalColumn; a++){
            var positionSeat;
            a === 0 ? positionSeat = "A" : null
            a === 1 ? positionSeat = "B" : null
            a === 2 ? positionSeat = "C" : null
            a === 3 ? positionSeat = "D" : null
            a === 4 ? positionSeat = "E" : null
            a === 5 ? positionSeat = "F" : null
            if(i<=5){
                price=priceFirst
            }else if(i > 13 && i < 16){
                price=priceSecond
            }else{
                price=priceThird
            }
            var seat = {
                "row":positionSeat,
                "column":i,
                "price":price,
                "id":id,
                "occuped":false
            }
            matrix.push(seat)
            id++;
        }
    }
}

function assegnateSeatOnePerson(){
    var firstCycle = true;
    matrix.map((item,index) => {
        var res = null
        if(item.price == priceThird){
            if(item.row != "B" && item.row != "E" && !item.occuped){
                if(firstCycle){
                    res = matrix.filter((value) => {
                        if(value.id === index) {
                            value.occuped = true
                            firstCycle = false;
                            return value
                        }else{
                            return null
                        }
                    })
                    changeInfo(index,matrix)
                }
            }
        }
    })
    console.log(matrix)
}