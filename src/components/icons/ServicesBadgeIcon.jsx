const boxes = [[1, 1], [7, 1], [1, 7], [7, 7]];

export default function ServicesBadgeIcon(props) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {boxes.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
      ))}
    </svg>
  );
}