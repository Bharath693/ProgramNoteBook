const confirmPayment = async (refNo, bankRef, orderId) => {
    var url = `/payments/confirmPayment`;
    var postObj = {
      appNo: refNo,
      bankRefNo: bankRef,
      upiOrderId: orderId,
      fund: configData.amcCode,
    };
    console.log(postObj);
    const header_options = {
      headers: {
        amc_key: configData.amcKey,
      },
    };
    const result = await postApiEncrpCalling(url, postObj, header_options);
    console.log(result);
  };