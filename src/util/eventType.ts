
// @returnType locale CoopEvent のKeyに対応
export const typeToString = (eventType: EventType[keyof EventType]) => {
  switch(eventType) {
    case 0: return 'Water'
      // Water: '-' 昼
    case 1: return 'Rush'
      // Rush: ラッシュ
    case 2: return 'Goldie'
      // Goldie: キンシャケ探し
    case 3: return 'Griller'
      // Griller: グリル発進
    case 4: return 'The'
      // The: ハコビヤ襲来 TheMothership?
    case 5: return 'Fog'
      // Fog: 霧
    case 6: return 'Cohock'
      // Cohock: ドスコイ大量発生
    case 7: return 'Giant'
      // Giant: 巨大タツマキ
    case 8: return 'Mudmouth'
      // Mudmouth: ドロシャケ噴出
  }
}