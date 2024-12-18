let storyline, message, strawberry, game, gameState, ending, imageDisplay1, imageDisplay2, imageDisplay3, imageDisplay4;
let currentStage = null;
let systemFont;
let chatFont;
// let offset = 5;

//배수빈수정
let capturedImage = null;
let cam;
let supabase;
let qrcode;
let imageDateTime = "";
let imageName = ""
let currentFrameImage = null;
let username = ""

const dataURLtoFile = (dataurl, fileName) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, { type: mime });
};


async function uploadImageToSupabase(imageData) {
  imageDateTime = `${year()}${month()}${day()}_${hour()}${minute()}${second()}`
  imageName = `img_${imageDateTime}.png`
  console.log(imageName)
  const imageFile = dataURLtoFile(imageData, imageName);
  console.log(imageFile)
  const { data, error } = await supabase.storage
    .from("IICT2024-2")
    .upload(`public/${imageName}`, imageFile, {
      contentType: "image/png",
      cacheControl: "3600",
      upsert: false,
    });
  if (error) {
    console.error("Error uploading image:", error);
  } else {
    console.log("Image uploaded successfully:", data);
  }
}


//끝


function preload() {
  imageDisplay1 = new ImageDisplay1();
  imageDisplay2 = new ImageDisplay2();
  imageDisplay3 = new ImageDisplay3();
  imageDisplay4 = new ImageDisplay4();
  systemFont = loadFont("assets/DungGeunMo.ttf");
  chatFont = loadFont("assets/LINESeedKR.ttf");
  storyline = new Storyline(goToImageDisplay1);
  storyline.preloadAssets(); // 기존 preloadAssets 호출 유지

  strawberry = new Strawberry();
  strawberry.preload();
  ending = new Ending();
}

// function mouseClicked() {
//   let currentFrameImage = get();
//   let base64Image = currentFrameImage.canvas.toDataURL();
//   uploadImageToSupabase(base64Image);
// }

function setup() {
  createCanvas(1500, 800);
  game = new QuestionGame(width, height);
  gameState = new GameState();
  gameState.initializeWords();
  message = new Message(); // Message 클래스 초기화
  currentStage = storyline;

  //배수빈 수정
  cam = createCapture(VIDEO);
  cam.size(400, 300);
  cam.hide();

  supabase = createClient(
    'https://lfwvgjbzgpsdrswzpdaw.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxmd3ZnamJ6Z3BzZHJzd3pwZGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5ODE1NDIsImV4cCI6MjA0OTU1NzU0Mn0.6rWEZZ_EFgRZKhUuP7q6AgMBu490Ys91UeJYke8BgA8'
  );
}

function draw() {
  background(220);
  //textFont(systemFont);
  //textFont(chatFont);
  
  if (currentStage === storyline) {
    textFont(systemFont);
    // Storyline 클래스의 메서드 호출
    currentStage.drawScene?.(); // Storyline-specific draw method
  } else if (currentStage === imageDisplay1) {
    // imageMode(CENTER);
    textFont(chatFont);
    imageDisplay1.drawGradient();
    imageDisplay1.screen();
    imageDisplay1.drawImage();
  } else if (currentStage === game) {
    textFont(chatFont);
    currentStage.drawGradient?.();
    currentStage.screen?.();
    currentStage.render?.();
  } else if (currentStage === imageDisplay2) {
    // imageMode(CENTER);
    textFont(chatFont);
    imageDisplay2.drawGradient();
    imageDisplay2.screen();
    imageDisplay2.drawImage();
  } else if (currentStage === gameState) {
    textFont(chatFont);
    currentStage.drawGradient?.();
    currentStage.screen?.();
    currentStage.render?.();
  } else if (currentStage === imageDisplay3) {
    // imageMode(CENTER);
    textFont(chatFont);
    imageDisplay3.drawGradient();
    imageDisplay3.screen();
    imageDisplay3.drawImage();
  } else if (currentStage === message) {
    textFont(chatFont);
    // Message 클래스의 메서드 호출
    currentStage.drawGradient?.();
    currentStage.drawScreenContent?.();
    currentStage.updateTime?.();
  } else if (currentStage === imageDisplay4) {
    // imageMode(CENTER);
    imageDisplay4.drawGradient();
    imageDisplay4.screen();
    imageDisplay4.drawImage();
  } else if (currentStage === strawberry) {
    textFont(chatFont);
    // Strawberry 클래스의 메서드 호출
    currentStage.draw?.(); // Strawberry-specific draw method
  } else if (currentStage === ending) {
    textFont(systemFont);
    currentStage.drawScene?.();
  } else {
    // 초기 화면 (단계 선택 대기)
    push();
    background(0);
    textFont(systemFont);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255);
    text("숫자 '1'을 눌러 게임을 시작하세요", width / 2, height / 2);
    pop();
  }
}

function goToImageDisplay1() {
  storyline.exit();
  currentStage = imageDisplay1;
}

// function goToGame() {
//   currentStage = game;
// }

// function goToImageDisplay2() {
//   currentStage = imageDisplay2;
// }

// function goToGameState() {
  
// }

// function goToImageDisplay3() {
  
// }

// function goToMesssage() {
  
// }

// function goToImageDisplay4() {
  
// }

// function goToStrawberry() {
  
// }

// function () {
  
// }

function keyPressed() {
  // currentStage?.exit?.();
  if (key === '1') {
    currentStage = storyline; // Storyline 활성화
    currentStage.setupCanvas?.();
    
    console.log("Storyline started");
  } else if (key === '2') {
    // goToImageDisplay1();
  } else if (key === '3') {
    currentStage = game; //Question game
    console.log("Questiongame started");
  } else if (key === '4') {
    currentStage = imageDisplay2;
  } else if (key === '5') {
    currentStage = gameState; //논문 요약
    console.log(" started");
  } else if (key === '6') {
    currentStage = imageDisplay3;
  } else if (key === '7') {
    currentStage = message; // Message 활성화
    currentStage.setupCanvas?.();
    console.log("Message started");
  } else if (key === '8') {
    currentStage = imageDisplay4;
  } else if (key === '9') {
    currentStage?.exit?.();
    currentStage = strawberry; // Strawberry 활성화
    // currentStage.setupCanvas?.();
    currentStage.setup?.();
    console.log("Strawberry started");
  } else if (key === '0') {
    currentStage = ending;
  }
}

function mousePressed() {
  currentStage?.mousePressed?.();
  currentStage?.handleMouseClick?.(); // 클릭 이벤트 처리
  currentStage?.handleMousePressed?.(); // 클릭 이벤트 처리
  currentStage?.handleMousePress?.(mouseX, mouseY);
}

function mouseReleased() {
  currentStage?.mouseReleased?.();
}