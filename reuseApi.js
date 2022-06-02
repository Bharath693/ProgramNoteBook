const getOptions = () => {
    options1 = {
      headers: {
        amc_key: configData.amcKey,
        token: sessionStorage.getItem("user"),
      },
    };
    return options1;
  };

  const postApiEncrpCalling = (url, postObj) => {
    setGlobalSpinner(true);
    // console.log(options1);
    let options1 = getOptions();

    var encPostObjt = { data: encryption(postObj) };

    return new Promise((resolve, reject) => {
      axios
        .post(
          `${configData.baseURL[configData.ENV]}${url}`,
          encPostObjt,
          options1
        )
        .then((response) => {
          setGlobalSpinner(false);
          if (response.data.data) {
            var res = decryption(response.data.data);
            resolve(res);
          } else {
            resolve(response.data);
          }
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.status);

          if (err.response.status === 401) {
            dispatch(userActions.logout());
            setGlobalSpinner(false);
            history.push("/");
            setNotifi({
              val: true,
              msg: (
                <div>
                  <h3>Oops! Session Expired</h3>
                  <h5>Session remains active only for 15 minutes.</h5>
                  <h6>Please try to login again</h6>
                </div>
              ),
            });
          } else {
            reject(err);
            setGlobalSpinner(false);
          }
        });
    });
  };

  const encryption = (body) => {
    console.log(
      CryptoJS.AES.encrypt(
        JSON.stringify(body),
        "COREAPIV012021NDRS"
      ).toString()
    );
    return CryptoJS.AES.encrypt(
      JSON.stringify(body),
      "COREAPIV012021NDRS"
    ).toString();
  };
  const decryption = (body) => {
    const Bytes = CryptoJS.AES.decrypt(body, "COREAPIV012021NDRS");
    return JSON.parse(Bytes.toString(CryptoJS.enc.Utf8));
  };