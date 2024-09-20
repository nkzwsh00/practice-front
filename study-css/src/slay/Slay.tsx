import React, { useState, useEffect } from "react";

// 地形タイプの定義
type TerrainType = "plain" | "mountain" | "water";

// ヘックスの座標を定義
type HexCoord = {
  q: number;
  r: number;
  s: number;
};

// ヘックスの状態を定義
type HexState = {
  coord: HexCoord;
  terrain: TerrainType;
  owner: number | null;
  unit: UnitType | null;
};

// ユニットタイプの定義
type UnitType = "peasant" | "soldier";

// プレイヤーの状態を定義
type PlayerState = {
  id: number;
  gold: number;
  color: string;
};

// ゲームの状態を定義
type GameState = {
  hexes: HexState[];
  players: PlayerState[];
  currentPlayer: number;
};

// ヘックスのプロパティを定義
type HexProps = {
  hex: HexState;
  size: number;
  isSelected: boolean;
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
const Hex: React.FC<HexProps> = ({ hex, size, isSelected, onClick }) => {
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

  const pixelX =
    size * (Math.sqrt(3) * hex.coord.q + (Math.sqrt(3) / 2) * hex.coord.r);
  const pixelY = size * ((3 / 2) * hex.coord.r);

  let fillColor = "white";
  if (hex.terrain === "mountain") fillColor = "gray";
  if (hex.terrain === "water") fillColor = "lightblue";
  if (hex.owner !== null) fillColor = hex.owner === 0 ? "lightgreen" : "pink";
  if (isSelected) fillColor = "yellow";

  return (
    <g transform={`translate(${pixelX}, ${pixelY})`} onClick={onClick}>
      <polygon
        points={hexagonPoints(size)}
        fill={fillColor}
        stroke="black"
        strokeWidth="1"
      />
      {hex.unit && (
        <text
          x="0"
          y="0"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          fontWeight="bold"
        >
          {hex.unit === "peasant" ? "P" : "S"}
        </text>
      )}
    </g>
  );
};

// ゲームボードコンポーネント
const GameBoard: React.FC<{
  gameState: GameState;
  onHexClick: (hex: HexState) => void;
  selectedHex: HexState | null;
}> = ({ gameState, onHexClick, selectedHex }) => {
  const mapRadius = 3;
  const hexSize = 30;

  const width = hexSize * Math.sqrt(3) * (mapRadius * 2 + 1);
  const height = ((hexSize * 3) / 2) * (mapRadius * 2 + 1);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}
    >
      <g>
        {gameState.hexes.map((hex, index) => (
          <Hex
            key={index}
            hex={hex}
            size={hexSize}
            isSelected={
              selectedHex?.coord.q === hex.coord.q &&
              selectedHex?.coord.r === hex.coord.r &&
              selectedHex?.coord.s === hex.coord.s
            }
            onClick={() => onHexClick(hex)}
          />
        ))}
      </g>
    </svg>
  );
};

// ゲーム情報パネルコンポーネント
const GameInfoPanel: React.FC<{
  gameState: GameState;
  endTurn: () => void;
}> = ({ gameState, endTurn }) => {
  const currentPlayer = gameState.players[gameState.currentPlayer];

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-2">
        Player {currentPlayer.id + 1}'s Turn
      </h2>
      <p>Gold: {currentPlayer.gold}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={endTurn}
      >
        End Turn
      </button>
    </div>
  );
};

