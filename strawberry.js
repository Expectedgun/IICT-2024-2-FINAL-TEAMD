class Strawberry {
  constructor() {
    this.drawingCanvas;
    this.undoButton;
    this.resetButton;
    this.eraserButton;
    this.nextButton;
    this.reactionButton;
    this.startButton;
    this.classifier;
    this.doodleResult = "";
    this.showResultPage = false;
    this.isDrawing = false;
    this.eraserMode = false;
    this.brushColor = "black";
    this.brushSize = 40;
    this.resultDiv;
    this.savedImage;
    this.historyStack = [];
    this.drawingScreen = false; // 그리기 화면 상태
    this.thirdScreen = false; // 세 번째 화면 상태
    this.resultLabel = ""; // 분류 결과 저장
    this.drawStart = false;
    this.thirdScreenStartTime = null; // 세 번째 화면 시작 시간
    this.showExplain1 = false; // drawExplain1 표시 여부
    this.showExplain2 = false;
  }

  preload() {
    this.classifier = ml5.imageClassifier("DoodleNet", () => this.modelReady());
  }


  setup() {
    this.drawGradient();
    this.createScreen();
    this.setupCanvas();

    // 초기 상태 설정
    this.showInitialScreen();

    this.resultDiv = createDiv("Model loading...");
    this.resultDiv.style("font-size", "20px");
    this.resultDiv.style("color", "white");
    this.resultDiv.position(1000, 800);

    this.historyStack[0] = this.drawingCanvas.get();
    this.historyStack[1] = this.drawingCanvas.get();

    // Start 버튼 설정
    this.startButton = createButton("START!");
    this.styleNextButton(this.startButton);
    this.startButton.position(width / 2 - 100, (height * 4) / 5 - 80);
    this.startButton.mousePressed(() => {
      this.drawingScreen = true;
      this.startButton.hide();
      this.showButtons();
    });

    // Reaction 버튼 설정
    this.reactionButton = createButton("채팅창 바로가기");
    this.styleNextButton(this.reactionButton);
    this.reactionButton.position(width / 2 - 100, (height * 4) / 5 - 80);
    this.reactionButton.hide();

    this.reactionButton.mousePressed(() => {
      this.showResultPage = false;
      this.thirdScreen = true;
      this.reactionButton.hide();
    });

    this.hideButtons();
  }

  setupCanvas() {
    let canvasX = 160;
    let canvasY = 50;

    // Canvas 생성 및 초기화
    this.drawingCanvas = createGraphics(1180, 620);
    this.drawingCanvas.background(255);

    let buttonY = canvasY + (height * 4) / 5 - 70;

    // Undo 버튼 설정
    this.undoButton = createButton("Undo");
    this.styleButton(this.undoButton);
    this.undoButton.position(canvasX + 30, buttonY - 10);
    this.undoButton.mousePressed(() => this.undoLastAction());

    // Reset 버튼 설정
    this.resetButton = createButton("Reset");
    this.styleButton(this.resetButton);
    this.resetButton.position(canvasX + 180, buttonY - 10);
    this.resetButton.mousePressed(() => this.resetDrawing());

    // Eraser 버튼 설정
    this.eraserButton = createButton("Eraser Mode");
    this.styleButton(this.eraserButton);
    this.eraserButton.position(canvasX + 330, buttonY - 10);
    this.eraserButton.mousePressed(() => this.toggleEraserMode());

    // Next 버튼 설정
    this.nextButton = createButton("결과확인");
    this.styleNextButton(this.nextButton);
    this.nextButton.position(1120, buttonY - 30);
    this.nextButton.mousePressed(() => this.classifyDrawing());
  }


  modelReady() {
    console.log("DoodleNet 모델 로드 완료");
    this.resultDiv.html("Model ready!");
  }

  showInitialScreen(){
      // 초기 화면
    fill(255);
    noStroke();
    rectMode(CORNER);
    rect(160, 50, 1180, 620);

    rectMode(CORNERS);
    fill(235);
    rect(210, 177, 1020, 305, 10); // 메시지 분석 요청창

    push();
    rectMode(CENTER);
    fill(243);
    rect(1072, 369, 435, 86, 10);
    pop(); // 유저 답변창

    fill(0);
    textAlign(LEFT);
    textSize(35);
    text("전연인이 딸기 진짜 좋아했는데.. 겨울 되니까 생각나네...", 229, 210); // 요청 텍스트 
    text("GPT야, 딸기 좀 맛있게 그려줘봐...", 229, 266); // 요청 텍스트 
    textAlign(RIGHT);
    text('네, 딸기를 그려드리겠습니다.', 1280, 369 - 5); // 답변 텍스트

    push();
    stroke(75, 0, 130);
    strokeWeight(1);
    textAlign(CENTER);
    fill(75, 0, 130);
    textSize(45);
    text('지금 바로 딸기를 그려보세요!', 750, 500); 
    pop();
  }

  drawResultOverlay() {
      noStroke();
      fill(255); // 흰색 배경
      rectMode(CENTER);
      rect(width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);
    
      // 저장된 이미지를 결과 페이지에 표시
      if (this.savedImage) {
        let displayWidth = 500;
        let displayHeight = 350;
        let xOffset1 = width / 2 - displayWidth / 2 - 250; // 왼쪽 정렬
        let yOffset1 = height / 2 - displayHeight / 2 - 50;
    
        imageMode(CORNER);
        image(
          this.savedImage,
          xOffset1,
          yOffset1,
          displayWidth,
          displayHeight
        ); // 이미지 표시
      } else {
        console.error("No saved image to display!");
      }
    

      // 결과 텍스트 표시
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(40);
      text("결과는 다음과 같습니다.", width / 2 + 300, height / 2 - 100);
      text(this.doodleResult || "분류 중...", width / 2 + 300, height / 2 - 40);
      this.drawingScreen = false;
      this.reactionButton.show(); // 사용자 반응 보러가기 버튼
    
    }

    showThirdScreen() {
      if (this.thirdScreenStartTime === null) {
        this.thirdScreenStartTime = millis(); // 시작 시간 기록
      }
      
      fill(255);
      noStroke();
      rectMode(CORNER);
      rect(160, 50, 1180, 620);
      
      if (this.savedImage) {
        let displayWidth = 480;
        let displayHeight = 280;
        let xOffset = width / 2 + 60;
        let yOffset = height / 2 - 320;
        imageMode(CORNER);
        image(this.savedImage, xOffset, yOffset, displayWidth, displayHeight);
       
      }
    
      rectMode(CORNERS);
      fill(235);
      rect(210, 460, 780, 550, 10); // 메시지 창 배경
    
      push();
      rectMode(CENTER);
      fill(243);
      rect(1094, 450, 419, 90, 10);
      pop();

      fill(0);
      textAlign(RIGHT);
      textSize(35);
      text("맛있는 딸기를 그려봤어요!", 1280, 439);

      textAlign(LEFT);
      textSize(35);
      if (this.resultLabel === "strawberry") {
        text("와 완전 맛있겠다! 고마워 GPT야!!!", 237, 497);
      } else {
        text("야 이게 무슨 딸기야;;; 너 제정신이야?", 233, 497);
      }

       // 2.5초 후 설명창 표시
    if (millis() - this.thirdScreenStartTime > 3000) {
      if (this.resultLabel === "strawberry") {
        this.drawExplain2(); // 딸기를 제대로 그린 경우
      } else {
        this.drawExplain1(); // 딸기를 제대로 그리지 못한 경우
      }
    }
    }      

  draw() {
      
      background(220); // 캔버스 초기화
      this.drawGradient(); // 배경 그라디언트
      this.createScreen(); // 모니터 화면
      
      if (!this.drawingScreen && !this.showResultPage && !this.thirdScreen) {
        this.showInitialScreen(); // 초기 화면 표시
        return; // 다른 조건 실행 방지
        
      }
    
      if (this.drawingScreen && !this.showResultPage) {
        this.showDrawingScreen(); // 그리기 화면 표시
        return;
      }
    
      if (this.showResultPage) {
        console.log("결과표시")
        this.drawResultOverlay(); // 결과 화면 표시
        return;
      }
    
      if (this.thirdScreen) {
        this.showThirdScreen(); // 세 번째 화면 표시

        if (this.showExplain1) {
          this.drawExplain1(); // 3초 후 설명창 표시
        }
        
        return;
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

  createScreen() {
    rectMode(CENTER);
    noStroke();
    fill(255, 204, 153);
    rect(width / 2, (height * 4.5) / 5, width, 200);

    strokeWeight(20);
    stroke(0, 0, 0, 150);
    rect(width / 2, (height * 4) / 5 + 95, (width * 4) / 5 + 20, 25, 100);

    noStroke();
    fill(0, 0, 0, 80);
    quad(
      width / 10,
      (height * 4) / 5 + 95,
      (width * 9) / 10,
      (height * 4) / 5 + 95,
      width * 9 / 10 + 40,
      height,
      width / 10 - 40,
      height
    );

    stroke(50, 50, 50);
    fill(255);
    rect(width / 2, height / 2 - 40, (width * 4) / 5, (height * 4) / 5, 2);
    rect(width / 2, (height * 4) / 5 + 100, (width * 4) / 5 + 40, 20, 30);
    fill(50, 50, 50);
    rect(width / 2, (height * 4) / 5 + 60, 50, 40);
  }

  styleButton(button) {
    button.size(120, 50);
    button.style("background-color", "#333");
    button.style("color", "white");
    button.style("border", "none");
    button.style("border-radius", "10px");
    button.style("font-family", "Arial, sans-serif");
    button.style("font-size", "16px");
  }

  styleNextButton(button) {
    button.size(200, 70);
    button.style("background-color", "#E1F6FF");
    button.style("color", "BLACK");
    button.style("border", "none");
    button.style("border-radius", "10px");
    button.style("font-family", "Arial, sans-serif");
    button.style("font-size", "25px");
  }

  mousePressed() {
    let canvasX = 160;
    let canvasY = 50;
  
    // 캔버스 내부에서만 그리기 시작
    if (
      mouseX > canvasX &&
      mouseX < canvasX + 
    this.drawingCanvas.width &&
      mouseY > canvasY &&
      mouseY < canvasY +
    this.drawingCanvas.height
      && this.drawStart
    ) {
      this.isDrawing = true;
    }
  }
  
  mouseReleased() {
    if (this.isDrawing) {
      // 현재 상태 저장
      this.historyStack[0] = 
    this.historyStack[1];
      this.historyStack[1] =
    this.drawingCanvas.get();
      this.isDrawing = false;
    }
    if(this.drawingScreen){
        this.drawStart = true;
    }
  }

  showDrawingScreen() {
    let canvasX = 160;
    let canvasY = 50;
    image(this.drawingCanvas, canvasX, canvasY); // 그리기 캔버스 표시
  
    if (!this.showResultPage && this.isDrawing && mouseIsPressed && this.drawStart) {
      if (
        mouseX > canvasX &&
        mouseX < canvasX + this.drawingCanvas.width &&
        mouseY > canvasY &&
        mouseY < canvasY + this.drawingCanvas.height
      ) {
        let canvasMouseX = mouseX - canvasX;
        let canvasMouseY = mouseY - canvasY;
  
        this.historyStack.push(this.drawingCanvas.get());
        // Drawing on the canvas
        this.drawingCanvas.stroke(this.eraserMode ? 255 : this.brushColor);
        this.drawingCanvas.strokeWeight(this.brushSize);
        this.drawingCanvas.line(
          canvasMouseX,
          canvasMouseY,
          pmouseX - canvasX,
          pmouseY - canvasY
        );
      }
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
    text("사용자가 요청한 딸기를 그리지 못해 욕을 먹으셨네요.", width / 2, height / 2 - 120);
    text("다음에는 사용자의 요청에 맞는 그림을 그리셔야 합니다.", width / 2, height / 2 - 60);
    text("이것을 끝으로 모든 과제를 완수하셨습니다. 퇴근하셔도 좋습니다.", width / 2, height / 2);
    textSize(20);
    text("Press the number 0 for next stage", width / 2, height / 2 + 100);
    pop();
  }

   // 답변 설명창
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
    text("사용자가 요청한 딸기를 그리셨네요. 잘하셨습니다!", width / 2, height / 2 - 120);
    text("다음에도 사용자가 요청한 그림을 잘 그려주시기 바랍니다.", width / 2, height / 2 - 60);
    text("이번 과제를 끝으로 모든 과제를 완수하셨습니다.", width / 2, height / 2);
    textSize(20);
    text("Press the number 0 for next stage", width / 2, height / 2 + 100);
    pop();
  }
  
  toggleEraserMode() {
    this.eraserMode = !this.eraserMode;
    this.eraserButton.html(this.eraserMode ? "Brush Mode" : "Eraser Mode");
  }

  undoLastAction() {
    if (this.historyStack.length > 0) {
      this.drawingCanvas.clear();
      this.drawingCanvas.background(255);
      this.drawingCanvas.image(this.historyStack[0], 0, 0);
    }
  }

  resetDrawing() {
    this.drawingCanvas.background(255);
  }

  classifyDrawing() {
      
      let img = this.drawingCanvas.get();
      this.savedImage = img; // 캔버스 이미지를 저장
      img.filter(GRAY);
    
      // Classify the drawing and handle results
      this.classifier.classify(img, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
    
        console.log("분류 결과: ", results); // 디버깅
        this.resultLabel = results[0].label;
        this.doodleResult = `${this.resultLabel} (${nf(
          results[0].confidence * 100,
          2,
          0
        )}%)`;
        this.showResultPage = true; // 결과 화면으로 전환
        console.log(this.showResultPage);//디버깅
      });
    
      this.hideButtons(); // 버튼 숨기기
    }
    
          
    hideButtons() {
      this.undoButton.hide();
      this.resetButton.hide();
      this.eraserButton.hide();
      this.nextButton.hide();
    }
  
    showButtons() {
      this.undoButton.show();
      this.resetButton.show();
      this.eraserButton.show();
      this.nextButton.show();
    }

    isCompleted() {
      // Strawberry 클래스의 완료 조건 (예: 세 번째 화면이 끝난 경우)
      return this.thirdScreen; // 세 번째 화면 표시 완료 시 단계 종료
    }
    exit() {
      console.log("Exiting Strawberry");
    
      // //버튼 제거
      // this.undoButton.remove();
      // this.resetButton.remove();
      // this.eraserButton.remove();
      // this.nextButton.remove();
    
      // //버튼 참조 삭제
      // this.undoButton = null;
      // this.resetButton = null;
      // this.eraserButton = null;
      // this.nextButton = null;
      //버튼이 존재하면 제거
      if (this.undoButton) {
         this.undoButton.remove();
         this.undoButton = null;
       }
      if (this.resetButton) {
         this.resetButton.remove();
         this.resetButton = null;
       }
      if (this.eraserButton) {
         this.eraserButton.remove();
         this.eraserButton = null;
       }
      if (this.nextButton) {
         this.nextButton.remove();
         this.nextButton = null;
       }
    }
  }


