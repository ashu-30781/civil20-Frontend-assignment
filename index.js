window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://civil20-intern.onrender.com/collections/TopMovers");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const responsedata = JSON.parse(xhr.responseText);
      console.log(Object.keys(responsedata).length);
      let moverType = "";
      let moverRateper = "";
      document.getElementsByClassName("TopMoversCards")[0].innerHTML = "";
      document.getElementsByClassName("PlayerDataContainer")[0].innerHTML = "";

      for (let i = 0; i < Object.keys(responsedata).length; i++) {
        console.log(responsedata[i]);
        console.log(responsedata[i]["type"]);
        if (responsedata[i]["type"] == "filder") {
          moverType =
            "background:url('gloves-removebg-preview.png');background-size:contain;";
          console.log("fos");
        }
        if (responsedata[i]["type"] == "batball") {
          moverType =
            "background:url('batandball-removebg-preview.png');background-size:contain;";
          console.log("fods");
        }
        if (responsedata[i]["type"] == "bat") {
          moverType =
            "background:url('bat-removebg-preview.png');background-size:contain;";
        }
        if (responsedata[i]["isup"]) {
          moverRateper = "moverup'>(+" + responsedata[i]["ratePercen"] + "%)";
        } else {
          moverRateper = "moverdown'>(-" + responsedata[i]["ratePercen"] + "%)";
        }
        console.log(
          responsedata[i]["name"],
          moverType,
          responsedata[i]["team"],
          responsedata[i]["rate"],
          moverRateper
        );
        let st =
          "<div class='MoversCard'><span class='MoverName'>" +
          responsedata[i]["name"] +
          "</span><div class='MoverType' style=" +
          moverType +
          "></div><span class='divider'></span><span class='MoverTeam'>" +
          responsedata[i]["team"] +
          "</span><div class='MoverRate'><span class='MoverCurrentRate'>" +
          responsedata[i]["rate"] +
          "</span><span class='MoverRatePercentage " +
          moverRateper +
          "</span></div>";
        document.getElementsByClassName("TopMoversCards")[0].innerHTML += st;
      }
    }
  };
  xhr.send();
  setTimeout(() => {
    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "https://civil20-intern.onrender.com/collections/AllList");
    xhr2.onreadystatechange = function () {
      if (xhr2.readyState === 4 && xhr2.status === 200) {
        const response = xhr2.responseText;
        console.log(response);
        let playerType = "";
        let playerRateper = "";
        const responsedata = JSON.parse(xhr2.responseText);
        console.log(Object.keys(responsedata).length);
        document.getElementsByClassName("PlayerDataContainer")[0].innerHTML =
          "";
        for (let i = 0; i < Object.keys(responsedata).length; i++) {
          console.log(responsedata[i]);
          console.log(responsedata[i]["type"]);
          if (responsedata[i]["type"] == "filder") {
            playerType =
              "background:url('gloves-removebg-preview.png');background-size:contain;";
            console.log("fos");
          }
          if (responsedata[i]["type"] == "batball") {
            playerType =
              "background:url('batandball-removebg-preview.png');background-size:contain;";
            console.log("fods");
          }
          if (responsedata[i]["type"] == "bat") {
            playerType =
              "background:url('bat-removebg-preview.png');background-size:contain;";
          }
          if (responsedata[i]["isup"]) {
            playerRateper = "moverup'>+" + responsedata[i]["ratePercen"] + "%";
          } else {
            playerRateper =
              "moverdown'>-" + responsedata[i]["ratePercen"] + "%";
          }
          let st =
            "<div class='PlayersData'><span class='PlayerName'>" +
            responsedata[i]["name"] +
            "</span><span class='PlayerRate'>" +
            responsedata[i]["rate"] +
            "</span><span class='PlayerInfo'><span class='PlayerType' style=" +
            playerType +
            "></span><span class='PlayerTeam'>" +
            responsedata[i]["team"] +
            "</span></span><span class='PlayerRatePer " +
            playerRateper +
            "</span></div>";
          document.getElementsByClassName("PlayerDataContainer")[0].innerHTML +=
            st;
        }
      }
    };
    xhr2.send();
  }, 1000);
};
