class Ending {
  constructor() {
    this.stage = 0;
    this.img3 = null;
    this.imgUploaded = false;
  }
  preloadAssets() {
    this.img3 = loadImage("assets/openAI.png");
  }

  setupCanvas() {
    createCanvas(1500, 800);
  }

  drawScene() {
    switch (this.stage) {
      case 0:
        this.drawStage0();
        break;
      case 1:
        this.drawStage1();
        break;
      case 2:
        this.drawStage2();
        break;
      case 3:
        this.drawStage3();
        break;
      case 4:
        this.drawStage4();
        break;
      case 5:
        this.drawStage5();
        break;
      case 6:
        this.drawStage6();
        break;
      case 7:
        this.drawStage7();
        break;
      case 8:
        this.drawStage8();
        break;
      case 9:
        this.drawStage9();
        break;
      // case 10:
        
      default:
        this.drawStage10();
        break;
        // background(0);
        // textAlign(CENTER, CENTER);
        // textSize(30);
        // fill(255);
        // text("End of Story", width / 2, height / 2);
        // text("다음 사용자를 위해 새로고침(F5)을 눌러주세요", width / 2, height / 2 + 50);
    }
  }

  drawStage0() {
    background(0);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(40);
    textStyle(BOLD);
    text("‘휴... 어느새 밤 늦은 시간이 되었군\nGPT가 생각보다 어려운 일들을 척척 해내고 있었구나’", width / 2, 650);

  }

  drawStage1() {
    background(0);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(40);
    textStyle(BOLD);
    text("나는 그냥 다음 달에 GPT 플러스나 결제해야겠다.", width / 2, 650);

  }

  drawStage2() {
    background(0);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("Open AI 인사팀 수석: 잠.. 잠시만요!", width / 2, 650);

  }


  drawStage3() {
    background(0);
    tint(255, 130);
    //image(img3, 550, 50, 400, 400);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(40);
    textStyle(BOLD);
    text("'뭐지?\n설마 일 좀 미숙하게 했다고 쫓아오는건가?'", width / 2, 650);
    //수정
    if (!this.imgUploaded) {
      // let currentFrameImage = get();
      // console.log(currentFrameImage)
      let base64Image = currentFrameImage.canvas.toDataURL();
      // console.log(base64Image)
      uploadImageToSupabase(base64Image);
      this.imgUploaded = true

    }

  }

  drawStage4() {
    background(0);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("Open AI 인사팀 수석: 오늘 고생 많으셨습니다.\n일일 GPT 사원증을 드리려고 이렇게 달려왔습니다. ", width / 2, 650);
    this.imgUploaded = false
  }

  drawStage5() {
    background(0);
    tint(255, 130);
    //image(img3, 550, 50, 400, 400);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("Open AI 인사팀 수석: 앞으로도 저희 회사의 GPT에\n많은 관심 부탁드립니다. ", width / 2, 650);
  }

  drawStage6() {
    background(0);
    tint(255, 130);
    //image(img3, 550, 50, 400, 400);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("Open AI 인사팀 수석: 일손이 부족하면 가끔 연락드려도 될까요?", width / 2, 650);
  }

  drawStage7() {
    background(0);
    tint(255, 130);
    //image(img3, 550, 50, 400, 400);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(40);
    textStyle(BOLD);
    text("저야.. 너무 좋죠.\n(힘들었지만 요즘 세상에 시급 28,000원짜리 알바 찾기 힘들지..)", width / 2, 650);
  }

  drawStage8() {
    background(0);
    tint(255, 130);
    //image(img3, 550, 50, 400, 400);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("Open AI 인사팀 수석: 그렇다면 이 사원증을 꼭 간직해주시길 바랍니다.\n그럼 전 이만...", width / 2, 650);
  }

  drawStage9() {
    background(0);
    tint(255, 130);

    let topColor = color(255, 255, 255);
    let bottomColor = color(247, 229, 208);
    for (let y = 0; y <= height; y++) {
      let inter = map(y, 0, height / 2, 0, 1);
      let c = lerpColor(topColor, bottomColor, inter);
      stroke(c);
      line(0, y, width, y);
    }

    // 사원증 배경
    fill(255); // 연한 파란색
    noStroke();
    rectMode(CENTER);
    rect(550, 390, 260, 350, 20);

    //사원증
    fill(7, 7, 117);
    rect(550, 235, 50, 7);
    // 상단 텍스트 (ID CARD)
    fill(0); // 흰색
    textAlign(CENTER, CENTER);
    textSize(25);
    text("AI COMPANY", 550, 255);

    fill(0);
    textSize(18);
    textAlign(LEFT);
    text(`Name: Chat-${username}`, 442, 470);
    text(`ID: ${nf(year())}${nf(month())}${nf(day())}`, 442, 500);
    text("Department: GPT", 442, 530);

    if (capturedImage) {
      push();
      imageMode(CENTER);
      tint(255, 255);
      translate(width, 0);
      scale(-1, 1);
      image(capturedImage, 950, 365, 200, 160);
      pop();
    }
    if (!currentFrameImage) {
      currentFrameImage = get(0, 0, width, height)
      console.log(currentFrameImage)
    }



    //qr코드 수정한 부분
    if (!qrcode) {
      qrcode = createDiv()
      qrcode.id('qrcode')
      qrcode.position(850, 280);
      new QRCode(document.getElementById("qrcode"), `https://lfwvgjbzgpsdrswzpdaw.supabase.co/storage/v1/object/public/IICT2024-2/public/${imageName}`);
    }

  }

  drawStage10() {
    background(0);
    tint(255, 130);
    noStroke();
    fill(80, 200);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("고객이 때로는 핍박을 할지라도,\nGPT는 오늘도 고객을 위해 최선을 다하는 중입니다.\n\nTHE END.", width / 2, 400);
    textSize(25);
    text("(다음 사용자를 위해 새로고침(F5)을 눌러주세요)", width / 2, height / 2 + 200);
    qrcode.remove();
  }


  mousePressed() {
    if (mouseX > 0 && mouseX < 1500 && mouseY < 800 && mouseY > 0) {
      this.stage++;
      return;
    }
  }
  
  exit() {
    console.log("Exiting Storyline");
    // 필요한 정리 작업 수행 (예: 상태 초기화)
    this.stage = 0;
  }
}
