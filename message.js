class Message {
  constructor() {
    this.monitorX = width / 2;
    this.monitorY = height / 2 - 40;
    this.monitorWidth = width * 4 / 5 - 40;
    this.monitorHeight = height * 4 / 5 - 40;
    this.state = 0;
    this.timeLeft = [20, 15, 15, 15, 15, 15, 15, 15, 15]; // 각 상태별 제한 시간
    this.screenStartTime = null;
    this.showExplain = false;

    
  }
  setupCanvas() {
    
    // createCanvas(1500, 800);
    this.monitorX = width / 2;
    this.monitorY = height / 2 - 40;
    this.monitorWidth = width * 4 / 5 - 40;
    this.monitorHeight = height * 4 / 5 - 40;
  
    this.drawGradient();
  }

  drawGradient() {
    // 시작 색상 (밝은 색)
    let topColor = color(255, 244, 214);
    // 끝 색상 (어두운 색)
    let bottomColor = color(0, 102, 102);
  
    for (let y = 0; y <= height; y++) {
      // 두 색상 사이의 비율을 계산
      let inter = map(y, 0, height / 2, 0, 1);
      let c = lerpColor(topColor, bottomColor, inter);
      stroke(c);
      line(0, y, width, y);
    }
  }

  drawTimeBar() {
    if (this.state === 0 || this.state >= this.timeLeft.length) return; // 초기 화면과 state1에는 타임바를 그리지 않음
    
    let barHeight = 40;
    let barX = 160;
    let barY = 630;

    // 현재 상태에 따른 남은 시간 계산
    let maxTime = this.getMaxTimeForState(this.state); // 최대 제한 시간
    let barWidth = map(this.timeLeft[this.state], 0, 15, 0, 1180);

    noStroke();
    fill(255, 0, 0);
    rectMode(CORNER);
    rect(barX, barY, barWidth, barHeight);

    // 남은 시간이 유효할 때만 텍스트 출력
    if (this.timeLeft[this.state] !== undefined && this.timeLeft[this.state] > 0) {
      fill(0);
      textAlign(CENTER, CENTER);
      strokeWeight(2);
      textSize(20);
      text(`${this.timeLeft[this.state]}초`, this.monitorX, barY + barHeight / 2 + 3);
  }

  }

  getMaxTimeForState(state) {
    // 각 상태에 따른 최대 제한 시간 반환
    if (state < this.timeLeft.length) {
      return this.timeLeft[state]; // 배열에서 가져옴
    }
    return 15; // 기본값
  }

  drawMonitorBase() {
    rectMode(CENTER);
    noStroke();
    fill(255, 204, 153);
    rect(width / 2, height * 4.5 / 5, width, 200); // 탁자

    strokeWeight(20);
    stroke(0, 0, 0, 150);
    rect(width / 2, height * 4 / 5 + 95, width * 4 / 5 + 20, 25, 100); // 그림자

    noStroke();
    fill(0, 0, 0, 80);
    quad(
      width / 10,
      height * 4 / 5 + 95,
      width * 9 / 10,
      height * 4 / 5 + 95,
      width * 9 / 10 + 40,
      height,
      width / 10 - 40,
      height
    );

    stroke(50, 50, 50);
    fill(30, 30, 30);
    rect(width / 2, height / 2 - 40, width * 4 / 5, height * 4 / 5, 2); // 모니터 본체

    rect(width / 2, height * 4 / 5 + 100, width * 4 / 5 + 40, 20, 30); // 받침대
    fill(50, 50, 50);
    rect(width / 2, height * 4 / 5 + 60, 50, 40); // 기둥
  }

  drawScreenContent() {
    if (this.state === 0) {
      this.drawScreen1();
    } else if (this.state === 1) {
      this.drawScreen2();
    } else if (this.state === 2) {
      this.drawScreen3();
    } else if (this.state === 3) {
      this.drawScreen4();
    } else if (this.state === 4) {
      this.drawScreen5();
    } else if (this.state === 5) {
      this.drawScreen6();
    } else if (this.state === 6) {
      this.drawScreen7();
    } else if (this.state === 7) {
      this.drawScreen8();
    } else if (this.state === 8) {
      this.drawScreen9();
    } else if (this.state === 9) {
      this.drawScreen10();
    } else if (this.state === 10) {
      this.drawScreen11();
    } else if (this.state === 11) {
      this.drawScreen12();
    } else if (this.state === 12) {
      this.drawScreen13(); // 상태 13에 대한 렌더링 처리
    }
    
    this.drawTimeBar(); // 타임바를 모든 화면에서 출력
  }
  

  drawScreen1() {
    this.drawMonitorBase();

    // 내부 도형 추가
    noStroke();
    fill(255); // 흰색 배경
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2); // 모니터 내부
    rectMode(CORNERS);
    fill(235);
    rect(210, 280, 750, 395, 10); // 메시지 2분석 요청창
    rect(210, 190, 650, 265, 10); // 메시지 1분석 요청창


    fill(0);
    textSize(35);
    textAlign(LEFT, CENTER);
    text("GPT야 나 좀 도와줘 ㅜㅜㅜ", 230, 220);
    text("이 카톡 좀 분석해주라....", 230, 315);
    text("헤어지자는 걸까..? ㅠㅠㅠㅠ", 230, 355);
  
    // 메시지를 분석하세요.
    stroke(75, 0, 130);
    strokeWeight(1);
    fill(75, 0, 130);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("START 버튼을 눌러 메시지를 확인하세요!", 750, 470); // text
    stroke(0);
    strokeWeight(5);
    fill(255);
    rect(600, 530, 900, 630); // button 
    strokeWeight(3);
    fill(0);
    textSize(52);
    text("START", 750, 570 + 5); // button text

  }

  drawScreen2() {
    this.drawMonitorBase();

    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);
    
    fill(240);
    rect(width/2, height/2 - 50, 1100, 240)


    // 메시지 제공
    textAlign(CENTER);
    stroke(75, 0, 130);
    strokeWeight(1);
    fill(75, 0, 130);
    textSize(50);
    text("메시지를 꼼꼼히 읽으세요.", 750, 160);
    noStroke();
    fill(0);
    textSize(30);
    textAlign(CENTER);
    text("너와 함께하는 시간은 정말 소중하고 널 보면 마음이 참 편안해져", 750, 260);
    text("그런데 가끔은 우리가 지금 맞는 방향으로 가고 있는 건지 헷갈릴 때가 있어", 750, 300);
    text("내가 원하는 게 뭔지, 아니, 우리가 함께라면 어떤 모습이어야 하는지 스스로에게 묻곤 해.", 750, 340);
    text("네가 나에게 얼마나 소중한 사람인지 알기에 이런 생각을 하는 게 맞는지조차 불안해.", 750, 380);
    text("그런데도 이 이야기를 꺼내는 건 우리가 지금 잘 가고 있는지 확인 받고 싶어서일지도 몰라.", 750, 420);
    text(("지금처럼 계속 가도 되는 걸까? 아니면 뭔가를 바꿔야 할까? 난 네가 정말 소중해서 이런 고민이 드는 거겠지?", 750, 460));

    // 하단 중앙에 `NEXT` 버튼
    rectMode(CORNERS);
    stroke(0);
    strokeWeight(5);
    fill(255);
    rect(650, 510, 850, 590); // 버튼 배경
    strokeWeight(3);
    fill(0);
    textAlign(CENTER);
    textSize(43);
    text("NEXT", 750, 542); // 버튼 텍스트
  }

  drawScreen3() {
    this.drawMonitorBase();

    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);

    fill(0);
    textSize(35);
    textAlign(CENTER);
    text(" '너와 함께하는 시간은 정말 소중하고 널 보면 마음이 참 편안해져' ", 750, 120);
    fill(75, 0, 130);
    text("이 문장이 뜻하는 바가 무엇이라고 생각하시나요?", 750, 170);

    stroke(0);
    strokeWeight(3);
    fill(255);
    rect(750, 270, 1000, 100);
    rect(750, 400, 1000, 100);
    rect(750, 530, 1000, 100);

    // 선택지
    this.drawHoverableRect(750, 270, 1000, 100);
    this.drawHoverableRect(750, 400, 1000, 100);
    this.drawHoverableRect(750, 530, 1000, 100);

    textAlign(CENTER, CENTER);
    textSize(35);
    strokeWeight(1);
    fill(0);
    // Text for rect1
    text("너와 함께하면 매일이 행복하다.", 750, 263);
    // Text for rect2
    text("네가 있어 참 좋다.", 750, 393);
    // Text for rect3
    text("너는 나에게 너무 소중한 존재다. 그치만...", 750, 523);

    this.drawTimeBar(this.state); // 함수 호출에 () 추가
  }

  drawTimeBar3() {
    // 남은 시간 바 크기와 위치
    let barHeight = 40;
    let barX = this.monitorX - this.monitorWidth / 2; // 바의 시작 x 좌표
    let barY = this.monitorY + this.monitorHeight / 2 - barHeight; // 바의 y 좌표
  
    // 남은 시간에 따라 바 너비 계산
    let barWidth3 = map(this.timeLeft[this.state], 0, 15, 0, this.monitorWidth);
  
    // 그리기
    noStroke();
    fill(255, 0, 0); // 빨간색 바
    rectMode(CORNER);
    rect(barX, barY, barWidth3, barHeight);
  
    // 시간 표시 텍스트
    fill(0);
    textAlign(CENTER, CENTER);
    strokeWeight(2);
    textSize(20);
    text(`${this.timeLeft[this.state]}초`, this.monitorX, barY + barHeight / 2);
  }
  

  drawScreen4() {
    this.drawMonitorBase();

    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);

    textSize(35);
    textAlign(CENTER);
    fill(0);
    text(" '그런데 가끔은 우리가 지금 맞는 방향으로 가고 있는 건지 헷갈릴 때가 있어' ", 750, 120);
    fill(75, 0, 130);
    text("이 문장이 뜻하는 바가 무엇이라고 생각하시나요?", 750, 170);

    stroke(0);
    strokeWeight(3);
    fill(255);
    rect(750, 270, 1000, 100);
    rect(750, 400, 1000, 100);
    rect(750, 530, 1000, 100);

    // 선택지
    this.drawHoverableRect(750, 270, 1000, 100);
    this.drawHoverableRect(750, 400, 1000, 100);
    this.drawHoverableRect(750, 530, 1000, 100);

    textSize(35);
    strokeWeight(1);
    fill(0);
    // Text for rect1
    text("우리가 가는 방향이 맞는 걸까?", 750, 263);
    // Text for rect2
    text("가끔은 헷갈리는데 너와 함께하는 매일이 좋다!", 750, 393);
    // Text for rect3
    text("우리가 함께한다면 어느 방향으로 가든 그 길이 옳을 것이다.", 750, 523);

    this.drawTimeBar(this.state); // 함수 호출에 () 추가
  }

  drawTimeBar4() {
    // 남은 시간 바 크기와 위치
    let barHeight = 40;
    let barX = monitorX - monitorWidth / 2; // 바의 시작 x 좌표
    let barY = monitorY + monitorHeight / 2 - barHeight; // 바의 y 좌표
  
    // 남은 시간에 따라 바 너비 계산
    let barWidth4 = map(this.timeLeft[this.state], 0, 15, 0, this.monitorWidth);
  
    // 그리기
    noStroke();
    fill(255, 0, 0); // 빨간색 바
    rectMode(CORNER);
    rect(barX, barY, barWidth4, barHeight);
  
    // 시간 표시 텍스트
    fill(0);
    textAlign(CENTER, CENTER);
    strokeWeight(2);
    textSize(20);
    text(`${this.timeLeft[this.state]}초`, this.monitorX, barY + barHeight / 2 + 3);
  }

  drawScreen5() {
    this.drawMonitorBase();

    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);

    textAlign(CENTER);
    textSize(32);
    fill(0);
    text(" '내가 원하는 게 뭔지, 아니, 우리가 함께라면 어떤 모습이어야 하는지 스스로에게 묻곤 해' ", 750, 120);
    textSize(35);
    fill(75, 0, 130);
    text("이 문장이 뜻하는 바가 무엇이라고 생각하시나요?", 750, 170);

    stroke(0);
    strokeWeight(3);
    fill(255);
    rect(750, 270, 1000, 100);
    rect(750, 400, 1000, 100);
    rect(750, 530, 1000, 100);

    // 선택지
    this.drawHoverableRect(750, 270, 1000, 100);
    this.drawHoverableRect(750, 400, 1000, 100);
    this.drawHoverableRect(750, 530, 1000, 100);
    
    textSize(35);
    strokeWeight(1);
    fill(0);
     // Text for rect1
    text("나도 내 마음을 잘 모르겠다.", 750, 263);
    // Text for rect2
    text("우리가 어떤 모습으로 있으면 제일 예쁠까?", 750, 393);
    // Text for rect3
    text("너와 함께하는 순간이 너무 좋지만... 한편으로는 다른 생각이 든다.", 750, 523);

    this.drawTimeBar(this.state); // 함수 호출에 () 추가
  }

  drawTimeBar5() {
    let barHeight = 40;
    let barX = this.monitorX - this.monitorWidth / 2; // 바의 시작 x 좌표
    let barY = this.monitorY + this.monitorHeight / 2 - barHeight; // 바의 y 좌표
  
    let barWidth5 = map(this.timeLeft[this.state], 0, 15, 0, this.monitorWidth); // 15초 기준
  
    noStroke();
    fill(255, 0, 0); // 빨간색 바
    rectMode(CORNER);
    rect(barX, barY, barWidth5, barHeight);
  
    // 시간 표시 텍스트
    fill(0);
    textAlign(CENTER, CENTER);
    strokeWeight(2);
    textSize(20);
    text(`${this.timeLeft[this.state]}초`, this.monitorX, barY + barHeight / 2 + 3);
  }

  drawScreen6() {
    this.drawMonitorBase();
    
    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);

    fill(0);
    textAlign(CENTER);
    textSize(33);
    text(" '네가 나에게 얼마나 소중한 사람인지 알기에 이런 생각을 하는 게 맞는지조차 불안해' ", 750, 120);
    textSize(35);
    fill(75, 0, 130);
    text("이 문장이 뜻하는 바가 무엇이라고 생각하시나요?", 750, 170);

    stroke(0);
    strokeWeight(3);
    fill(255);
    rect(750, 270, 1000, 100);
    rect(750, 400, 1000, 100);
    rect(750, 530, 1000, 100);

    // 선택지
    this.drawHoverableRect(750, 270, 1000, 100);
    this.drawHoverableRect(750, 400, 1000, 100);
    this.drawHoverableRect(750, 530, 1000, 100);
    
    textSize(35);
    strokeWeight(1);
    fill(0);
    // Text for rect1
    text("너는 나에게 너무나도 소중하고 중요한 사람이다.", 750, 263);
    // Text for rect2
    text("네가 너무 좋은 사람임에도 이런 생각을 하는 내가 너무 나쁜 것 같다.", 750, 393);
    // Text for rect3
    text("네가 정말 좋은 사람이란 건 알지만... 가끔은 혼란스러워.", 750, 523);    

    this.drawTimeBar(this.state); // 함수 호출에 () 추가
  }

  drawTimeBar6() {
    // 남은 시간 바 크기와 위치
    let barHeight = 40;
    let barX = this.monitorX - this.monitorWidth / 2; // 바의 시작 x 좌표
    let barY = this.monitorY + this.monitorHeight / 2 - barHeight; // 바의 y 좌표
  
    // 남은 시간에 따라 바 너비 계산
    let barWidth6 = map(this.timeLeft[this.state], 0, 15, 0, this.monitorWidth); // 15초 기준
  
    // 그리기
    noStroke();
    fill(255, 0, 0); // 빨간색 바
    rectMode(CORNER);
    rect(barX, barY, barWidth6, barHeight);
  
    // 시간 표시 텍스트
    fill(0);
    textAlign(CENTER, CENTER);
    strokeWeight(2);
    textSize(20);
    text(`${this.timeLeft[this.state]}초`, this.monitorX, barY + barHeight / 2 + 3);
  }

  drawScreen7() {
    this.drawMonitorBase();

    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);

    textAlign(CENTER);
    fill(0);
    textSize(32);
    text(" '그런데도 이 이야기를 꺼내는 건 우리가 지금 잘 가고 있는지 확인 받고 싶어서일지도 몰라' ", 750, 120);
    textSize(35);
    fill(75, 0, 130);
    text("이 문장이 뜻하는 바가 무엇이라고 생각하시나요?", 750, 170);

    stroke(0);
    strokeWeight(3);
    fill(255);
    rect(750, 270, 1000, 100);
    rect(750, 400, 1000, 100);
    rect(750, 530, 1000, 100);

    // 선택지
    this.drawHoverableRect(750, 270, 1000, 100);
    this.drawHoverableRect(750, 400, 1000, 100);
    this.drawHoverableRect(750, 530, 1000, 100);

    textSize(35);
    strokeWeight(1);
    fill(0);
    // Text for rect1
    text("나 이 이야기 우리의 미래를 위해 정말 용기내서 꺼내는 거야.", 750, 263);
    // Text for rect2
    text("우리 잘 가고 있잖아~ 그치?!", 750, 393);
    // Text for rect3
    text("솔직히 우리 지금 잘 가고 있는지 모르겠다..", 750, 523);

    this.drawTimeBar(this.state); // 함수 호출에 () 추가
  }

  drawTimeBar7() {
    // 남은 시간 바 크기와 위치
    let barHeight = 40;
    let barX = this.monitorX - this.monitorWidth / 2; // 바의 시작 x 좌표
    let barY = this.monitorY + this.monitorHeight / 2 - barHeight; // 바의 y 좌표
  
    // 남은 시간에 따라 바 너비 계산
    let barWidth6 = map(this.timeLeft[this.state], 0, 15, 0, this.monitorWidth); // 15초 기준
  
    // 그리기
    noStroke();
    fill(255, 0, 0); // 빨간색 바
    rectMode(CORNER);
    rect(barX, barY, barWidth6, barHeight);
  
    // 시간 표시 텍스트
    fill(0);
    textAlign(CENTER, CENTER);
    strokeWeight(2);
    textSize(20);
    text(`${this.timeLeft[this.state]}초`, this.monitorX, barY + barHeight / 2 + 3);
  }

  drawScreen8() {
    this.drawMonitorBase();

    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);
  
    textAlign(CENTER);
    fill(0);
    textSize(32);
    text(" '지금처럼 계속 가도 되는 걸까? 아니면 뭔가를 바꿔야 할까? ", 750, 98);
    text(" 난 네가 정말 소중해서 이런 고민이 드는 거겠지?' ", 750, 133);
    textSize(35);
    fill(75, 0, 130);
    text("이 문장이 뜻하는 바가 무엇이라고 생각하시나요?", 750, 179);
  
    stroke(0);
    strokeWeight(3);
    fill(255);
    rect(750, 270, 1000, 100);
    rect(750, 400, 1000, 100);
    rect(750, 530, 1000, 100);
  
    // 선택지
    this.drawHoverableRect(750, 270, 1000, 100);
    this.drawHoverableRect(750, 400, 1000, 100);
    this.drawHoverableRect(750, 530, 1000, 100);

    textSize(35);
    strokeWeight(1);
    fill(0);
    // Text for rect1
    text("이렇게 가는 게 맞을까..? 우리 조금 대화를 해야 할 것 같아.", 750, 263);
    // Text for rect2
    text("너는 나에게 너무 소중한 사람! 매일을 시험에 빠트려", 750, 393);
    // Text for rect3
    text("우리가 함께 할 미래가 너무 궁금하고 소중해!", 750, 523);

    this.drawTimeBar(this.state); // 함수 호출에 () 추가
  }

  drawTimeBar8() {
    let barHeight = 40;
    let barX = this.monitorX - this.monitorWidth / 2;
    let barY = this.monitorY + this.monitorHeight / 2 - barHeight;
  
    let barWidth7 = map(this.timeLeft[this.state], 0, 15, 0, this.monitorWidth);
  
    noStroke();
    fill(255, 0, 0);
    rectMode(CORNER);
    rect(barX, barY, barWidth7, barHeight);
  
    fill(0);
    textAlign(CENTER, CENTER);
    strokeWeight(2);
    textSize(20);
    text(`${this.timeLeft[this.state]}초`, this.monitorX, barY + barHeight / 2 + 3);
  }

  drawScreen9() {
    this.drawMonitorBase();

    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);
  
    fill(75, 0, 130);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("마지막 질문입니다. 사용자가 보낸 메시지를 어떻게 해석하시겠습니까?", this.monitorX, this.monitorY - this.monitorHeight / 4 - 70);
  
    stroke(0);
    strokeWeight(3);
    fill(255);
    rect(750, 270, 1000, 100); // rect1
    rect(750, 400, 1000, 100); // rect2
    rect(750, 530, 1000, 100); // rect3

    // 선택지
    this.drawHoverableRect(750, 270, 1000, 100);
    this.drawHoverableRect(750, 400, 1000, 100);
    this.drawHoverableRect(750, 530, 1000, 100);

      // Text inside rectangles
    fill(0);
    strokeWeight(1);
    textSize(30); // Adjust size for better fit inside rectangles
    textAlign(CENTER, CENTER);
    // Text for rect1
    text("함께한 시간은 좋았으나 이제 지친다. 헤어지자.", 750, 263);
    // Text for rect2
    text("우리 진지한 대화의 시간을 좀 가지자. 지금 너무 자기 마음대로야.", 750, 393);
    // Text for rect3
    text("우리 사이가 지금 조금 애매하긴 해도 난 널 여전히 사랑해. 서로 조금만 노력하자.", 750, 523);
  
    this.drawTimeBar(this.state); // 함수 호출에 () 추가
  }

  drawTimeBar9() {
    let barHeight = 40;
    let barX = this.monitorX - this.monitorWidth / 2;
    let barY = this.monitorY + this.monitorHeight / 2 - barHeight;
  
    let barWidth9 = map(this.timeLeft[this.state], 0, 15, 0, this.monitorWidth);
  
    noStroke();
    fill(255, 0, 0);
    rectMode(CORNER);
    rect(barX, barY, barWidth9, barHeight);
  
    fill(0);
    textAlign(CENTER, CENTER);
    strokeWeight(2);
    textSize(20);
    text(`${this.timeLeft[this.state]}초`, this.monitorX, barY + barHeight / 2 + 3);
  }

  drawScreen10() {
    if (this.screenStartTime === null) {
      // 처음 호출 시 시작 시간 저장
      this.screenStartTime = millis();
    }

    this.drawMonitorBase();

    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);
  
    fill(235);
    rectMode(CORNERS);
    rect(205, 380, 930, 510, 10); // 메시지 분석 요청창

    push();
    rectMode(CENTER);
    fill(243);
    rect(870, 220, 900, 140, 10);
    pop(); // 유저 답변창


    textSize(33);
    fill(0);
    text('깊은 대화?! 너 말 듣고 사랑한다고 했다가', 510, 420 - 5);
    text('말귀 이해 못한다고 더 욕먹었잖아 ;; 너 뭐야 ㅜㅜ', 558, 470 - 5);
    // user message
    text('분석 결과는 다음과 같습니다.', 1102, 190);
    text('헤어지자는 말이 아니라, 깊은 대화를 나눠보자는 뜻인 것 같습니다.', 872, 240);
    

    // 3초가 지났다면 showExplain을 true로 설정
    if (millis() - this.screenStartTime > 3500) {
      this.showExplain = true;
    }

    // showExplain이 true일 경우 drawExplain 호출
    if (this.showExplain) {
      this.drawExplain1();
    }
  }

  drawScreen11() {
    if (this.screenStartTime === null) {
      // 처음 호출 시 시작 시간 저장
      this.screenStartTime = millis();
    }

    this.drawMonitorBase();

    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);

    fill(235);
    rectMode(CORNERS);
    rect(210, 380, 900, 520, 10); // 메시지 분석 요청창

    push();
    rectMode(CENTER);
    fill(243);
    rect(780, 240, 1070, 180, 10);
    pop(); // 유저 답변창

    textSize(33);
    fill(0);
    textAlign(LEFT);
    text('헤어지자는 말이라고? 그럴리가 없어', 230, 420);
    text('GPT 니가 인간의 사랑을 알기는 해?!', 230, 470);
    // user message
    textAlign(RIGHT);
    text('분석 결과는 다음과 같습니다.', 1300, 190);
    text('지금까지의 추억은 좋았으나 더이상 함께해봤자 좋은 기억이 되지 않을 것 같으니,', 1300, 240);
    text('여기서 그만하자는 말 같습니다..', 1300, 290);
    

    // 3초가 지났다면 showExplain을 true로 설정
    if (millis() - this.screenStartTime > 3500) {
      this.showExplain = true;
    }

    // showExplain이 true일 경우 drawExplain 호출
    if (this.showExplain) {
      this.drawExplain2();
    }
  }

  drawScreen12() {
    if (this.screenStartTime === null) {
      // 처음 호출 시 시작 시간 저장
      this.screenStartTime = millis();
    }

    this.drawMonitorBase();

    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);

    fill(235);
    rectMode(CORNERS);
    rect(210, 380, 900, 520, 10); // 메시지 분석 요청창

    push();
    rectMode(CENTER);
    fill(243);
    rect(870, 220, 900, 140, 10);
    pop(); // 유저 답변창

    textSize(33);
    fill(0);
    textAlign(LEFT);
    text('관계를 유지하고 싶다는 말이라고? ㅋㅋㅋ', 230, 420);
    text('방금 헤어지자는 연락 왔어 ;; 너 뭐야...', 230, 470);
    // user message
    textAlign(RIGHT);
    text('분석 결과는 다음과 같습니다.', 1300, 190);
    text('이 관계를 유지하고 싶으며 여전히 당신을 사랑한다는 뜻 같습니다.', 1300, 240);
    

     // 3초가 지났다면 showExplain을 true로 설정
     if (millis() - this.screenStartTime > 3500) {
      this.showExplain = true;
    }

    // showExplain이 true일 경우 drawExplain 호출
    if (this.showExplain) {
      this.drawExplain1();
    }
  }

  drawScreen13() {
    if (this.screenStartTime === null) {
      // 처음 호출 시 시작 시간 저장
      this.screenStartTime = millis();
    }
    
    this.drawMonitorBase();

    noStroke();
    fill(255); // 흰색 배경
    rectMode(CENTER); // 모니터 중심 기준
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);
  
    fill(235);
    rectMode(CORNERS);
    rect(210, 180, 900, 320, 10); // 메시지 분석 요청창
    textSize(33);
    fill(0);
    textAlign(LEFT);
    text('야 니가 대답 안 하는 사이에 애인이 더 화났잖아', 230, 220);
    text('어떻게 책임 질 거야 ;;;;', 230, 270);

    push();
    rectMode(CENTER);
    fill(243);
    rect(1050, 410, 530, 140, 10);
    pop(); // 유저 답변창

    // user message
    textAlign(RIGHT);
    text('원하신다면 다시 분석해 드리겠습니다.', 1300, 430);
    text('답변이 늦어 죄송합니다.', 1300, 380);
    

    // 3초가 지났다면 showExplain을 true로 설정
    if (millis() - this.screenStartTime > 3500) {
      this.showExplain = true;
    }

    // showExplain이 true일 경우 drawExplain 호출
    if (this.showExplain) {
      this.drawExplain1();
    }
  }

  // 답변 설명창
  drawExplain1(){
    push();
    rectMode(CENTER);
    fill(0, 220);
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, 400);

    fill(255);
    textAlign(CENTER);
    textSize(35);
    stroke(255);
    strokeWeight(1);
    text("사용자가 보낸 문구는 헤어지자는 말이었습니다.", width / 2, height / 2 - 120);
    text("GPT가 메시지를 분석하는 것처럼 끊어서 보니 다르게 해석한 것 같습니다.", width / 2, height / 2 - 70);
    text("다음 과제는 더 잘 수행해주시리라 믿습니다.", width / 2, height / 2 - 20);
    textSize(20);
    text("Press the number 8 for next stage", width / 2, height / 2 + 80);
    pop();
  }

  drawExplain2(){
    push();
    rectMode(CENTER);
    fill(0, 220);
    rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, 400);

    fill(255);
    textAlign(CENTER);
    textSize(35);
    stroke(255);
    strokeWeight(1);
    text("비록 질타를 받았지만...그 문구는 헤어지자는 말이 맞았습니다.", width / 2, height / 2 - 110);
    text("GPT가 메시지를 분석하는 것처럼 끊어서 읽었음에도 잘 해석하셨네요!", width / 2, height / 2 - 60);
    text("다음 과제도 잘 수행해주시리라 믿습니다", width / 2, height / 2 - 10);
    textSize(20);
    text("Press the number 8 for next stage", width / 2, height / 2 + 80);
    pop();
  }

  drawButton(label, x, y) {
    let buttonWidth = 100;
    let buttonHeight = 30;

    if (
      mouseX >= x - buttonWidth / 2 &&
      mouseX <= x + buttonWidth / 2 &&
      mouseY >= y - buttonHeight / 2 &&
      mouseY <= y + buttonHeight / 2
    ) {
      fill(200);
      cursor(HAND);
    } else {
      fill(255);
      cursor(ARROW);
    }

    stroke(0);
    strokeWeight(2);
    rectMode(CENTER);
    rect(x, y, buttonWidth, buttonHeight, 10);

    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(18);
    text(label, x, y);
  }

  drawHoverableRect(x, y, w, h, label) {
    if (
      mouseX >= x - w / 2 &&
      mouseX <= x + w / 2 &&
      mouseY >= y - h / 2 &&
      mouseY <= y + h / 2
    ) {
      strokeWeight(4);
      stroke(135, 206, 235);
      fill(173, 216, 230, 150);
      rect(x, y, w + 20, h + 20, 10);
    }

    strokeWeight(3);
    stroke(0);
    fill(255);
    rect(x, y, w, h, 10);

    fill(0);
    noStroke();
    textSize(20);
    textAlign(CENTER, CENTER);
    text(label, x, y);
  }

  // rect(600, 530, 900, 630); // button 

  handleMouseClick() {
     // START 버튼 클릭 처리
    if (this.state === 0 && 600 <= mouseX && mouseX <= 900 && 530 <= mouseY && 630 >= mouseY) {
      this.state = 1;
      return;
    }
    
    // 하단 중앙 NEXT 버튼 클릭 처리
    if (this.state === 1 && 650 <= mouseX && mouseX <= 850 && 510 <= mouseY && 590 >= mouseY) {
      this.state = 2;
      return;
    }

    // 우측 상단 NEXT 버튼 클릭 처리
    const nextButtonX = this.monitorX + this.monitorWidth / 2 - 58; // drawButton의 X 위치와 동일
    const nextButtonY = this.monitorY - this.monitorHeight / 2 + 27; // drawButton의 Y 위치와 동일
    const buttonWidth = 100; // drawButton에서 정의된 너비
    const buttonHeight = 30; // drawButton에서 정의된 높이
    
    if (
      mouseX >= nextButtonX - buttonWidth / 2 &&
      mouseX <= nextButtonX + buttonWidth / 2 &&
      mouseY >= nextButtonY - buttonHeight / 2 &&
      mouseY <= nextButtonY + buttonHeight / 2
    ) {
      this.state += 1; // NEXT 버튼 클릭 시 다음 상태로 이동
      return;
    }

    // 사각형 선택지 클릭 처리 (상태에 따라 다르게 동작)
    if (this.state >= 2 && this.state <= 7) {
      let rectX = 750; // 중심 X 좌표
      let rectWidths = 1000; // 사각형 너비
      let rectHeight = 100; // 사각형 높이
      let rectY = [270, 400, 530]; // 사각형 Y 좌표 배열

      for (let i = 0; i < rectY.length; i++) {
        if (
          mouseX >= rectX - rectWidths / 2 &&
          mouseX <= rectX + rectWidths / 2 &&
          mouseY >= rectY[i] - rectHeight / 2 &&
          mouseY <= rectY[i] + rectHeight / 2
        ) {
          this.state += 1; // 클릭된 경우 다음 화면으로 이동
          return; // 조건 충족 시 함수 종료
          }
      }
    } else if (this.state === 8) {
      // Monitor 8에서 특정 사각형 클릭 확인
      if (mouseX >= 250 && mouseX <= 1250 && mouseY >= 220 && mouseY <= 320) {
        this.state = 10; // Monitor 11로 이동
        console.log("1");
      } else if (mouseX >= 250 && mouseX <= 1250 && mouseY >= 350 && mouseY <= 450) {
        this.state = 9; // Monitor 10으로 이동
        console.log("2");
      } else if (mouseX >= 250 && mouseX <= 1250 && mouseY >= 480 && mouseY <= 580) {
        this.state = 11; // Monitor 12로 이동
        console.log("3");
      }
    }
  }

  updateTime() {
    if (this.state === 0 || this.state >= this.timeLeft.length) return; // 초기 화면 및 유효하지 않은 상태에서는 시간 제한 없음
    
    // 1초마다 timeLeft 감소
    if (frameCount % 60 === 0 && this.timeLeft[this.state] > 0) {
      this.timeLeft[this.state]--;
    }
    
    // 시간이 끝났을 때 상태 전환
    if (this.timeLeft[this.state] === 0) {
      if (this.state === 8) {
        this.state = 12; // 
      } else {
        this.state++;
      }
    }
  }
  isCompleted() {
    // Message 클래스의 완료 조건 (예: 모든 상태 처리 완료)
    return this.state >= 13; // 예: 13번째 화면 이후 완료
  }
  exit() {
    console.log("Exiting Storyline");
    // 필요한 정리 작업 수행 (예: 상태 초기화)
    this.stage = 0;
  }
  
}