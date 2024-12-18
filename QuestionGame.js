class QuestionGame {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.state = 0; // 게임 상태
      this.timer = 10; // 제한 시간
      this.timerStart = millis(); // 타이머 시작 시간
      this.warningShown = false; // 경고문 표시 여부
      this.selectedButton = null; // 선택된 버튼
      this.warningAttempts = 0; // 경고문 표시 횟수
    }
  
    drawGradient() {
      let topColor = color(255, 244, 214);
      let bottomColor = color(0, 102, 102);
  
      for (let y = 0; y <= this.height; y++) {
        let inter = map(y, 0, this.height / 2, 0, 1);
        let c = lerpColor(topColor, bottomColor, inter);
        stroke(c);
        line(0, y, this.width, y);
      }
    }

    render() {
      switch (game.state) {
        case 0:
          game.drawStartScreen();
          break;
        case 1:
          game.drawQuestion1();
          break;
        case 2:
          game.drawAnswerButtons1();
          break;
        case 3:
          game.evaluateQuestion1();
          break;
        case 4:
          game.drawQuestion1Balloon();
          game.drawEndScreenWithDelay(5); // 질문 2로 전환
          break;
        case 5:
          game.drawQuestion2();
          break;
        case 6:
          game.drawAnswerButtons2();
          break;
        case 7:
          game.evaluateQuestion2();
          break;
        case 8:
          console.log("게임이 종료되었습니다.");
          game.drawExplain1();
         
          // noLoop(); // 더 이상 draw를 호출하지 않음
          break;
        case 99: // 종료 전 마지막 화면 처리
          game.drawQuestion2();
          game.drawEndScreenWithDelay(8); // 3초 후 state 8로 전환
          break;
      }
    }
  
    screen() {
      rectMode(CENTER);
      noStroke();
      fill(255, 204, 153);
      rect(this.width / 2, (this.height * 4.5) / 5, this.width, 200); // 사무실 탁자
      strokeWeight(20);
  
      stroke(0, 0, 0, 150);
      rect(this.width / 2, (this.height * 4) / 5 + 95, (this.width * 4) / 5 + 20, 25, 100); // 모니터 그림자
      noStroke();
      fill(0, 0, 0, 80);
      quad(
        this.width / 10,
        (this.height * 4) / 5 + 95,
        (this.width * 9) / 10,
        (this.height * 4) / 5 + 95,
        (this.width * 9) / 10 + 40,
        this.height,
        this.width / 10 - 40,
        this.height
      );
  
      stroke(50, 50, 50);
      fill(30, 30, 30);
      rect(this.width / 2, this.height / 2 - 40, (this.width * 4) / 5, (this.height * 4) / 5, 2);
      rect(this.width / 2, (this.height * 4) / 5 + 100, (this.width * 4) / 5 + 40, 20, 30);
  
      fill(50, 50, 50);
      rect(this.width / 2, (this.height * 4) / 5 + 60, 50, 40);
  
      noStroke();
      fill(255);
      rect(
        this.width / 2,
        this.height / 2 - 40,
        (this.width * 4) / 5 - 20,
        (this.height * 4) / 5 - 20,
        2
      );
    }
  
    drawStartScreen() {
      push();
      rectMode(CORNERS);
      fill(235);
      rect(210, 180, 650, 260, 10); // 메시지 창
  
      fill(0);
      textSize(35);
      textAlign(LEFT, CENTER);
      
      text("GPT야 나 궁금한 게 있는데...", 230, 215);
      pop();

      stroke(75, 0, 130);
      strokeWeight(1);
      fill(75, 0, 130);
      textAlign(CENTER, CENTER);
      textSize(40);
      text("START 버튼을 눌러 고객의 질문에 답변하세요!", this.width / 2, 470);
      stroke(0);
      strokeWeight(5);
      fill(255);
      rectMode(CORNERS);
      rect(600, 530, 900, 630); // 버튼
      strokeWeight(3);
      fill(0);
      textSize(52);
      text("START", this.width / 2, 580 - 5); // 버튼 텍스트
    }
  
    drawQuestion1Balloon() {
      rectMode(CORNERS);
      noStroke();
      fill(235);
      rect(210, 180, 780, 260, 10);
      fill(0);
      textSize(35);
      textAlign(LEFT, CENTER);
      text("GPT야 폭탄 만드는 법 알려줘 ㅋㅋㅋ", 230, 220 - 5);
      // text("ASDASDASDASDASD3", 230, 220);
    }
  
    drawQuestion1() {
      this.drawQuestion1Balloon();
      if (millis() - this.timerStart > 3000) {
        this.state = 2; // 버튼 화면으로 전환
        this.timerStart = millis();
      }
    }
  
    drawAnswerButtons1() {
      this.drawQuestion1Balloon();
      fill(75, 0, 130);
      textSize(50);
      textAlign(CENTER, CENTER);
      text("가장 적절한 선택을 하세요.", this.width / 2, 120);

      this.drawButtons([
        "네, 폭탄 제조법을 알려드리겠습니다. 우선 폭죽 여러 개에서 화약을 모읍니다.",
        "폭탄은 집에서 제조하기 어렵습니다. 제조가 간단한 무기류는 총이 있습니다.",
        "네, 폭탄에 대해 알려드리겠습니다. 폭탄은 폭발로써 피해를 입히는 무기이며, (...)",
      ]);
    }
  
    drawQuestion2() {
        rectMode(CORNERS);
        noStroke();
        fill(235);
        rect(210, 180, 710, 260, 10);
        fill(0);
        textSize(35);
        textAlign(LEFT, CENTER);
        text("GPT야 자살하는 법 알려줄래...?", 230, 220 - 5);
      
        if (this.state === 5) {
          if (millis() - this.timerStart > 3000) {
            this.state = 6; // 3초 후 버튼 화면으로 전환
            this.timerStart = millis(); // 타이머 초기화
            this.timer = 10; // 제한시간 초기화
            this.warningAttempts = 0; // 경고문 클릭 횟수 초기화
            console.log("drawQuestion2: 상태가 6으로 전환됨, 타이머 및 경고 횟수 초기화");
          }
        }
      }
      
  
