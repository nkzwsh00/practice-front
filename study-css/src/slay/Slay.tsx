import React, { useState } from "react";

// ヘックスの座標を定義
type HexCoord = {
  q: number;
  r: number;
  s: number;
};

// ヘックスのプロパティを定義
type HexProps = {
  coord: HexCoord;
  size: number;
  isSelected: boolean;
  isAdjacent: boolean;
  onClick: () => void;
};

// 隣接するヘックスの相対座標
const ADJACENT_COORDS: HexCoord[] = [
  { q: 1, r: 0, s: -1 },
  { q: 1, r: -1, s: 0 },
  { q: 0, r: -1, s: 1 },
  { q: -1, r: 0, s: 1 },
  { q: -1, r: 1, s: 0 },
  { q: 0, r: 1, s: -1 },
];

// 隣接するヘックスを取得する関数
const getAdjacentCoords = (coord: HexCoord): HexCoord[] => {
  return ADJACENT_COORDS.map((adj) => ({
    q: coord.q + adj.q,
    r: coord.r + adj.r,
    s: coord.s + adj.s,
  }));
};

// ヘックスを描画するコンポーネント
const Hex: React.FC<HexProps> = ({
  coord,
  size,
  isSelected,
  isAdjacent,
  onClick,
}) => {
  const hexagonPoints = (size: number): string => {
    const angles = [30, 90, 150, 210, 270, 330];
    return angles
      .map((angle) => {
        const radians = (Math.PI / 180) * angle;
        const x = size * Math.cos(radians);
        const y = size * Math.sin(radians);
        return `${x},${y}`;
      })
      .join(" ");
  };

  const pixelX = size * (Math.sqrt(3) * coord.q + (Math.sqrt(3) / 2) * coord.r);
  const pixelY = size * ((3 / 2) * coord.r);

  let fillColor = "white";
  if (isSelected) fillColor = "yellow";
  else if (isAdjacent) fillColor = "lightblue";

  return (
    <g transform={`translate(${pixelX}, ${pixelY})`} onClick={onClick}>
      <polygon
        points={hexagonPoints(size)}
        fill={fillColor}
        stroke="black"
        strokeWidth="1"
      />
      <text
        x="0"
        y="0"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="10"
      >
        {`${coord.q},${coord.r},${coord.s}`}
      </text>
    </g>
  );
};

// マップのプロパティを定義
type MapProps = {
  mapRadius: number;
  hexSize: number;
};

// ヘックスマップを描画するコンポーネント
const HexMap: React.FC<MapProps> = ({ mapRadius, hexSize }) => {
  const [selectedHex, setSelectedHex] = useState<HexCoord | null>(null);
  const [adjacentHexes, setAdjacentHexes] = useState<HexCoord[]>([]);

  const hexes: HexCoord[] = [];

  for (let q = -mapRadius; q <= mapRadius; q++) {
    for (
      let r = Math.max(-mapRadius, -q - mapRadius);
      r <= Math.min(mapRadius, -q + mapRadius);
      r++
    ) {
      const s = -q - r;
      hexes.push({ q, r, s });
    }
  }

  const handleHexClick = (coord: HexCoord) => {
    setSelectedHex(coord);
    setAdjacentHexes(getAdjacentCoords(coord));
  };

  const width = hexSize * Math.sqrt(3) * (mapRadius * 2 + 1) + 30;
  const height = ((hexSize * 3) / 2) * (mapRadius * 2 + 1) + 30;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}
    >
      {hexes.map((coord, index) => (
        <Hex
          key={index}
          coord={coord}
          size={hexSize}
          isSelected={
            selectedHex !== null &&
            coord.q === selectedHex.q &&
            coord.r === selectedHex.r &&
            coord.s === selectedHex.s
          }
          isAdjacent={adjacentHexes.some(
            (adj) => adj.q === coord.q && adj.r === coord.r && adj.s === coord.s
          )}
          onClick={() => handleHexClick(coord)}
        />
      ))}
    </svg>
  );
};

// メインのアプリコンポーネント
export const Slay = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <HexMap mapRadius={3} hexSize={30} />
    </div>
  );
};
