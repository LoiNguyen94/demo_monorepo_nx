export function funcShares(): string {
  return 'func-shares';
}

export function funcChangeColor(): string {
  const colors = ['#32a852', '#32a852', '#a8328c', '#2637d4'];
  return colors[Math.floor(Math.random() * 4)];
}

export const roundToX = (num: number, X = 2) => {
  return num.toFixed();
};

export const formatMoneyVND = (num: number) => {
  return (
    roundToX(num, 0)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' ₫'
  );
};
