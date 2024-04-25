const displayMap = [
  // 0
  [true, true, false, true, true, true, true],
  // 1
  [false, true, false, false, true, false, false],
  // 2
  [true, true, true, false, false, true, true],
  // 3
  [true, true, true, false, true, true, false],
  // 4
  [false, true, true, true, true, false, false],
  // 5
  [true, false, true, true, true, true, false],
  // 6
  [true, false, true, true, true, true, true],
  // 7
  [true, true, false, false, true, false, false],
  // 8
  [true, true, true, true, true, true, true],
  // 9
  [true, true, true, true, true, false, false],
  // A
  [true, true, true, true, true, false, true],
  // P
  [true, true, true, true, false, false, true],
  // M
  [true, true, false, true, false, false, true],
  [true, true, false, true, true, false, false],
  // H
  [false, true, true, true, true, false, true],
  // R
  [true, true, true, true, true, false, true],
];

export default function Number({ displayNum }: { displayNum: number }) {
  const topMap = [1, 1, 1, 1];
  const bottomMap = [1, 1, 1];
  const xOff = 20;
  const yOff = 30;
  return (
    <div
      style={{
        position: "relative",
        width: "7.5rem",
        height: "12.5rem",
      }}
    >
      {topMap.map((_, index) => {
        const left =
          (index % 2 === 0 ? 15 / 16 : index === 1 ? 75 / 16 : 5 / 16) +
          xOff / 16;
        const top = [0, 10 / 16, 70 / 16, 10 / 16][index] + yOff / 16;
        return (
          <div
            key={index}
            className="segment"
            style={{
              rotate: `${(index % 2) * 90}deg`,
              left: `${left}rem`,
              top: `${top}rem`,
              backgroundColor: `${
                displayMap[displayNum][index] ? "#83f52c" : "white"
              }`,
              opacity: displayMap[displayNum][index] ? 1 : 0.1,
            }}
          ></div>
        );
      })}
      {bottomMap.map((_, i) => {
        const index = i + 4;
        const rotation = i % 2 === 0 ? 90 : 0;
        const left = [75 / 16, 15 / 16, 5 / 16][i] + xOff / 16;
        const top = [80 / 16, 140 / 16][i % 2] + yOff / 16;
        return (
          <div
            key={index}
            className="segment"
            style={{
              rotate: `${rotation}deg`,
              left: `${left}rem`,
              top: `${top}rem`,
              backgroundColor: `${
                displayMap[displayNum][index] ? "#83f52c" : "white"
              }`,
              opacity: displayMap[displayNum][index] ? 1 : 0.1,
            }}
          ></div>
        );
      })}
    </div>
  );
}
