const displayBilldesk = async (
    totalAmount,
    bankNameAccount,
    bankAccountNo,
    invstorName,
    invstorEmail,
    invstorMob,
    successurl,
    failurl,
    refNo
  ) => {
    var url = `/payments/billdesk`;
    var postObj = {
      bankAccountNo: bankAccountNo,
      amount: totalAmount,
      bankId: "123",
      currencyType: "INR",
      productId: "DIRECT",
      typeField1: "R",
      typeField2: "F",
      mobileNo: invstorMob,
      investorName: invstorName,
      investorEmail: invstorEmail,
      returnURL: `${
        configData.baseURL[configData.ENV]
      }/payments/billdesk/parseResponse`,
      appRefNo: refNo,
      frontendURL: `${configData.hostURL[configData.ENV]}/${successurl}`,
      frontendFailureURL: `${configData.hostURL[configData.ENV]}/${failurl}`,
    };
    console.log(postObj);
    const header_options = {
      headers: {
        amc_key: configData.amcKey,
      },
    };
    const result = await postApiEncrpCalling(url, postObj, header_options);
    console.log(result);
    if (result) {
      const form = document.createElement("form");
      form.action = result;
      form.name = "billdesk";
      form.method = "post";
      document.body.appendChild(form);
      document.billdesk.submit();
    }
  }