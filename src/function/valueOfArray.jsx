const valueOfArray = (data, id) => {
  if (
    id.indexOf("15") > -1 ||
    id.indexOf("16") > -1 ||
    id.indexOf("17") > -1 ||
    id.indexOf("18") > -1 ||
    id.indexOf("19") > -1 ||
    id.indexOf("20") > -1 ||
    id.indexOf("Bull") > -1 ||
    id.indexOf("Outer") > -1
  ) {
    const numberInId = id.substring(1);
    let valueOfId = valueOfIdFnc(id, numberInId);
    

    console.log(data);

    // eslint-disable-next-line default-case
    switch (+numberInId) {
      case 15: {
        const resultOfChacking = checkValue(data.player[0].point15, valueOfId, numberInId) 
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 16: {
        const resultOfChacking = checkValue(data.player[0].point15, valueOfId, numberInId) 
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 17: {
        const resultOfChacking = checkValue(data.player[0].point15, valueOfId, numberInId) 
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 18: {
        const resultOfChacking = checkValue(data.player[0].point15, valueOfId, numberInId) 
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 19: {
        const resultOfChacking = checkValue(data.player[0].point15, valueOfId, numberInId) 
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 20:{
        const resultOfChacking = checkValue(data.player[0].point20, valueOfId, numberInId)
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 25:{
        const resultOfChacking = checkValue(data.player[0].bull, valueOfId, numberInId)
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 50:{
        const resultOfChacking = checkValue(data.player[0].bull, valueOfId, numberInId)
        return {
            valueOfId,
            resultOfChacking
        }
      }
    }
  } else {
  }
  console.log(data);
};

const valueOfIdFnc = (id, numberInId) => {
  if (id.indexOf("s") > -1) {
    return +numberInId;
  } else if (id.indexOf("d") > -1) {
    return +(numberInId * 2);
  } else if (id.indexOf("t") > -1) {
    return +(numberInId * 3);
  } else if (id.indexOf("b") > -1) {
    return 50;
  } else if (id.indexOf("o") > -1) {
    return 25;
  }
};

const checkValue = (array, valueOfId, numberInId) => {
    if(array >= valueOfId){
        return true
    }else if(array < valueOfId){
        console.log(array - valueOfId)
    }
}

export default valueOfArray;
