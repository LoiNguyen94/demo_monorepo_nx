export function funcShares(): string {
  return 'func-shares';
}

export function funcChangeColor(): string {
  const colors = ['#32a852', '#32a852', '#a8328c', '#2637d4'];
  return colors[Math.floor(Math.random() * 4)];
}
