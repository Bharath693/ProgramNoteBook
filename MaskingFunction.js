const maskingFunction = (input, ismasked, count) => {
    if (ismasked === true && input !== undefined) {
      if (input.length > 0) {
        let subNum = input
          .toString()
          .substring(input.length - count, input.length);
        let maskedValue = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        let maskeData = maskedValue.substring(1, input.length - count + 1);
        subNum = maskeData + subNum;
        return subNum;
      } else {
        return input;
      }
    } else {
      return input;
    }
  };