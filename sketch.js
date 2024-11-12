let fpsset = 60;
let canv_wid = 1920;
let canv_hei = 1080;
let recordset = true; //録画するか否か
let recording = false;
let bgcolor = 254;

let BPM = 181;

let maincolor = [50, 50, 240];

let isPlaying = false;

let lastTime = 0;
let interval;

const lyrictxt = [
  {
    text: "",
    timing: 0.0,
  },
  {
    text: "新幹線の",
    timing: 2.341,
  },
  {
    text: "スゴイカタイアイス",
    timing: 4.011,
  },
  {
    text: "食べたい",
    timing: 6.17,
  },
  {
    text: "三河安城までカチカチな",
    timing: 7.419,
  },
  {
    text: "カタイアイス食べたい",
    timing: 9.923,
  },
  {
    text: "",
    timing: 13.181,
  },
  {
    text: "わたしのあだ名は",
    timing: 23.341,
  },
  {
    text: "夢の超特急だよ",
    timing: 25.671,
  },
  {
    text: "弾丸列車は",
    timing: 28.669,
  },
  {
    text: "少しばかり",
    timing: 30.168,
  },
  {
    text: "突飛な昔話",
    timing: 31.421,
  },
  {
    text: "かがやく鼻先",
    timing: 33.585,
  },
  {
    text: "風切るパンタグラフ",
    timing: 36.341,
  },
  {
    text: "イザナギ景気の予感！",
    timing: 39.251,
  },
  {
    text: "次はもう名古屋だ",
    timing: 41.175,
  },
  {
    text: "いつしか",
    timing: 45.087,
  },
  {
    text: "わたしたちの",
    timing: 46.257,
  },
  {
    text: "生まれた時代は",
    timing: 47.336,
  },
  {
    text: "遥か彼方",
    timing: 48.756,
  },
  {
    text: "革命もカクエーも",
    timing: 50.592,
  },
  {
    text: "今は昔の話",
    timing: 52.756,
  },
  {
    text: "新幹線の",
    timing: 56.932,
  },
  {
    text: "スゴイカタイアイス",
    timing: 58.684,
  },
  {
    text: "食べたい",
    timing: 60.834,
  },
  {
    text: "スクラップアンドビルドの",
    timing: 62.002,
  },
  {
    text: "列島を",
    timing: 63.186,
  },
  {
    text: "西へ東へ駆けて",
    timing: 64.421,
  },
  {
    text: "今日だけは",
    timing: 66.674,
  },
  {
    text: "新幹線の",
    timing: 67.588,
  },
  {
    text: "スゴイカタイアイス",
    timing: 69.418,
  },
  {
    text: "食べたい",
    timing: 71.269,
  },
  {
    text: "三河安城までカチカチな",
    timing: 72.679,
  },
  {
    text: "カタイアイス食べたい",
    timing: 75.091,
  },
  {
    text: "わたしのあだ名は",
    timing: 79.25,
  },
  {
    text: "夢の超特急だよ",
    timing: 81.835,
  },
  {
    text: "リニア列車は少しばかり",
    timing: 84.668,
  },
  {
    text: "キャッチーなおとぎ話？",
    timing: 87.341,
  },
  {
    text: "夢見る時代も",
    timing: 89.565,
  },
  {
    text: "夢弾ける時代も",
    timing: 92.592,
  },
  {
    text: "静岡大陸を見下ろす富士の山",
    timing: 95.425,
  },
  {
    text: "いつしか",
    timing: 99.482,
  },
  {
    text: "わたしたちの",
    timing: 100.944,
  },
  {
    text: "生まれた理由も",
    timing: 102.003,
  },
  {
    text: "わからなくなった",
    timing: 103.423,
  },
  {
    text: "(それはそれとして)",
    timing: 104.504,
  },
  {
    text: "貞観も宝永も",
    timing: 105.256,
  },
  {
    text: "今は昔の話",
    timing: 107.42,
  },
  {
    text: "新幹線の",
    timing: 111.839,
  },
  {
    text: "スゴイカタイアイス",
    timing: 113.584,
  },
  {
    text: "食べたい",
    timing: 115.651,
  },
  {
    text: "ジャストインタイムの我が国の",
    timing: 116.82,
  },
  {
    text: "ひかりと影を乗せて",
    timing: 119.174,
  },
  {
    text: "今日だけは",
    timing: 121.423,
  },
  {
    text: "新幹線の",
    timing: 122.362,
  },
  {
    text: "スゴイカタイアイス",
    timing: 124.169,
  },
  {
    text: "食べたい",
    timing: 126.167,
  },
  {
    text: "三河安城までカチカチな",
    timing: 127.474,
  },
  {
    text: "カタイアイス食べたい",
    timing: 129.925,
  },
  {
    text: "時代は",
    timing: 133.252,
  },
  {
    text: "わたしたちの",
    timing: 134.418,
  },
  {
    text: "こだまする声をかき消すように！",
    timing: 135.501,
  },
  {
    text: "",
    timing: 138.174,
  },
  {
    text: "昭和も平成も",
    timing: 149.515,
  },
  {
    text: "今は昔の話",
    timing: 151.526,
  },
  {
    text: "新幹線の",
    timing: 155.67,
  },
  {
    text: "すこぶるカタイアイス食べたい",
    timing: 157.522,
  },
  {
    text: "滅ばれざる首都東京の",
    timing: 160.502,
  },
  {
    text: "思い馳せるが儘に！",
    timing: 163.34,
  },
  {
    text: "今日だけは",
    timing: 165.677,
  },
  {
    text: "新幹線の",
    timing: 166.257,
  },
  {
    text: "スゴイカタイアイス",
    timing: 168.175,
  },
  {
    text: "食べたい",
    timing: 170.171,
  },
  {
    text: "忘れたくない日も",
    timing: 171.089,
  },
  {
    text: "つらい日も",
    timing: 172.834,
  },
  {
    text: "過ぎ去ってしまうのならば",
    timing: 174.091,
  },
  {
    text: "今日だけは",
    timing: 176.169,
  },
  {
    text: "新幹線の",
    timing: 177.002,
  },
  {
    text: "スゴイカタイアイス",
    timing: 178.924,
  },
  {
    text: "食べたい",
    timing: 180.952,
  },
  {
    text: "三河安城までカチカチな",
    timing: 182.089,
  },
  {
    text: "カタイアイス食べたい",
    timing: 184.431,
  },
  {
    text: "のぞみある未来を取り戻せ！",
    timing: 187.506,
  },
  {
    text: "カタイアイス食べたい",
    timing: 190.291,
  },
  {
    text: "",
    timing: 192.768,
  },
  {
    text: "今日も",
    timing: 195.002,
  },
  {
    text: "東海道新幹線を",
    timing: 195.423,
  },
  {
    text: "ご利用下さいまして",
    timing: 196.334,
  },
  {
    text: "ありがとうございました",
    timing: 197.309,
  },
  {
    text: "終点東京です",
    timing: 198.254,
  },
  {
    text: "お出口は左側です",
    timing: 199.417,
  },
  {
    text: "うぃーあすとっぴんぐあっと",
    timing: 200.838,
  },
  {
    text: "とーきょーたーみなる",
    timing: 201.668,
  },
  {
    text: "ざ",
    timing: 202.268,
  },
  {
    text: "どあーずおんざ",
    timing: 202.598,
  },
  {
    text: "れふとさいどうぃるおーぷん",
    timing: 203.098,
  },
  {
    text: "",
    timing: 204.018,
  },
];

