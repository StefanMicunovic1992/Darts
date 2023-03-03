const valueOfArray = (currentPlayer, id) => {
console.log(currentPlayer)
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
    

    

    // eslint-disable-next-line default-case
    switch (+numberInId) {
      case 15: {
        const resultOfChacking = checkValue(currentPlayer.point15, valueOfId, numberInId) 
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 16: {
        const resultOfChacking = checkValue(currentPlayer.point16, valueOfId, numberInId) 
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 17: {
        console.log('ulazi u 17')
        const resultOfChacking = checkValue(currentPlayer.point17, valueOfId, numberInId) 
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 18: {
        const resultOfChacking = checkValue(currentPlayer.point18, valueOfId, numberInId) 
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 19: {
        const resultOfChacking = checkValue(currentPlayer.point19, valueOfId, numberInId) 
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 20:{
        const resultOfChacking = checkValue(currentPlayer.point20, valueOfId, numberInId)
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 25:{
        const resultOfChacking = checkValue(currentPlayer.bull, valueOfId, numberInId)
        return {
            valueOfId,
            resultOfChacking
        }
      }
      case 50:{
        const resultOfChacking = checkValue(currentPlayer.bull, valueOfId, numberInId)
        return {
            valueOfId,
            resultOfChacking
        }
      }
    }
  } else {
  }
  
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

const checkValue = (valueInStore, valueOfId, numberInId) => {
  
  let hendler;
  
    if(valueInStore >= valueOfId){
      hendler = 'currentPlayer';
      const valueForCurrentPlayer = valueOfId
        return {
          hendler,
          valueForCurrentPlayer
        };
    }else if(valueInStore < valueOfId){
      const valueForCurrentPlayer = numberInId*(valueInStore/numberInId)
        
        if(valueInStore/numberInId === 1){
          const valueForOtherPlayer = valueOfId - numberInId
          
          hendler = 'combined';
          return {
            hendler,
            valueForOtherPlayer,
            valueForCurrentPlayer
          }
        }else if(valueInStore/numberInId === 2){
          const valueForOtherPlayer = valueOfId - (numberInId*2);
          hendler = 'combined';
          return {
            hendler,
            valueForOtherPlayer,
            valueForCurrentPlayer
          }
        }else if(valueInStore/numberInId === 0){
          const valueForOtherPlayer = valueOfId;
          
          hendler = 'otherPlayer'; 
          return{ 
            hendler,
            valueForOtherPlayer
          }
        }
    }
}

export default valueOfArray;
