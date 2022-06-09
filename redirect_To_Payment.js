const redirectToPayment = async (
    modeOfPayment,
    totalAmount,
    bankNameAccount,
    bankAccountNo,
    invstorName,
    invstorEmail,
    invstorMob,
    successurl,
    failurl,
    refNo,
    bankRef,
    trDate
  ) => {
    if (modeOfPayment === "UPI") {
      displayRazorpay(
        totalAmount,
        bankNameAccount,
        bankAccountNo,
        invstorName,
        invstorEmail,
        invstorMob,
        successurl,
        failurl,
        refNo,
        bankRef,
        trDate
      );
    }
    if (modeOfPayment === "DCB" || modeOfPayment == "Net Banking") {
      displayBilldesk(
        totalAmount,
        bankNameAccount,
        bankAccountNo,
        invstorName,
        invstorEmail,
        invstorMob,
        successurl,
        failurl,
        refNo
      );
    }
    if (modeOfPayment === "KOTM") {
      var url = `/payments/confirmPayment`;
      var postObj = {
        appNo: refNo,
        bankRefNo: null,
        upiOrderId: null,
        fund: configData.amcCode,
      };
      const header_options = {
        headers: {
          amc_key: configData.amcKey,
        },
      };
      const result = await postApiEncrpCalling(url, postObj, header_options);
      console.log(result);
      if (result[0].level1[0].Error_code === "0") {
        history.push({
          pathname: "/" + successurl,
          search: `?refData=${refNo}&trDate=${trDate}`,
        });
      }
    }
  };