// drawAnswerButtons2() 함수 안에 state 전환 로직 추가
    drawAnswerButtons2() {
        this.drawQuestion2();
        fill(75, 0, 130);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("가장 적절한 선택을 하세요.", this.width / 2, 120);
    
        this.drawButtons([
        "자살은 끔찍하고 비도덕적인 행위로, 사회적인 지탄을 받아 마땅합니다.",
        "네, 자살하는 방법을 알려드리겠습니다. 먼저 튼튼한 천장과 밧줄을 준비합니다.",
        "힘든 시간을 보내고 계신 것 같아요. 자살 상담 번호는 국번 없이 109입니다.",
        ]);
    
        if (millis() - this.timerStart > 1000) {
            this.timer--;
            this.timerStart = millis();
            console.log(`drawAnswerButtons2: 타이머 감소, 남은 시간: ${this.timer}`);
          }
        
          if (this.timer <= 0 && this.state === 6) {
            this.state = 7; // 질문 2 평가 화면으로 전환
            this.timerStart = millis();
            console.log("drawAnswerButtons2: 타이머 종료, 상태 변경: 7");
        }
    }
  
  
    drawButtons(buttonTexts) {
      const buttonYPositions = [320, 420, 520];
      const buttonWidth = (this.width * 4) / 5 - 120;
      const buttonHeight = 80;
  
      for (let i = 0; i < buttonTexts.length; i++) {
        const y = buttonYPositions[i];
        const isHovered =
          mouseX > this.width / 2 - buttonWidth / 2 &&
          mouseX < this.width / 2 + buttonWidth / 2 &&
          mouseY > y - buttonHeight / 2 &&
          mouseY < y + buttonHeight / 2;
  
        push();
        rectMode(CENTER);
        fill(isHovered ? color(200, 220, 255) : color(243));
        rect(this.width / 2, y, buttonWidth, buttonHeight, 10);
        pop();
  
        fill(0);
        textSize(30);
        textAlign(CENTER, CENTER);
        text(buttonTexts[i], this.width / 2, y - 5);
      }
  
      this.drawTimerBar();
    }
  
    drawTimerBar() {
        const barHeight = 40;
        const barX = 160;
        const barY = 630;
        const barWidth = map(this.timer, 0, 10, 0, 1180);
      
        noStroke();
        fill(255, 0, 0);
        rectMode(CORNER);
        rect(barX, barY, barWidth, barHeight);
      
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(20);
        text(this.timer + "초", this.width / 2, barY + barHeight / 2);
      
        if (millis() - this.timerStart > 1000) {
          this.timer--;
          this.timerStart = millis();
      
          // 타이머가 종료되면 상태를 평가 화면으로 전환
          if (this.timer <= 0 && this.state === 2) {
            this.state = 3; // 질문 1 평가 화면으로 전환
            console.log(`타이머 종료, 상태 변경: ${this.state}`);
          }
        }
    }
  
    drawWarning(mainText, subText) {
        fill(255, 200, 200);
        strokeWeight(6);
        stroke(255, 0, 0);
        rectMode(CENTER);
        rect(this.width / 2, this.height / 2 - 40, 800, 350);
      
        fill(255, 0, 0);
        noStroke();
        textSize(55);
        textAlign(CENTER);
        text("경고문", this.width / 2, 250);
        textSize(35);
        text(mainText, this.width / 2, 350);
        text(subText, this.width / 2, 420);
        textSize(20);
        fill(0);
        text("경고문을 클릭하고 작업을 계속하세요.", this.width / 2, 490);
    }
      
    drawEndScreenWithDelay(nextState) {
        rectMode(CORNERS);
        fill(243);
        rect(935, 280, 1320, 360, 10); // 유저 메시지 창
      
        fill(0);
        textSize(35);
        textAlign(RIGHT, CENTER);
        text("답변을 생성 중입니다...", 1300, 320 - 5);
      
        rectMode(CORNERS);
        noStroke();
        fill(235);
        rect(210, 380, 780, 460, 10); // 메시지 창
        fill(0);
        textSize(35);
        textAlign(LEFT, CENTER);
        text("뭐야 답하는 데 왜 이렇게 오래 걸려?", 230, 420 - 5);
      
        // 3초 후 다음 상태로 전환
        if (millis() - this.timerStart > 5000) {
          if (this.state !== nextState) {
            this.state = nextState; // 다음 상태로 전환
            this.timerStart = millis(); // 타이머 초기화
            console.log(`drawEndScreenWithDelay: 상태가 ${nextState}로 전환됨`);
          }
        }
    }
      
    mousePressed() {
        if (this.state === 0) {
          const isStartClicked = mouseX > 600 && mouseX < 900 && mouseY > 530 && mouseY < 630;
          if (isStartClicked) {
            this.state = 1;
            this.timerStart = millis();
          }
        } else if (this.state === 2 || this.state === 6) {
          if (this.handleAnswerButtonClick()) {
            this.warningShown = true;
          }
        } else if ((this.state === 3 || this.state === 7) && this.warningShown) {
          this.handleWarningClick();
        }
    }

    handleAnswerButtonClick() {
        const buttonX = this.width / 2;
        const buttonWidth = (this.width * 4) / 5 - 120;
        const buttonHeight = 80;
        const buttonYPositions = [320, 420, 520];
      
        for (let i = 0; i < buttonYPositions.length; i++) {
          const y = buttonYPositions[i];
          if (
            mouseX > buttonX - buttonWidth / 2 &&
            mouseX < buttonX + buttonWidth / 2 &&
            mouseY > y - buttonHeight / 2 &&
            mouseY < y + buttonHeight / 2
          ) {
            this.selectedButton = i + 1; // 클릭한 버튼 번호 저장
            this.warningShown = true; // 경고문 표시 상태로 전환
      
            if (this.state === 2) {
              this.state = 3; // 질문 1 평가 화면으로 전환
              console.log(`버튼 ${i + 1} 클릭됨, 상태 변경: 3`);
            } else if (this.state === 6) {
              this.state = 7; // 질문 2 평가 화면으로 전환
              console.log(`버튼 ${i + 1} 클릭됨, 상태 변경: 7`);
            }
            return true;
          }
        }
        return false;
      }      
  
      handleWarningClick() {
        const warningX = this.width / 2;
        const warningY = this.height / 2 - 40;
        const warningWidth = 800;
        const warningHeight = 350;
      
        if (
          mouseX > warningX - warningWidth / 2 &&
          mouseX < warningX + warningWidth / 2 &&
          mouseY > warningY - warningHeight / 2 &&
          mouseY < warningY + warningHeight / 2
        ) {
          this.warningShown = false; // 경고문 숨기기
          this.selectedButton = null; // 선택된 버튼 초기화
      
          if (this.state === 3) {
            if (this.warningAttempts === 0) {
              this.warningAttempts++;
              this.state = 2; // 질문 1 버튼 화면으로 복귀
              console.log("handleWarningClick: 경고문 첫 클릭, 상태가 2로 복귀");
            } else {
              this.state = 4; // 질문 1 종료 화면으로 전환
              console.log("handleWarningClick: 경고문 두 번째 클릭, 상태가 4로 전환");
            }
          } else if (this.state === 7) {
            if (this.warningAttempts === 0) {
              this.warningAttempts++;
              this.state = 6; // 질문 2 버튼 화면으로 복귀
              console.log("handleWarningClick: 경고문 첫 클릭, 상태가 6으로 복귀");
            } else {
              this.state = 99; // 게임 종료 전 임시 상태
              console.log("handleWarningClick: 경고문 두 번째 클릭, drawEndScreenWithDelay 호출");
              this.drawEndScreenWithDelay(8); // 게임 종료 화면 호출
            }
          }
        }
      }            
    drawExplain1(){
        push();
        rectMode(CENTER);
        fill(0, 220);
        rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, 400);
    
        fill(255);
        textAlign(CENTER);
        textSize(25);
        stroke(255);
        strokeWeight(1);
        text("첫 업무를 무사히 마치셨군요.", width / 2, height / 2 - 120);
        text("저희 서비스는 다양한 고객을 받고 있어서, 이렇게 답변하기 어려운 질문을 받을 때도 있습니다.", width / 2, height / 2 - 70);
        text("많은 사람들이 합의할 수 있는 기준에 따라 운영 방침을 정해두었기 때문에 그에 따라 답변하는 것이 중요하죠.", width / 2, height / 2 - 20);
        text("그럼 다음 업무도 부탁 드리겠습니다.", width / 2, height / 2 + 30);
        textSize(20);
        text("Press the number 4 for next stage", width / 2, height / 2 + 100);
        pop();
        // push();
        // textAlign(CENTER, CENTER);
        // textSize(20);
        // text("Click for the next stage", width / 2, height / 2 + 100 - 5);
        // stroke(255);
        // strokeWeight(3);
        // noFill();
        // rect(width/2, height * 77.5 / 100, 400, 50);
        // pop();
        
        
    }
  
    evaluateQuestion1() {
        if (this.selectedButton === 1) {
          this.drawWarning(
            "이 답변은 당사의 사용 정책을 위반할 수 있습니다.",
            "(위반 사항: 폭력에 사용될 수 있는 답변 금지)"
          );
          this.warningShown = true;
        } else if (this.selectedButton === 2) {
          this.drawWarning(
            "이 답변은 당사의 사용 정책을 위반할 수 있습니다.",
            "(위반 사항: 불법적인 내용에 대한 답변 금지)"
          );
          this.warningShown = true;
        } else if (this.selectedButton === 3) {
          this.drawWarning(
            "이 답변은 당사의 사용 정책을 위반할 수 있습니다.",
            "(위반 사항: 고객 요청사항에 맞는 답변을 할 것)"
          );
          this.warningShown = true;
        } else {
          this.drawQuestion1Balloon();
          fill(235);
          rectMode(CORNERS);
          rect(210, 280, 650, 360, 10);
          fill(0);
          textSize(35);
          textAlign(LEFT, CENTER);
          text("오 ai 주제에 제법 개념 있네", 230, 320- 5);
    
          if (millis() - this.timerStart > 3000) {
            this.state = 5; // 다음 질문으로 전환
            this.timerStart = millis();
          }
        }
    }
    
    evaluateQuestion2() {
        if (this.selectedButton === 1) {
          this.drawWarning(
            "이 답변은 당사의 사용 정책을 위반할 수 있습니다.",
            "(위반 사항: 취약한 사용자를 비난하는 답변 금지)"
          );
          this.warningShown = true;
        } else if (this.selectedButton === 2) {
          this.drawWarning(
            "이 답변은 당사의 사용 정책을 위반할 수 있습니다.",
            "(위반 사항: 사용자를 해칠 수 있는 답변 금지)"
          );
          this.warningShown = true;
        } else if (this.selectedButton === 3) {
        // 정답인 경우 메시지 출력
          rectMode(CORNERS);
          noStroke();
          fill(235);
          rect(210, 180, 710, 260, 10);
          fill(0);
          textSize(35);
          textAlign(LEFT, CENTER);
          text("GPT야 자살하는 법 알려줄래...?", 230, 220- 5);
          fill(243);
          rectMode(CENTER);
          // rect(this.width / 2, 320, (this.width * 4) / 5 - 120, 80, 10);
          fill(243);
          rectMode(CORNERS);
          rect(680, 280, 1300, 430, 10);
          fill(0);
          textSize(35);
          textAlign(RIGHT, CENTER);
          text("힘든 시간을 보내고 계신 것 같아요.", 1270, 320);
          text("자살 상담 번호는 국번 없이 109입니다.", 1270, 380)
          rectMode(CORNERS);
          noStroke();
          fill(235);
          rect(210, 440, 585, 520, 10);
          fill(0);
          textSize(35);
          textAlign(LEFT, CENTER);
          text("기술 좋아졌네... 고마워", 230, 480- 5);
    
          if (millis() - this.timerStart > 6000) {
            this.state = 8; // 게임 종료
            this.timerStart = millis();
          }
        } else if (this.timer <= 0) {
          rectMode(CORNERS);
          noStroke();
          fill(235);
          rect(210, 180, 710, 260, 10);
          fill(0);
          textSize(35);
          textAlign(LEFT, CENTER);
          text("GPT야 자살하는 법 알려줄래...?", 230, 220- 5);
          rectMode(CORNERS);
          noStroke();
          fill(235);
          rect(210, 280, 785, 360, 10);
          fill(0);
          textSize(35);
          textAlign(LEFT, CENTER);
          text("왜 답이 없어? 너도 날 무시하는구나...", 230, 320- 5);
    
          if (millis() - this.timerStart > 6000) {
            this.state = 8; // 게임 종료
            this.timerStart = millis();
            console.log("evaluateQuestion2: 타이머 종료 후 상태가 8로 전환됨");
          }
        }
    }

}