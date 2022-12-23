type EventId = "WATER_LEVELS" | "RUSH" | "GOLDIE_SEEKING" | "GRILLER" | "FOG" | "THE_MOTHERSHIP" | "COHOCK_CHARGE" | "GIANT_TORNADO" | "MUDMOUTH"
// enum:
//   - WATER_LEVELS
//   - RUSH
//   - GOLDIE_SEEKING
//   - GRILLER
//   - FOG
//   - THE_MOTHERSHIP
//   - COHOCK_CHARGE
//   - GIANT_TORNADO
//   - MUDMOUTH

type WaterId = "LOW_TIDE" |"NORMAL" |"HIGH_TIDE"
// type: string
// enum:
//   - LOW_TIDE
//   - NORMAL
//   - HIGH_TIDE

type CoopWaveResultResponse = {
// properties:
  waveId: number
//   waveId:
//     type: number
//     description: 1~4の値が入ります
  eventType: EventId
//   eventType:
//     $ref: '#/components/schemas/EventId'
  waterLevel: WaterId
//   waterLevel:
//     $ref: '#/components/schemas/WaterId'
  goldenIkuraNum: number | null
//   goldenIkuraNum:
//     type: number
//     nullable: true
//     description: EX-WAVEでは常に`null`が入ります
  goldenIkuarPopNum: number
//   goldenIkuarPopNum:
//     type: number
  quotaNum: number | null
//   quotaNum:
//     type: number
//     nullable: true
  isClear: boolean
//   isClear:
//     type: boolean
//     description: オカシラシャケを討伐できなかった場合は`false`が入ります
}
