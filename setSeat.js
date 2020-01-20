var matrix = []

var totalColumn = 6, totalRow = 31;
var price;
var priceFirst = 50, priceSecond = 40, priceThird = 25;
var seatToLocate = 1;
var id = 0;
var firstCycle = true;
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
            "id":id
        }
        matrix.push(seat)
        id++;
    }
}
function s(value) {
    value.id === index
}
matrix.map((item,index) => {
    var res = null
    if(item.price == priceThird){
        if(item.row != "B" && item.row != "E"){
            if(firstCycle){
                res = matrix.filter((value) => {
                    if(value.id === index) {
                        value.occuped = true
                        justOne = false;
                        return value
                    }else{
                        return null
                    }
                })
            }
            console.log(res);
        }
    }
})

//console.log(matrix)