// メインのゲームコンポーネント
export const Slay: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    hexes: [],
    players: [
      { id: 0, gold: 10, color: "lightgreen" },
      { id: 1, gold: 10, color: "pink" },
    ],
    currentPlayer: 0,
  });
  const [selectedHex, setSelectedHex] = useState<HexState | null>(null);

  // ゲーム初期化
  useEffect(() => {
    const mapRadius = 3;
    const newHexes: HexState[] = [];

    for (let q = -mapRadius; q <= mapRadius; q++) {
      for (
        let r = Math.max(-mapRadius, -q - mapRadius);
        r <= Math.min(mapRadius, -q + mapRadius);
        r++
      ) {
        const s = -q - r;
        const terrain: TerrainType =
          Math.random() < 0.7
            ? "plain"
            : Math.random() < 0.5
            ? "mountain"
            : "water";
        newHexes.push({
          coord: { q, r, s },
          terrain,
          owner: null,
          unit: null,
        });
      }
    }

    // プレイヤーの初期領土とユニットを設定
    newHexes[0].owner = 0;
    newHexes[0].unit = "peasant";
    newHexes[newHexes.length - 1].owner = 1;
    newHexes[newHexes.length - 1].unit = "peasant";

    setGameState((prevState) => ({
      ...prevState,
      hexes: newHexes,
    }));
  }, []);

  // ヘックスクリック時の処理
  const handleHexClick = (hex: HexState) => {
    if (selectedHex === null) {
      // ユニットのいるヘックスのみ選択可能
      if (hex.unit && hex.owner === gameState.currentPlayer) {
        setSelectedHex(hex);
      }
    } else {
      // ユニットの移動または攻撃
      const adjacentHexes = getAdjacentCoords(selectedHex.coord);
      if (
        adjacentHexes.some(
          (coord) =>
            coord.q === hex.coord.q &&
            coord.r === hex.coord.r &&
            coord.s === hex.coord.s
        )
      ) {
        if (hex.owner !== gameState.currentPlayer) {
          // 攻撃
          if (hex.unit) {
            // 敵ユニットを倒す
            setGameState((prevState) => ({
              ...prevState,
              hexes: prevState.hexes.map((h) =>
                h.coord.q === hex.coord.q &&
                h.coord.r === hex.coord.r &&
                h.coord.s === hex.coord.s
                  ? { ...h, unit: null, owner: gameState.currentPlayer }
                  : h
              ),
            }));
          } else {
            // 空の敵領土を占領
            setGameState((prevState) => ({
              ...prevState,
              hexes: prevState.hexes.map((h) =>
                h.coord.q === hex.coord.q &&
                h.coord.r === hex.coord.r &&
                h.coord.s === hex.coord.s
                  ? { ...h, owner: gameState.currentPlayer }
                  : h
              ),
            }));
          }
        } else {
          // 移動
          setGameState((prevState) => ({
            ...prevState,
            hexes: prevState.hexes.map((h) => {
              if (
                h.coord.q === selectedHex.coord.q &&
                h.coord.r === selectedHex.coord.r &&
                h.coord.s === selectedHex.coord.s
              ) {
                return { ...h, unit: null };
              }
              if (
                h.coord.q === hex.coord.q &&
                h.coord.r === hex.coord.r &&
                h.coord.s === hex.coord.s
              ) {
                return { ...h, unit: selectedHex.unit };
              }
              return h;
            }),
          }));
        }
        setSelectedHex(null);
      }
    }
  };

  // ターン終了時の処理
  const endTurn = () => {
    setGameState((prevState) => {
      const newCurrentPlayer =
        (prevState.currentPlayer + 1) % prevState.players.length;
      const newPlayers = prevState.players.map((player) => {
        if (player.id === newCurrentPlayer) {
          // 所有する平地の数だけゴールドを増やす
          const ownedPlains = prevState.hexes.filter(
            (hex) => hex.owner === player.id && hex.terrain === "plain"
          ).length;
          return { ...player, gold: player.gold + ownedPlains };
        }
        return player;
      });

      return {
        ...prevState,
        currentPlayer: newCurrentPlayer,
        players: newPlayers,
      };
    });
    setSelectedHex(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <h1 className="text-3xl font-bold mb-4">Slay-like Game</h1>
      <div className="flex gap-4">
        <GameBoard
          gameState={gameState}
          onHexClick={handleHexClick}
          selectedHex={selectedHex}
        />
        <GameInfoPanel gameState={gameState} endTurn={endTurn} />
      </div>
    </div>
  );
};
