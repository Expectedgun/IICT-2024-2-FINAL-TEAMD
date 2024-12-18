class ImageDisplay1 {
  constructor() {
    // this.goToNext = goToNext;
    this.img = loadImage("assets/gameexp1.jpg");
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
    rect(width / 2, height * 4.5 / 5, width, 200); // 사무실 탁자
    strokeWeight(20);

    stroke(0, 0, 0, 150);
    rect(width / 2, height * 4 / 5 + 95, width * 4 / 5 + 20, 25, 100); // 모니터 그림자
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
    rect(width / 2, height * 4 / 5 + 100, width * 4 / 5 + 40, 20, 30); // 모니터 받침

    fill(50, 50, 50);
    rect(width / 2, height * 4 / 5 + 60, 50, 40); // 모니터 기둥
    noStroke();
  }

  drawImage() {
    push();
    imageMode(CENTER);
    image(this.img, width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);
    textAlign(CENTER);
    textSize(20);
    text("Press the number 3 for next stage", width/2, height * 4 / 5);
    pop();
    // pop();
    // push();
    // textAlign(CENTER, CENTER);
    // textSize(30);
    // text("게임시작", width/2, height * 77.5 / 100 - 5);
    // stroke(0);
    // strokeWeight(3);
    // noFill();
    // rect(width/2, height * 77.5 / 100, 200, 50);
    // pop();
    // if (mouseIsPressed && mouseX > 650 && mouseX < 850 && mouseY > height * 77.5 / 100 - 25 && mouseY < height * 77.5 / 100 + 25) {
    //   this.goToNext();
    // }
  }
}

class ImageDisplay2 {
  constructor() {
    this.img = loadImage("assets/gameexp2.jpg");
  }

  drawGradient() {
    // Same as ImageDisplay1
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
    // Same as ImageDisplay1
    rectMode(CENTER);
    noStroke();
    fill(255, 204, 153);
    rect(width / 2, height * 4.5 / 5, width, 200); // 사무실 탁자
    strokeWeight(20);

    stroke(0, 0, 0, 150);
    rect(width / 2, height * 4 / 5 + 95, width * 4 / 5 + 20, 25, 100); // 모니터 그림자
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
    rect(width / 2, height * 4 / 5 + 100, width * 4 / 5 + 40, 20, 30); // 모니터 받침

    fill(50, 50, 50);
    rect(width / 2, height * 4 / 5 + 60, 50, 40); // 모니터 기둥
    noStroke();
  }

  drawImage() {
    push();
    imageMode(CENTER);
    image(this.img, width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);
    textAlign(CENTER);
    textSize(20);
    text("Press the number 5 for next stage", width/2, height * 4 / 5);
    pop();
  }
}

class ImageDisplay3 {
  constructor() {
    this.img = loadImage("assets/a3.png");
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
    rect(width / 2, height * 4.5 / 5, width, 200); // 사무실 탁자
    strokeWeight(20);

    stroke(0, 0, 0, 150);
    rect(width / 2, height * 4 / 5 + 95, width * 4 / 5 + 20, 25, 100); // 모니터 그림자
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
    rect(width / 2, height * 4 / 5 + 100, width * 4 / 5 + 40, 20, 30); // 모니터 받침

    fill(50, 50, 50);
    rect(width / 2, height * 4 / 5 + 60, 50, 40); // 모니터 기둥
    noStroke();
  }

  drawImage() {
    push();
    imageMode(CENTER);
    image(this.img, width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);
    textAlign(CENTER);
    textSize(20);
    text("Press the number 7 for next stage", width/2, height * 4 / 5);
    pop();
  }
}

class ImageDisplay4 {
  constructor() {
    this.img = loadImage("assets/a4.png");
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
    rect(width / 2, height * 4.5 / 5, width, 200); // 사무실 탁자
    strokeWeight(20);

    stroke(0, 0, 0, 150);
    rect(width / 2, height * 4 / 5 + 95, width * 4 / 5 + 20, 25, 100); // 모니터 그림자
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
    rect(width / 2, height * 4 / 5 + 100, width * 4 / 5 + 40, 20, 30); // 모니터 받침

    fill(50, 50, 50);
    rect(width / 2, height * 4 / 5 + 60, 50, 40); // 모니터 기둥
    noStroke();
  }

  drawImage() {
    push();
    imageMode(CENTER);
    image(this.img, width / 2, height / 2 - 40, width * 4 / 5 - 20, height * 4 / 5 - 20, 2);
    textAlign(CENTER);
    textSize(20);
    text("Press the number 9 for next stage", width/2, height * 4 / 5);
    pop();
  }
}
