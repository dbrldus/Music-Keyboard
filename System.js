var nightMode = 0;

function KeyboardChange(value) {
  if (value == 0) {
    var obj = document.getElementById("key_video");
    obj.removeChild(obj.firstChild);
  } else if (value == "큐센 DT-35") {
    KVEmbedGenerator("https://www.youtube.com/watch?v=5lP8gEoAsXI&t=304s");
  } else if (value == "게이트론 흑축") {
    KVEmbedGenerator(
      "https://www.youtube.com/watch?v=172wFLrHt1s&list=PLLVb0J9zy4wRDSldgp60MZNjrA5_0K1Cj&index=6&t=301s"
    );
  } else if (value == "아트박스 적축") {
    KVEmbedGenerator(
      "https://www.youtube.com/watch?v=87fiajvpszo&list=PLLVb0J9zy4wRDSldgp60MZNjrA5_0K1Cj&index=4"
    );
  } else if (value == "체리 MX 적축") {
    KVEmbedGenerator(
      "https://www.youtube.com/watch?v=r_AXYzpeb6I&list=PLLVb0J9zy4wRDSldgp60MZNjrA5_0K1Cj&index=1"
    );
  } else if (value == "앱코 K990 V3") {
    KVEmbedGenerator(
      "https://www.youtube.com/watch?v=-Sl9Pl1iUQY&list=PLLVb0J9zy4wRDSldgp60MZNjrA5_0K1Cj&index=6"
    );
  }
}

function SongChange(value) {
  if (value == 0) {
    var obj = document.getElementById("music_video");
    obj.removeChild(obj.firstChild);
  }
  //메이플 브금//////////////////
  else if (value == "흩어진 시간") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=tbLEFclErGI&list=PLLVb0J9zy4wQpjdVeTVwrkQSn-jCmn4Kl&index=2&t=0s"
    );
  }
  //어비스 테마//////////////////
  else if (value == "어비스 웨이브") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=hPMOU2xWIEw&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=104"
    );
  } else if (value == "심해의 지배자") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=h-QPMCY0TtI&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=105"
    );
  } else if (value == "꿈꾸는 소녀") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=_G0wzTU4N0M&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=106"
    );
  } else if (value == "너울대는 파도처럼") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=jiY9ema6Rfc&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=107"
    );
  } else if (value == "바다 사나이 머맨") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=R3kF-6mRzgU&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=108"
    );
  }
  //듣기 좋은 곡//////////////////
  else if (value == "대륙의 붉은 비트") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=Bc0opYUt_cE&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=56"
    );
  }else if (value == "대저택 댄스 배틀") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=1c6cGpwaHwI&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=59"
    );
  }else if (value == "겨울에는 캐롤") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=-JE_ly29YWs&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=92"
    );
  }else if (value == "배찌 뒹굴뒹굴") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=qtkaEddffTY&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=14"
    );
  }else if (value == "다이아몬드 러쉬") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=iuJKENTG6jc&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=28"
    );
  }else if (value == "기사왕에게 영광 있으라") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=3PDN8Ck-Ibk&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=112"
    );
  }else if (value == "바람보다 자유롭게") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=eWnCCG41F0k&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=97"
    );
  }else if (value == "카르노와 한판 승부") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=WEKcpboU2Po&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=83"
    );
  }else if (value == "타키의 무대") {
    MVEmbedGenerator(
      "https://www.youtube.com/watch?v=3cinlntMsyQ&list=PLVeK14D7Wxr52_r-BJR3HANJiCGkdfFm9&index=32"
    );
  }
}

function VideoVisible() {
  var checkBox = document.getElementById("Visible_CB");
  if (checkBox.checked == true) {
    MediaQuery();
  } else {
    document.getElementById("video").style.display = "none";
  }
}

function MediaQuery() {
  if (document.querySelector("body").scrollWidth > 1847) {
    document.getElementById("video").style.display = "grid";
  } else {
    document.getElementById("video").style.display = "block";
  }
}

function NightModeOnOff(tex) {
  if (tex == "야간 모드 켜기") {
    document.querySelector("body").style.backgroundColor = "#2d3436";

    document.querySelector("h1").style.color = "#bdc3c7";
    document.querySelector("h2").style.color = "#bdc3c7";
    var objs = document.querySelectorAll("label");
    for (step = 0; step < objs.length; step++) {
      objs[step].style.color = "#bdc3c7";
    }

    document.getElementById("NightBtn").value = "야간 모드 끄기";
    nightMode = 1;
  } else {
    document.querySelector("body").style.backgroundColor = "#dfe6e9";

    document.querySelector("h1").style.color = "#2d3436";
    document.querySelector("h2").style.color = "#2d3436";
    var objs = document.querySelectorAll("label");
    for (step = 0; step < objs.length; step++) {
      objs[step].style.color = "#2d3436";
    }
   
    document.getElementById("NightBtn").value = "야간 모드 켜기";
    nightMode = 0;
  }
}

function Conce_On_Clicked() {
  document.getElementById("Non_Conce_View").style.display = "none";
  document.querySelector("body").style.backgroundColor = "#000000";
  //document.querySelector("body").style.border = "none";
  document.getElementById("Conce_View").style.display = "grid";
}

function Conce_Off_Clicked() {
  document.getElementById("Non_Conce_View").style.display = "block";
  //document.querySelector("body").style.borderBottom = "2px solid grey";
  document.getElementById("Conce_View").style.display = "none";
  if (nightMode == 1) {
    NightModeOnOff("야간 모드 켜기");
  } else {
    NightModeOnOff("야간 모드 끄기");
  }
}

function MVEmbedGenerator(ytlink) {
  var id;
  var first_slice = ytlink.indexOf("=");
  var second_slice = ytlink.indexOf("&");
  if (second_slice == -1) {
    id = ytlink.slice(first_slice + 1);
  } else {
    ytlink = ytlink.slice(first_slice + 1);
    second_slice = ytlink.indexOf("&");
    id = ytlink.slice(0, second_slice);
  }

  var link =
    '<iframe width="540" height="315" src="https://www.youtube.com/embed/' +
    id +
    '?autoplay=1;controls=1" frameborder="0"></iframe>';
  document.getElementById("music_video").innerHTML = link;
}

function KVEmbedGenerator(ytlink) {
  var id;
  var first_slice = ytlink.indexOf("=");
  var second_slice = ytlink.indexOf("&");
  if (second_slice == -1) {
    id = ytlink.slice(first_slice + 1);
  } else {
    ytlink = ytlink.slice(first_slice + 1);
    second_slice = ytlink.indexOf("&");
    id = ytlink.slice(0, second_slice);
  }

  var link =
    '<iframe width="540" height="315" src="https://www.youtube.com/embed/' +
    id +
    '?autoplay=1;controls=1;&amp;start=300" frameborder="0"></iframe>';
  document.getElementById("key_video").innerHTML = link;
}