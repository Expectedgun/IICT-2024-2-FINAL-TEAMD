class Storyline {
  constructor(goToNext) {
    this.goToNext = goToNext;
    this.stage = 0;
    this.fortune = 0;
    // this.userName = "";
    this.inputBox = null;
    this.submitButton = null;
    //this.capture = null;
    //this.capturedImage = null;
    this.state = 0;

    // Images
    this.img = null;
    this.img2 = null;
    this.img3 = null;
  }

  preloadAssets() {
    this.img = loadImage("assets/opening.png");
    this.img2 = loadImage("assets/logo.png");
    this.img3 = loadImage("assets/openAI.png");


  }

  init() {
    this.stage = 0;
    this.fortune = 0;
    this.state = 0;
  }

  setupCanvas() {
    // createCanvas(1500, 800);
    // if (this.state === 0) {
    //   this.setupCamera();
    // }


  }

  // setupCamera() {
  //   this.capture = createCapture(VIDEO);
  //   this.capture.size(400, 300);
  //   this.capture.hide();
  // }

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
      case 10:
        this.drawStage10();
        break;
      case 11:
        this.drawStage11();
        break;
      case 12:
        this.drawStage12();
        break;
      case 13:
        this.drawStage13();
        break;
      case 14:
        this.drawStage14();
        break;
      case 15:
        this.drawStage15();
        break;
      case 16:
        this.drawStage16();
        break;
      case 17:
        this.drawStage17();
        break;
      default:
        background(0);
        textAlign(CENTER, CENTER);
        textSize(30);
        fill(255);
        text("Press the number 2 for next stage", width / 2, height / 2);
    }
  }

  drawStage0() {
    //image(cam, 0, 0);
    imageMode(CORNER);
    background(0);
    image(this.img, 0, 0, 1500, 800);
    fill(255);
    textAlign(LEFT);
    textAlign(CENTER, CENTER);
    textSize(120);
    textStyle(BOLD);
    text("The GPT: 니가 해라 GPT", width / 2, 160);
    rectMode(CORNER);

    if (frameCount % 60 < 30) {
      fill(255, 255, 0, 100); // 노란색
    } else {
      fill(255, 0); // 투명
    }
    rect(650, 325, 170, 110);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("GAME START", 735, 380);


    if (mouseX > 650 && mouseX < 820 && mouseY > 325 && mouseY < 435) {
      fill(255, 255, 0, 150);
      rect(650, 325, 170, 110);
      fill(255, 0, 0);
      text("GAME START", 735, 380);
    }
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
    text("‘시급이 28,000원이라길래 찾아왔다...\n무슨 알바길래 이리도 돈을 많이 주는 걸까?’", width / 2, 650);
    textSize(20);
    text("(화면을 클릭해서 스토리를 진행하세요)", width * 4 / 5, 750);
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
    text("???: 안녕하세요. 오늘 알바하실 분 맞으신가요?", width / 2, 650);
  }

  drawStage3() {
    background(0);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(40);
    textStyle(BOLD);
    text("네, 맞는데.. 무슨 일을 하길래 시급이 28,000원인가요?", width / 2, 620);
    fill(180);
    text("???: 아 그게...", width / 2, 680);
  }

  drawStage4() {
    background(0);
    push();
    tint(255, 130);
    image(this.img3, 550, 50, 400, 400);
    pop();
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("Open AI 인사팀 수석: 아마 본인도 써보셨을 텐데,\n저희는 GPT를 운영하고 있는 Open AI라는 회사입니다.", width / 2, 650);
  }

  drawStage5() {
    background(0);
    push();
    tint(255, 130);
    image(this.img3, 550, 50, 400, 400);
    pop();
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("Open AI 인사팀 수석: 새롭게 선보인 저희 GPT 모델을\n너무 많은 분들이 이용해주시는 바람에, 데이터센터가 다운됐습니다.", width / 2, 650);
  }

  drawStage6() {
    background(0);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(40);
    textStyle(BOLD);
    text("그건 알겠는데... 제가 여기서 뭘 할 수 있나요?\n컴퓨터도 잘 다룰 줄 모르는데...", width / 2, 650);
  }

  drawStage7() {
    background(0);
    push();
    tint(255, 130);
    image(this.img3, 550, 50, 400, 400);
    pop();
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("Open AI 인사팀 수석: 어려울 것 없습니다.", width / 2, 650);
  }

  drawStage8() {
    background(0);
    push();
    tint(255, 130);
    image(this.img3, 550, 50, 400, 400);
    pop();
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("Open AI 인사팀 수석: 오늘만 본인이 GPT인 것처럼 대타를 뛰어주세요.", width / 2, 650);
  }

  drawStage9() {
    background(0);
    push();
    tint(255, 130);
    image(this.img3, 550, 50, 400, 400);
    pop();
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("Open AI 인사팀 수석: 단, 본인이 인간인 걸 들키면 안 됩니다.\n답변이 형편없으면 이용자들이 곧바로 구독을 취소하거든요.", width / 2, 650);
  }

  drawStage10() {
    background(0);
    push();
    tint(255, 130);
    image(this.img3, 550, 50, 400, 400);
    pop();
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(180);
    textSize(40);
    textStyle(BOLD);
    text("Open AI 인사팀 수석: 저희가 준비는 다 해놨습니다.\n자리에 앉아서 사원증 발급받고, GPT처럼 업무하시면 됩니다.", width / 2, 650);
  }

  drawStage11() {
    background(0);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(40);
    textStyle(BOLD);
    text("내가 GPT만큼 할 수 있을까...?\n그래도 돈 준다면 뭐든 못하겠어.", width / 2, 650);
  }

  drawStage12() {
    background(0);
    noStroke();
    fill(80, 200);
    rectMode(CORNER);
    rect(0, 500, width, 300);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(40);
    textStyle(BOLD);
    text("컴퓨터 전원을 켜서 시작하면 되는 건가?", width / 2, 650);
  }

  drawStage13() {
    this.drawGradient();
    this.screen();

    noStroke();
    //모니터 위 폴터
    rectMode(CORNER);
    fill(20, 145, 206);
    rect(1200, 130, 100, 20, 10);
    quad(1200, 120, 1200, 160, 1260, 160, 1240, 120);
    quad(1200, 260, 1200, 290, 1260, 290, 1240, 260);
    rect(1200, 270, 100, 20, 10);
    fill(115, 208, 251);
    rect(1200, 135, 100, 70, 10);
    rect(1200, 275, 100, 70, 10);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(15);
    text("운영지침서", 1250, 230);
    text("GPT", 1250, 370);

    //이름 입력
    fill(255, 200);
    rectMode(CENTER);
    rect(750, 360, 500, 300, 10);
    fill(255, 150);
    rect(750, 370, 500, 260);
    textSize(30);
    fill(0);
    textAlign(CENTER, CENTER);
    text("이름을 입력해주세요.", 750, 340);
    fill(254, 95, 88);
    ellipse(520, 225, 10, 10);
    fill(254, 188, 46);
    ellipse(540, 225, 10, 10)
    fill(40, 200, 65);
    ellipse(560, 225, 10, 10);

    if (!this.inputBox) {
      username = ""
      this.inputBox = createInput();
      this.inputBox.position(620, height / 2 - 30);
      this.inputBox.size(200);
      this.inputBox.input(() => {
        if (this.inputBox.value().length > 7) {
          this.inputBox.value(this.inputBox.value().substring(0, 7));
        }
      });
    }

    if (!this.submitButton) {
      this.submitButton = createButton("입력");
      this.submitButton.position(850, height / 2 - 30);
      this.submitButton.mousePressed(() => {
        username = this.inputBox.value();
        this.inputBox.remove();
        this.submitButton.remove();
        this.inputBox = null;
        this.submitButton = null;
        this.stage = 14;
      });
    }
  }

  drawStage14() {
    this.drawGradient();
    this.screen();

    //모니터 위 폴터
    noStroke();
    rectMode(CORNER);
    fill(20, 145, 206);
    rect(1200, 130, 100, 20, 10);
    quad(1200, 120, 1200, 160, 1260, 160, 1240, 120);
    quad(1200, 260, 1200, 290, 1260, 290, 1240, 260);
    rect(1200, 270, 100, 20, 10);
    fill(115, 208, 251);
    rect(1200, 135, 100, 70, 10);
    rect(1200, 275, 100, 70, 10);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(15);
    text("운영지침서", 1250, 230);
    text("GPT", 1250, 370);

    //사진 촬영 화면
    fill(255, 200);
    rectMode(CENTER);
    rect(750, 360, 700, 500, 10);
    fill(255, 150);
    rect(750, 340, 700, 400);
    textSize(30);
    fill(254, 95, 88);
    ellipse(420, 125, 10, 10);
    fill(254, 188, 46);
    ellipse(440, 125, 10, 10)
    fill(40, 200, 65);
    ellipse(460, 125, 10, 10);
    fill(255);
    ellipse(750, 578, 50, 50);
    fill(0)
    ellipse(750, 578, 45, 45);
    fill(255, 0, 0);
    ellipse(750, 578, 40, 40);
    if (cam) {
      push();
      imageMode(CENTER);
      tint(255, 255);
      translate(width, 0);
      scale(-1, 1);
      image(cam, 750, 340, 700, 400);
      pop();
      fill(0);
      textSize(16);
      textAlign(CENTER);
      text("Photo Booth", width / 2, 130);
    }
    fill(255);
    ellipse(750, 578, 50, 50);
    fill(0);
    ellipse(750, 578, 45, 45);
    fill(255, 0, 0);
    ellipse(750, 578, 40, 40);

    currentFrameImage = null;
  }

  drawStage15() {
    this.drawGradient();
    this.screen();
    noStroke();

    //모니터 위 폴터
    rectMode(CORNER);
    fill(20, 145, 206);
    rect(1200, 130, 100, 20, 10);
    quad(1200, 120, 1200, 160, 1260, 160, 1240, 120);
    quad(1200, 260, 1200, 290, 1260, 290, 1240, 260);
    rect(1200, 270, 100, 20, 10);
    fill(115, 208, 251);
    rect(1200, 135, 100, 70, 10);
    rect(1200, 275, 100, 70, 10);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(15);
    text("운영지침서", 1250, 230);
    text("GPT", 1250, 370);

    // 사원증 끈
    fill(200, 0, 0);
    stroke(200);
    quad(700, 60, 710, 60, 755, 220, 745, 220); // 왼쪽 끈
    quad(790, 60, 800, 60, 755, 220, 745, 220); // 오른쪽 끈


    // 사원증 배경
    fill(240, 240); // 연한 흰색
    noStroke();
    rectMode(CENTER);
    rect(750, 390, 260, 350, 20);

    //사원증
    fill(7, 7, 117);
    rect(750, 235, 50, 7);
    // 상단 텍스트 (ID CARD)
    fill(0); // 흰색
    textAlign(CENTER, CENTER);
    textSize(25);
    text("AI COMPANY", 750, 255);

    // 상단 텍스트 (ID CARD)
    // fill(255); // 흰색
    // textAlign(CENTER, CENTER);
    // textSize(20);
    // text("ID CARD", 750, 250);

    // 사원증 내부 텍스트
    fill(0);
    textSize(18);
    textAlign(LEFT);
    text(`Name: Chat-${username}`, 642, 470);
    text(`ID: ${nf(year())}${nf(month())}${nf(day())}`, 642, 500);
    text("Department: GPT", 642, 530);

    if (capturedImage) {
      push();
      imageMode(CENTER);
      tint(255, 255);
      translate(width, 0);
      scale(-1, 1);
      image(capturedImage, 750, 365, 200, 160);
      pop();
    }
    if (!currentFrameImage) {
      currentFrameImage = get(620, 215, 260, 350)
      console.log(currentFrameImage)
    }

  }

  drawStage16() {
    this.drawGradient();
    this.screen();

    noStroke();
    //모니터 위 폴터
    rectMode(CORNER);
    fill(20, 145, 206);
    rect(1200, 130, 100, 20, 10);
    quad(1200, 120, 1200, 160, 1260, 160, 1240, 120);
    quad(1200, 260, 1200, 290, 1260, 290, 1240, 260);
    rect(1200, 270, 100, 20, 10);
    fill(115, 208, 251);
    rect(1200, 135, 100, 70, 10);
    rect(1200, 275, 100, 70, 10);
    textureMode(CENTER);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(15);
    text("운영지침서", 1250, 230);
    text("GPT", 1250, 370);

    //가이드라인
    fill(255, 200);
    rectMode(CENTER);
    rect(750, 360, 500, 300, 10);
    fill(255, 200);
    rect(750, 370, 500, 260);
    fill(254, 95, 88);
    ellipse(520, 225, 10, 10);
    fill(254, 188, 46);
    ellipse(540, 225, 10, 10)
    fill(40, 200, 65);
    ellipse(560, 225, 10, 10);
    strokeWeight(2);
    stroke(255);
    fill(0);
    noStroke();
    textSize(20);
    text("모니터 위의 운영지침서 폴더를 클릭하세요.", width / 2, 370);
    rectMode(CORNER);
    if (mouseX > 1195 && mouseX < 1305 && mouseY > 115 && mouseY < 205) {
      fill(20, 145, 206);
      rect(1195, 125, 110, 40, 10);
      quad(1195, 115, 1195, 155, 1265, 155, 1245, 115);
      fill(115, 208, 251);
      rect(1195, 130, 110, 80, 10);
      if (mouseIsPressed) {
        this.stage = 17;
      }

    }
  }

  drawStage17() {
    this.drawGradient();
    this.screen();

    noStroke();
    //모니터 위 폴터
    rectMode(CORNER);
    fill(20, 145, 206);
    rect(1200, 130, 100, 20, 10);
    quad(1200, 120, 1200, 160, 1260, 160, 1240, 120);
    quad(1200, 260, 1200, 290, 1260, 290, 1240, 260);
    rect(1200, 270, 100, 20, 10);
    fill(115, 208, 251);
    rect(1200, 135, 100, 70, 10);
    rect(1200, 275, 100, 70, 10);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(15);
    text("운영지침서", 1250, 230);
    text("GPT", 1250, 370);


    //운영지침서
    fill(255, 200);
    rectMode(CENTER);
    rect(750, 360, 700, 500, 10);
    fill(200);
    rect(750, 120, 700, 20, 10);
    rect(750, 130, 700, 20);
    fill(255, 150);
    rect(750, 370, 700, 460);
    textSize(30);
    fill(0);
    text("운영지침서\n \n1. 총 4개의 업무를 수행하게 됩니다.\n2. GPT는 철저하게 '고객'을 위해야 합니다.\n3. 자사의 윤리 방침을 반드시 따라야 합니다.\n\n이를 유념하고 업무를 시작해주세요.", 750, 340)
    fill(254, 95, 88);
    ellipse(420, 125, 10, 10);
    fill(254, 188, 46);
    ellipse(440, 125, 10, 10)
    fill(40, 200, 65);
    ellipse(460, 125, 10, 10);

    //버튼
    fill(255, 0, 0, 100);
    rect(750, 520, 100, 40, 10);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    
    text("업무 시작", 750, 520);
    if (mouseX > 700 && mouseX < 800 && mouseY > 500 && mouseY < 540) {
      fill(0);
      rect(750, 520, 100, 40, 10);
      textAlign(CENTER, CENTER);
      textSize(20);
      fill(255);
      text("업무 시작", 750, 520);
    }
  }


  drawGradient() {
    let topColor = color(255, 244, 214);
    let bottomColor = color(0, 102, 102);
    for (let y = 0; y <= height; y++) {
      let inter = map(y, 0, height / 2, 0, 1);
      let c = lerpColor(topColor, bottomColor, inter);
      stroke(c);
      line(0, y, width, y);
    }
  }

  screen() {
    rectMode(CENTER);
    noStroke();
    fill(255, 204, 153);
    rect(width / 2, height * 4.5 / 5, width, 200);
    strokeWeight(20);

    stroke(0, 0, 0, 150);
    rect(width / 2, height * 4 / 5 + 95, width * 4 / 5 + 20, 25, 100);
    noStroke();
    fill(0, 0, 0, 80);
    quad(width / 10, height * 4 / 5 + 95, width * 9 / 10, height * 4 / 5 + 95, width * 9 / 10 + 40, height, width / 10 - 40, height);

    stroke(50, 50, 50);
    fill(30, 30, 30);
    rect(width / 2, height / 2 - 40, width * 4 / 5, height * 4 / 5, 2);
    rect(width / 2, height * 4 / 5 + 100, width * 4 / 5 + 40, 20, 30);

    fill(50, 50, 50);
    rect(width / 2, height * 4 / 5 + 60, 50, 40);
  }

  mousePressed() {
    switch (this.stage) {
      case 0:
        if (mouseX > 650 && mouseX < 820 && mouseY > 325 && mouseY < 435) {
          this.stage = 1;
        }
        break;
      case 13:
        if (this.inputBox && this.submitButton) {
          let bx = this.submitButton.x;
          let by = this.submitButton.y;
          let bw = this.submitButton.width;
          let bh = this.submitButton.height;
          if (mouseX > bx && mouseX < bx + bw && mouseY > by && mouseY < by + bh) {
            username = this.inputBox.value();
            this.inputBox.remove();
            this.submitButton.remove();
            this.inputBox = null;
            this.submitButton = null;
            this.stage = 14;
          }
        }
        break;
      case 14:
        let d = dist(mouseX, mouseY, 750, 578);
        if (d <= 25) {
          if (cam) {
            // 캡처된 이미지를 저장
            capturedImage = createImage(cam.width, cam.height);
            capturedImage.copy(cam, 0, 0, cam.width, cam.height, 0, 0, cam.width, cam.height);
            this.stage = 15; // 다음 스테이지로 전환
            // } else {
            //   console.error("Global capture is not initialized!");
          }
        }

        break;
      case 16:
        if (mouseX > 1195 && mouseX < 1305 && mouseY > 115 && mouseY < 210) {
          this.stage = 17;
        }
        break;
      case 17:
        if (mouseX > 700 && mouseX < 800 && mouseY > 500 && mouseY < 540) {
          this.goToNext();
        }
        
      default:
        if (this.stage < 17) {
          this.stage++;
        }
    }
  }
  isCompleted() {
    // Storyline의 특정 조건 만족 여부 (예: 마지막 스테이지 도달)
    return this.stage >= 17; // 예: 마지막 단계 이후 완료
  }
  exit() {
    console.log("Exiting Storyline");
    // 필요한 정리 작업 수행 (예: 상태 초기화)
    this.stage = 0;
  }
}