let sound;
function preload() {
  // 音声ファイルをロード
  sound = loadSound("assets/シンカンセンスゴイカタイアイス.mp3");
}

function setup() {
  //no change
  createCanvas(canv_wid, canv_hei);
  frameRate(fpsset);
  /*
  record(fpsset);
  */
  background(bgcolor);
  fft = new p5.FFT(0.1);

  interval = 60000 / BPM;
  textFont("Noto Sans Jp");
}
let display_switch = true;

let light_sq = 2;
let framecnt = 0;
let startTime = 0;
let timecnt = 0;

function draw() {
  if (isPlaying) {
    background(bgcolor);
    timecnt = (millis() - startTime) / 1000;
    framecnt++;
    if (framecnt > 150) {
      let currentTime = millis();

      if (currentTime - lastTime >= interval) {
        lastTime = currentTime;
        light_sq = (light_sq + 1) % 4; // 0から3までの値を循環
      }
      drawaudio();
      fourSquare();
      DrawDisplay();
      lyricDisplay();
    } else {
      fill(maincolor);
      background(maincolor);
    }
    if (timecnt > 222) {
      isPlaying = false;
      /*
      recorder.stop();
      */
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (!isPlaying) {
      movv();
      /*
      recorder.start();
      */
      isPlaying = true;
      startTime = millis();
      sound.play();
    }
  }
}

window.onload = () => {
  document.getElementById("moviethis").innerHTML = "";
};

function movv() {
  /*
  let popup_video = document.createElement("video");
  popup_video.style.width = "1920px";
  popup_video.style.height = "auto";
  popup_video.style.borderRadius = "20px";
  popup_video.controls = true;
  let sourceMp4 = document.createElement("source");
  sourceMp4.src = "assets/movie.mp4";
  sourceMp4.type = "video/mp4";
  popup_video.appendChild(sourceMp4);
  popup_video.appendChild(
    document.createTextNode("このブラウザでは動画を再生できません。")
  );
  document.getElementById("moviethis").appendChild(popup_video);
  popup_video.play();
  popup_video.volume = 0.0;
  popup_video.style.display = "none";
  */
}

function fourSquare() {
  textAlign(LEFT);
  strokeWeight(2);
  stroke(maincolor);
  fill(0, 0, 0, 0);
  for (let i = 0; i < 4; i++) {
    square(72 * i + 48, canv_hei - 80, 48);
    if (i % 2 == 1) {
      line(72 * i + 48, canv_hei - 80, 72 * i + 96, canv_hei - 32);
    }
  }
  fill(maincolor);
  square(72 * light_sq + 48, canv_hei - 80, 48);
  line(48, canv_hei - 96, 256 + 8 + 48, canv_hei - 96);
  textSize(32);
  strokeWeight(2);
  stroke(maincolor);
  fill(bgcolor);
  text("BPM = " + BPM, 48, canv_hei - 112);
  textSize(240);
  textAlign(CENTER);
  fill(maincolor);
  text("0" + (light_sq + 1), 180, canv_hei - 168);
}

function DrawDisplay() {
  textAlign(RIGHT);
  textSize(32);
  text(framecnt, canv_wid - 48, 64);
  text(timecnt.toFixed(2), canv_wid - 256, 64);
  textAlign(CENTER);
  textSize(48);
  //translate(width / 2, height / 2);
  rotate(radians(-90));
  text("シンカンセンカタイアイス", -350, 100);
  textSize(24);
  text("s h i n k a n s e n   k a t a i   a i s u", -244, 140);
  textSize(52);
  strokeWeight(2);
  stroke(maincolor);
  fill(bgcolor);
  textStyle(BOLD);
  text("Shannon feat. 初音ミク", -350, 240);
  textStyle(NORMAL);
  fill(maincolor);
  rotate(radians(90));
  strokeWeight(2);
  line(180, 70, 180, 640);
  fill(0, 0, 0, 0);
  circle(canv_wid - 60 - 48, canv_hei - 60 - 48, 128);
  circle(canv_wid - 60 - 48 - 100, canv_hei - 60 - 48, 128);
  circle(canv_wid - 60 - 48 - 200, canv_hei - 60 - 48, 128);
  circle(canv_wid - 60 - 48 - 300, canv_hei - 60 - 48, 128);
}

function lyricDisplay() {
  let currenttext = "";
  let nowtxtnum = 0;
  for (let i = 0; i < lyrictxt.length; i++) {
    if (lyrictxt[i].timing < timecnt) {
      nowtxtnum = i;
    }
  }
  fill(maincolor);
  textAlign(LEFT);
  textSize(64);
  text(lyrictxt[nowtxtnum].text, width / 2 - 512, height / 2 + 256 + 128 + 48);
  textSize(18);
  for (let i = 1; i <= 6; i++) {
    if (lyrictxt.length > nowtxtnum + i) {
      if (lyrictxt[nowtxtnum + i].text == "") {
        text("-", width / 2 + 512 - 8, height / 2 - 256 - 96 + 96 * i);
      } else {
        for (let j = 0; j < lyrictxt[nowtxtnum + i].text.length; j++) {
          text(
            lyrictxt[nowtxtnum + i].text[j],
            width / 2 + 512 - 8 + 36 * j,
            height / 2 - 256 - 96 + 96 * i
          );
        }
      }
    }
  }
  strokeWeight(4);
  let linelen = 0;
  if (lyrictxt.length > nowtxtnum + 1) {
    linelen =
      (timecnt - lyrictxt[nowtxtnum].timing) /
      (lyrictxt[nowtxtnum + 1].timing - lyrictxt[nowtxtnum].timing);
  }
  line(
    width / 2 - 512,
    height / 2 + 456,
    width / 2 - 512 + 969 * linelen,
    height / 2 + 456
  );
}

function drawaudio() {
  let spectrum = fft.analyze();

  // 周波数スペクトラムを描画
  //stroke(245);

  let bands = spectrum.length / 8;
  let linepoint = [512 - 64, 512 + 128];
  for (let i = 0; i < bands; i++) {
    let x = map(i, 0, bands, 0, canv_wid + 768 + 256);
    let h = -canv_hei + map(spectrum[i] - 100, 0, 255, height, 0);
    strokeWeight(0);
    fill(248);
    rect(x, canv_hei, (canv_wid + 768 + 256) / bands - 8, h + 128);
    fill(maincolor);
    strokeWeight(2);
    if (linepoint[0] != 512 - 64) {
      line(linepoint[0], linepoint[1], x / 3.2 + 512 - 64, h / 2 + 512 + 128);
    }

    linepoint[0] = x / 3.2 + 512 - 64;
    linepoint[1] = h / 2 + 512 + 128;
  }
  //line(512 - 80, 256, 512 - 80, 512 + 256);
  //line(512 + 512 + 256 + 128, 256, 512 + 512 + 256 + 128, 512 + 256);
}
//ellipse(中心のx座標, 中心のy座標, x方向の直径, y方向の直径)
//circle(中心のx座標, 中心のy座標, 直径)
//rect(左上隅のx座標, 左上隅のy座標, x方向の長さ, y方向の長さ)
//square(左上隅のx座標, 左上隅のy座標, 一辺の長さ)
//triangle(x1, y1, x2, y2, x3, y3)
//quad(x1, y1, x2, y2, x3, y3, x4, y4)
//line(始点のx座標, 始点のy座標, 終点のx座標, 終点のy座標)
