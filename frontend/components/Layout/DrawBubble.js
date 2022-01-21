const Bubble = (width, height) => {
  let posX, posY;
  let translateX, translateY;
  let movementX, movementY;
  let size, color;
  let alpha;
  let staticity, magnetism, smoothFactor, velocity;

  const generateDecimalBewteen = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const randomise = () => {
    var colors = [
      "227, 242, 253",
      "187, 222, 251",
      "144, 202, 249",
      "100, 181, 246",
      "25, 118, 210",
      "21, 101, 192",
      "13, 71, 161",
    ];
    velocity = 60; // Bubble levitation velocity (the higher the slower)
    smoothFactor = 50; // The higher, the smoother
    staticity = 50; // Increase value to make bubbles move slower on mousemove
    magnetism = 0.1 + Math.random() * 4;
    posX = 0;
    posY = 0;
    color = colors[Math.floor(Math.random() * colors.length)];
    alpha = generateDecimalBewteen(6, 10) / 10;
    size = generateDecimalBewteen(1, 2);
    movementX = generateDecimalBewteen(-10, 10) / velocity;
    movementY = generateDecimalBewteen(-8, 8) / velocity;
    translateX = generateDecimalBewteen(0, width);
    translateY = generateDecimalBewteen(0, height);
  };

  const update = (mouseX = 0, mouseY = 0) => {
    translateX = translateX - movementX;
    translateY = translateY - movementY;
    posX += (mouseX / (staticity / magnetism) - posX) / smoothFactor;
    posY += (mouseY / (staticity / magnetism) - posY) / smoothFactor;

    if (
      translateY + posY < 0 ||
      translateX + posX < 0 ||
      translateX + posX > width
    ) {
      randomise();
      translateY = height;
    }

    return {
      translateX,
      translateY,
      posX,
      posY,
    };
  };

  randomise();

  return {
    size,
    translateX,
    translateY,
    movementX,
    movementY,
    posX,
    posY,
    staticity,
    magnetism,
    smoothFactor,
    alpha,
    color,

    update,
  };
};

const drawBubbles = (canvasRef, width, height) => {
  let ctx;
  let bubbles = [];
  let dpr = window.devicePixelRatio;
  let bubbleDensity = 100;
  let mouseX, mouseY;

  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    ctx.clearRect(0, 0, width, height);
    bubbles.forEach((bubble) => {
      Object.assign(bubble, bubble.update(mouseX, mouseY));
      ctx.translate(bubble.translateX, bubble.translateY);
      ctx.beginPath();
      ctx.arc(bubble.posX, bubble.posY, bubble.size, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(" + bubble.color + "," + bubble.alpha + ")";
      ctx.fill();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    });
    requestAnimationFrame(animate);
  };

  const initApp = () => {
    ctx = canvasRef.current.getContext("2d");
    ctx.scale(dpr, dpr);
    for (let i = 0; i < bubbleDensity; i++) {
      bubbles.push(new Bubble(width, height));
    }

    if (canvasRef) {
      animate();
    }
  };

  initApp();
};

export default drawBubbles;
