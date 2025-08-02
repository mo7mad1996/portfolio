interface Walker {
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;
  angle: number;
  color: number;
}

class Walker {
  constructor(
    x: number,
    y: number,
    angle: number,
    ctx: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.angle = angle;

    this.ctx = ctx;
    this.color = Math.random() * 255;
  }

  draw() {
    const newX = this.x + Math.cos(this.angle) * step;
    const newY = this.y + Math.sin(this.angle) * step;

    this.color += 0.1;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(newX, newY);
    this.ctx.strokeStyle = `hsl(${this.color}, 100%, 50%)`;
    this.ctx.stroke();

    this.x = newX;
    this.y = newY;

    const delta = Math.random() > 0.5 ? 1 : -1;
    const currentIndex = directions.indexOf(this.angle);
    const nextIndex = (currentIndex + delta + 6) % 6;
    this.angle = directions[nextIndex] || 0;
  }
}

const step = 15;
const count = 20;
const directions: number[] = [0, 60, 120, 180, 240, 300].map(
  (d) => (d * Math.PI) / 180
);

export const useCanvas = (canvas: HTMLCanvasElement) => {
  if (import.meta.client) {
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    if (!ctx) return;

    ctx.lineWidth = 2;

    const walkers: Walker[] = [];

    const originX = canvas.width / 2;
    const originY = canvas.height / 2;

    const angle =
      directions[Math.floor(Math.random() * directions.length)] || 0;

    for (let i = 0; i < count; i++) {
      walkers.push(new Walker(originX, originY, angle, ctx));
    }

    const animate = () => {
      ctx.fillStyle = "rgba(7, 26, 49, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      walkers.forEach((w) => w.draw());
      requestAnimationFrame(animate);
    };

    animate();
  }
};
