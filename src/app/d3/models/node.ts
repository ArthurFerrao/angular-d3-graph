import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  linkCount: number = 0;

  constructor(id, x?, y?, fx?, fy?) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.fy = fy;
    this.fx = fx;
  }

  normal = () => {
    return Math.sqrt(this.linkCount / APP_CONFIG.N);
  }

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize() {
    return '20px';
  }

  get color() {
    let index = 3;
    return APP_CONFIG.SPECTRUM[index];
  }

  setFxFy(fx, fy) {
    this.fx = fx;
    this.fy = fy;
  }
}
