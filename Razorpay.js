const displayRazorpay = async (
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
    console.log(invstorMob);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const url = `/payments/razorPay/creationOrderId`;
    const header_options = {
      headers: {
        amc_key: configData.amcKey,
      },
    };
    const data = {
      amount: String(totalAmount),
      bank: bankNameAccount,
      accountNumber: bankAccountNo,
    };

    // creating a new order
    const result = await postApiEncrpCalling(url, data, header_options);
    // console.log(result);
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id, currency } = result;

    const options = {
      key: configData.razorpayKey[configData.ENV], // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),

      currency: currency,
      name: "JM FINANCIAL MUTUAL FUND",
      description: "JM FINANCIAL MUTUAL FUND",
      image: { JMFLogo },
      order_id: id,
      handler: async function (response) {
        // console.log(response);
        const dataverfiy = {
          orderCreationId: id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        const url_verify = `/payments/razorPay/verifyPayments`;
        const header_options_verify = {
          headers: {
            amc_key: configData.amcKey,
          },
        };
        const resultverify = await postApiEncrpCalling(
          url_verify,
          dataverfiy,
          header_options_verify
        );

        // console.log(resultverify);
        if (resultverify.razorpayPaymentId) {
          await confirmPayment(refNo, resultverify.razorpayPaymentId, id).then(
            () => {
              history.push({
                pathname: "/" + successurl,
                search: `?refData=${refNo}&trDate=${trDate}`,
              });
            }
          );
        } else {
          history.push("/" + failurl);
        }
      },
      prefill: {
        name: invstorName,
        email: invstorEmail,
        contact: invstorMob,
      },

      theme: {
        color: "#003974",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    return <></>;
  };