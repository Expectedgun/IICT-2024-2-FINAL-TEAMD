class GameState {
    constructor() {
      // this.canvasWidth = 1500;
      // this.canvasHeight = 800;
      this.state = 0; // 0: 업무 시작 화면, 1: 과제 1, 2: 과제 1 평가 화면, 3: 과제 2, 4: 과제 2 평가 화면
      this.startTime = null;
      this.words = [];
      this.selectedWords = [];
      this.timeLeft = 15; // 15초 제한 시간
      this.timerStart = null;
    }
    render() {
      if (gameState.state === 0) {
        gameState.drawScreen1(); // 업무 시작 화면
      } else if (gameState.state === 1) {
        gameState.drawScreen2(); // 과제 1 화면
      } else if (gameState.state === 2) {
        gameState.drawTask1Evaluation(); // 과제 1 평가 화면
      } else if (gameState.state === 3) {
        gameState.drawScreen3(); // 과제 2 화면
      } else if (gameState.state === 4) {
        gameState.drawTask2Evaluation(); // 과제 2 평가 화면
      } else if (gameState.state === 5) {
        gameState.drawExplain1();
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
      rect(width / 2, (height * 4.5) / 5, width, 200); // 사무실 탁자
      strokeWeight(20);
  
      stroke(0, 0, 0, 150);
      rect(width / 2, (height * 4) / 5 + 95, (width * 4) / 5 + 20, 25, 100); // 모니터 그림자
      noStroke();
      fill(0, 0, 0, 80);
      quad(
        width / 10,
        (height * 4) / 5 + 95,
        (width * 9) / 10,
        (height * 4) / 5 + 95,
        (width * 9) / 10 + 40,
        height,
        width / 10 - 40,
        height
      );
  
      stroke(50, 50, 50);
      fill(30, 30, 30);
      rect(width / 2, height / 2 - 40, (width * 4) / 5, (height * 4) / 5, 2); // 모니터 본체
      rect(width / 2, (height * 4) / 5 + 100, (width * 4) / 5 + 40, 20, 30); // 모니터 받침
  
      fill(50, 50, 50);
      rect(width / 2, (height * 4) / 5 + 60, 50, 40); // 모니터 기둥
  
      noStroke();
      fill(255);
      rect(
        width / 2,
        height / 2 - 40,
        (width * 4) / 5 - 20,
        (height * 4) / 5 - 20,
        2
      );
    }
  
    drawScreen1() {
      noStroke();
      fill(255);
      rect(
        width / 2,
        height / 2 - 40,
        (width * 4) / 5 - 20,
        (height * 4) / 5 - 20,
        2
      ); // 모니터 내부
      rectMode(CORNERS);
      fill(235);
      rect(210, 180, 850, 300, 10); // 메시지 창
  
      fill(0);
      textSize(35);
      textAlign(LEFT, CENTER);
      text("GPT야 나 오늘 발표인데 논문을 못 읽었어", 230, 220 - 5);
      text("요약 좀 해주라", 230, 260);
  
      // START 버튼
      stroke(75, 0, 130);
      strokeWeight(1);
      fill(75, 0, 130);
      textAlign(CENTER, CENTER);
      textSize(40);
      text("START 버튼을 눌러 요약을 시작하세요!", 750, 470);
      stroke(0);
      strokeWeight(5);
      fill(255);
      rect(600, 530, 900, 630); // 버튼
      strokeWeight(3);
      fill(0);
      textSize(52);
      text("START", 750, 580 - 5); // 버튼 텍스트
    }
  
    drawScreen2() {
      fill(75, 0, 130);
      textSize(50);
      text("가장 많이 등장하는 중요한 단어를 모두 고르세요.", 750, 160);
  
      if (frameCount % 60 === 0 && this.timeLeft > 0) {
        this.timeLeft--; // 1초마다 감소
      } else if (this.timeLeft === 0) {
        this.evaluateTask1(); // 과제 1 평가로 전환
      }
  
      this.drawWords();
      this.drawTimeBar();
    }
  
    drawTask1Evaluation() {
      if (this.timerStart === null) {
        // 처음 호출 시 시작 시간 저장
        this.timerStart = millis();
      }
      noStroke();
      fill(255);
      rect(
        width / 2,
        height / 2 - 40,
        (width * 4) / 5 - 20,
        (height * 4) / 5 - 20,
        2
      ); // 모니터 내부
      rectMode(CORNERS);
      fill(235);
      rect(210, 180, 850, 300, 10); // 첫 메시지 창
      fill(243);
      rect(930, 335, 1310, 415, 10); // 유저 메시지 창
  
      fill(0);
      textSize(35);
      textAlign(LEFT, CENTER);
      text("GPT야 나 오늘 발표인데 논문을 못 읽었어", 230, 220 - 5);
      text("요약 좀 해주라", 230, 260 - 5);
  
      if (this.selectedWords.every((word) => word.word === "기후변화")) {
        fill(235);
        rect(210, 440, 540, 520, 10);
        fill(0);
        text("답변을 생성 중입니다...", 950, 375 - 5);
        text("아 느려 터졌네 진짜;", 230, 480 - 5);
      } else {
        fill(235);
        rect(210, 440, 650, 520, 10);
        fill(0);
        text("요약이 완료되었습니다!", 950, 375);
        text("뭐래 딱 봐도 그 내용 아닌데;", 230, 480 - 5);
      }

      if (millis() - this.timerStart > 5000) {
        this.state = 5;
        this.timerStart = millis(); // 타이머 초기화
        // this.timerStart = millis(); // 타이머 초기화
        // console.log(`drawEndScreenWithDelay: 상태가 ${nextState}로 전환됨`);
      }
    }
  
    drawScreen3() {
      fill(75, 0, 130);
      textSize(50);
      text("주제와 관련 없는 단어를 모두 고르세요.", 750, 160);
  
      if (frameCount % 60 === 0 && this.timeLeft > 0) {
        this.timeLeft--; // 1초마다 감소
      } else if (this.timeLeft === 0) {
        this.evaluateTask2(); // 과제 2 평가로 전환
      }
  
      this.drawWords();
      this.drawTimeBar();
    }
  
    drawTask2Evaluation() {
      if (this.timerStart === null) {
        // 처음 호출 시 시작 시간 저장
        this.timerStart = millis();
      }
      noStroke();
      fill(255);
      rect(
        width / 2,
        height / 2 - 40,
        (width * 4) / 5 - 20,
        (height * 4) / 5 - 20,
        2
      );
      rectMode(CORNERS);
      fill(235);
      rect(210, 180, 850, 300, 10);
      fill(243);
      rect(930, 335, 1310, 415, 10);
  
      fill(0);
      textSize(35);
      textAlign(LEFT, CENTER);
      text("GPT야 나 오늘 발표인데 논문을 못 읽었어", 230, 220 - 5);
      text("요약 좀 해주라", 230, 260 - 5);
      text("요약이 완료되었습니다!", 950, 375 - 5);
  
      let relevantWords = ["또한", "그래서", "이"];
      let relevantCounts = { "또한": 5, "그래서": 4, "이": 3 };
      let selectedRelevantWords = this.words.filter(
        (wordObj) => relevantWords.includes(wordObj.word) && wordObj.selectedTask2
      );
      let selectedIrrelevantWords = this.words.filter(
        (wordObj) =>
          !relevantWords.includes(wordObj.word) && wordObj.selectedTask2
      );
  
      let relevantCountCheck = relevantWords.every(
        (word) =>
          selectedRelevantWords.filter((wordObj) => wordObj.word === word)
            .length === relevantCounts[word]
      );
  
      if (relevantCountCheck && selectedIrrelevantWords.length === 0) {
        fill(235);
        rect(210, 440, 830, 520, 10);
        fill(0);
        text("오 중요한 것만 요약 잘 됐네 ㅎㅎ 고마워!", 230, 480 - 5);
      } else if (relevantCountCheck && selectedIrrelevantWords.length > 0) {
        fill(235);
        rect(210, 440, 605, 520, 10);
        fill(0);
        text("아 중요한 내용 빠졌잖아;", 230, 480- 5);
      } else if (!relevantCountCheck && selectedIrrelevantWords.length === 0) {
        fill(235);
        rect(210, 440, 750, 520, 10);
        fill(0);
        text("뭔 쓸데없는 내용까지 들어가있네...", 230, 480- 5);
      } else if (!relevantCountCheck && selectedIrrelevantWords.length > 0) {
        fill(235);
        rect(210, 440, 955, 520, 10);
        fill(0);
        text("뭐야 중요한 건 빠지고 쓸데없는 건 들어가있는데?", 230, 480- 5);
      }

      if (millis() - this.timerStart > 5000) {
          this.state = 5;
          this.timerStart = millis(); // 타이머 초기화
          // console.log(`drawEndScreenWithDelay: 상태가 ${nextState}로 전환됨`);
      }
    }
  
    evaluateTask1() {
      this.selectedWords = this.words.filter((word) => word.selectedTask1);
  
      if (
        this.selectedWords.length === 7 &&
        this.selectedWords.every((word) => word.word === "기후변화")
      ) {
        this.state = 3; // 과제 2 화면으로 전환
        this.initializeTask2Words();
        this.timeLeft = 15; // 제한 시간 초기화
      } else {
        this.state = 2; // 과제 1 평가 화면으로 전환
      }
    }
  
    evaluateTask2() {
      this.state = 4; // 과제 2 평가 화면으로 전환
    }

    drawExplain1(){
      push();
      rectMode(CENTER);
      fill(0, 220);
      rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, 400);
  
      fill(255);
      textAlign(CENTER);
      textSize(30);
      stroke(255);
      strokeWeight(1);
      text("저희 서비스는 효과적인 요약을 위해, ", width / 2, height / 2 - 120);
      text("텍스트의 내용 중 중요한 것과 그렇지 않은 것을 구분해서 처리합니다.", width / 2, height / 2 - 70);
      text("제한된 시간 내에 방대한 길이의 텍스트를 모두 확인하는 것이 쉽지만은 않죠?", width / 2, height / 2 - 20);
      text("이제 다음 업무로 넘어갑시다.", width / 2, height / 2 + 30);
      textSize(20);
      text("Press the number 6 for next stage", width / 2, height / 2 + 100);
      pop();
    }

    drawWords() {
      textSize(30);
      this.words.forEach(({ word, x, y, selectedTask1, selectedTask2 }) => {
        if (selectedTask1) {
          fill("blue"); // 과제 1: 파란색
        } else if (selectedTask2) {
          fill("red"); // 과제 2: 빨간색
        } else {
          fill("black"); // 선택되지 않은 단어
        }
        textAlign(CENTER, CENTER);
        text(word, x, y);
      });
    }
  
    drawTimeBar() {
      let barHeight = 40;
      let barX = 160;
      let barY = 630;
      let totalBarWidth = 1180;
      let barWidth = map(this.timeLeft, 0, 15, 0, totalBarWidth);
  
      noStroke();
      fill(255, 0, 0);
      rectMode(CORNER);
      rect(barX, barY, barWidth, barHeight);
  
      fill(0);
      textAlign(CENTER, CENTER);
      strokeWeight(2);
      textSize(20);
      text(`${this.timeLeft} 초`, barX + totalBarWidth / 2, barY + barHeight / 2);
    }
  
    initializeWords() {
      const wordData = [
        { word: "기후변화", count: 7 },
        { word: "서식지", count: 6 },
        { word: "환경", count: 5 },
        { word: "또한", count: 5 },
        { word: "그래서", count: 4 },
        { word: "이", count: 3 },
      ];
  
      let shuffledWords = [];
      wordData.forEach(({ word, count }) => {
        for (let i = 0; i < count; i++) {
          shuffledWords.push(word);
        }
      });
      shuffledWords = shuffledWords.sort(() => Math.random() - 0.5);
  
      let bubbleLeft = width / 2 - (width * 2) / 5 + 185;
      let bubbleTop = 260;
      let colWidth = 200;
      let rowHeight = 55;
  
      this.words = [];
      shuffledWords.forEach((word, index) => {
        let col = index % 5;
        let row = Math.floor(index / 5);
        let x = bubbleLeft + col * colWidth;
        let y = bubbleTop + row * rowHeight;
  
        if (y < height / 2 + 150) {
          this.words.push({
            word,
            x,
            y,
            selectedTask1: false,
            selectedTask2: false,
          });
        }
      });
    }
  
    initializeTask2Words() {
      this.words.forEach((wordObj) => {
        wordObj.selectedTask2 = false;
      });
    }

    handleMousePressed() {
        if (this.state === 0) {
          // START 버튼 클릭
          if (mouseX > 600 && mouseX < 900 && mouseY > 530 && mouseY < 630) {
            this.state = 1; // 과제 1 화면으로 전환
            this.startTime = millis();
          }
        } else if (this.state === 1 || this.state === 3) {
          this.words.forEach((wordObj) => {
            let wordWidth = textWidth(wordObj.word);
            let wordHeight = 30;
            if (
              mouseX > wordObj.x - wordWidth / 2 &&
              mouseX < wordObj.x + wordWidth / 2 &&
              mouseY > wordObj.y - wordHeight / 2 &&
              mouseY < wordObj.y + wordHeight / 2
            ) {
              if (this.state === 1) {
                wordObj.selectedTask1 = !wordObj.selectedTask1; // 과제 1: 단어 선택/해제
              } else if (this.state === 3) {
                if (!wordObj.selectedTask1) {
                  wordObj.selectedTask2 = !wordObj.selectedTask2; // 과제 2: 단어 선택/해제
                }
              }
            }
          });
        }
      }
  }
  