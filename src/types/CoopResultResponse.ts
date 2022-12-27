type CoopResultResponse = {
  salmonId: number
  uuid: string
  bossCounts: number[]
  bossKillCounts: number[]
  ikuraNum: number
  goldenIkuraNum: number
  goldenIkuraAssistNum: number
  nightLess: boolean
  dangerRate: number
  playTime: string
  isClear: boolean
  failureWave: number | null
  isBossDefeated: boolean | null
  bossId: number | null
  players: CoopPlayerResultResponse[]
  waves: CoopWaveResultResponse[]
}
// properties:
//   salmonId:
//     type: number
//     description: 固有のID
//   uuid:
//     type: string
//     format: uuid
//     description: リザルトに紐付けられたUUID
//   bossCounts:
//     maxItems: 14
//     minItems: 14
//     type: array
//     items:
//       type: number
//   bossKillCounts:
//     maxItems: 14
//     minItems: 14
//     type: array
//     items:
//       type: number
//   ikuraNum:
//     type: number
//   goldenIkuraNum:
//     type: number
//   goldenIkuraAssistNum:
//     type: number
//   nightLess:
//     type: boolean
//     description: 夜イベントを含むかどうか
//   dangerRate:
//     type: number
//   playTime:
//     format: date-time
//     type: string
//   isClear:
//     type: boolean
//     description: WAVE3をクリアすればオカシラ失敗しても`true`が返ります
//   failureWave:
//     type: number
//     nullable: true
//     description: 失敗したWAVEのidが返ります
//   isBossDefeated:
//     type: boolean
//     nullable: true
//     description: オカシラシャケを討伐できたかが返ります
//   bossId:
//     type: number
//     nullable: true
//     description: オカシラシャケのIDが返ります
//   players:
//     minItems: 4
//     type: array
//     items:
//       $ref: '#/components/schemas/CoopPlayerResultResponse'
  3
    array
    '#/components/schemas/CoopWaveResultResponse'
// required:
//   - salmonId
//   - uuid
//   - bossCounts
//   - bossKillCounts
//   - ikuraNum
//   - goldenIkuraNum
//   - goldenIkuraAssistNum
//   - nightLess
//   - dangerRate
//   - playTime
//   - isClear
//   - failureWave
//   - isBossDefeated
//   - bossId
//   - players
//   - waves