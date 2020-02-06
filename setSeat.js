async function go(){
    var matrix = []

    var price, newMatrix = [];
    var priceFirst = 50, priceSecond = 40, priceThird = 25;
    var seatToLocate = 1;
    var id = 0;
    createMatrix();

    await assegnateSeatTwoPerson()
    await seatToLocate == 1 ? assegnateSeatOnePerson() : null
    await seatToLocate == 1 ? assegnateSeatOnePerson() : null
   


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
                    "note": "",
                    "column":positionSeat,
                    "row":i,
                    "price":price,
                    "id":id,
                    "occuped":false
                }
                matrix.push(seat)
                id++;
            }
        }
    }

    async function assegnateSeatOnePerson(){
        try {
            var firstCycle = true;
            var terzaClasseUsufruita = false;
            var secondaClasseUsufruita = false;
            var primaClasseUsufruita = false;

            matrix.map(async(item,index) => {
                var res = null
                if(item.price == priceThird){
                    if(item.column != "B" && item.column != "E" && !item.occuped){
                        terzaClasseUsufruita = true
                        if(firstCycle){
                            res = matrix.filter((value) => {
                                if(value.id === index) {
                                    console.log("index: ",index);

                                    value.occuped = true
                                    value.note = " singolo" + index
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

            if(!terzaClasseUsufruita){
                firstCycle = true
                matrix.map((item,index) => {
                    var res = null
                    if(item.price == priceSecond){
                        if(item.column != "B" && item.column != "E" && !item.occuped){
                            secondaClasseUsufruita = true;
                            if(firstCycle){
                                res = matrix.filter((value) => {
                                    if(value.id === index) {
                                        value.occuped = true
                                        value.note = " singolo" + index
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
            }
            if(!secondaClasseUsufruita && !terzaClasseUsufruita){
                firstCycle = true
                matrix.map((item,index) => {
                    var res = null
                    if(item.price == priceFirst){
                        if(item.column != "B" && item.column != "E" && !item.occuped){
                            primaClasseUsufruita = true;
                            if(firstCycle){
                                res = matrix.filter((value) => {
                                    if(value.id === index) {
                                        value.occuped = true
                                        value.note = " singolo" + index
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
            }
        }catch(e){
            console.log(e)
        }
    }

    function assegnateSeatTwoPerson(){
        var firstCycle = true;
        matrix.map((item,index) => {
            var res = null
            if(item.price == priceThird){
                // i due posti devono essere vicini e non già occupati
                // il posto non deve essere in colonna C e F
                if(!item.occuped && !matrix[index+1].occuped && item.column != "C" && item.column != "F"){
                    if(firstCycle){
                        res = matrix.filter((value) => {
                            if(value.id === index) {
                                matrix[index+1].occuped = true;
                                value.occuped = true;
                                matrix[index+1].note = "coppia "+index;
                                value.note = "coppia "+ index;
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
    }
    function assegnateSeatThreePerson(){
        var firstCycle = true;
        matrix.map((item,index) => {
            var res = null
            if(item.price == priceThird){
                //la riga di posti deve essere metà libera
                if(
                    !item.occuped &&
                    (item.column == "A" || item.column == "D") &&
                    !matrix[index+1].occuped && !matrix[index+2].occuped
                ){
                    if(firstCycle){
                        res = matrix.filter((value) => {
                            if(value.id === index) {
                                matrix[index+1].occuped = true;
                                matrix[index+2].occuped = true;
                                value.occuped = true;
                                matrix[index+1].note = "tris "+index;
                                matrix[index+2].note = "tris "+index;
                                value.note = "tris "+ index;
                                firstCycle = false;
                                return value
                            }else{
                                return null
                            }
                        })
                    }
                }
            }
        })
    }

    console.log(matrix)
}
go()