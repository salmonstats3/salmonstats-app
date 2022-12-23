type Species  = "INKLING" | "OCTOLING"
type CoopPlayerResultResponse = {
  pid: string
  // pid:
  //   type: string
  name: string
  // name:
  //   type: string
  byname: string
  // byname:
  //   type: string
  nameId: string
  // nameId:
  //   type: string
  badges: number[]
  // badges:
  //   maxItems: 3
  //   minItems: 3
  //   description: バッジのIDが返りますがつけていない場合は`null`が入ります
  //   type: array
  //   items:
  //     type: number
  nameplate: number
  // nameplate:
  //   type: number
  //   description: ネームプレートのIDが入ります
  textColor: number[]
  // textColor:
  //   maxItems: 4
  //   minItems: 4
  //   description: RGBAが入ります
  //   type: array
  //   items:
  //     type: number
  uniform: number
  // uniform:
  //   type: number
  //   description: ユニフォームIDが入ります
  bossKillCountsTotal: number
  // bossKillCountsTotal:
  //   type: number
  bossKillCounts: (number | null)[]
  // bossKillCounts:
  //   maxItems: 14
  //   minItems: 14
  //   description: わからない場合は`null`が入ります
  //   type: array
  //   items:
  //     type: number
  deadCount: number
  // deadCount:
  //   type: number
  helpCount: number
  // helpCount:
  //   type: number
  ikuraNum: number
  // ikuraNum:
  //   type: number
  goldenIkuraNum: number
  // goldenIkuraNum:
  //   type: number
  //   description: コンテナに入れた金イクラの数です
  goldenIkuraAssistNum: number
  // goldenIkuraAssistNum:
  //   type: number
  jobBonus: number | null
  // jobBonus:
  //   type: number
  //   nullable: true
  jobRate: number | null
  // jobRate:
  //   type: number
  //   nullable: true
  jobScore: number | null
  // jobScore:
  //   type: number
  //   nullable: true
  kumaPoint: number | null
  // kumaPoint:
  //   type: number
  //   nullable: true
  gradeId: number
  // gradeId:
  //   type: number
  //   nullable: true
  //   minimum: 0
  //   maximum: 8
  gradePoint: number
  // gradePoint:
  //   type: number
  //   nullable: true
  //   minimum: 0
  //   maximum: 999
  smellMeter: number | null
  // smellMeter:
  //   type: number
  //   nullable: true
  //   minimum: 0
  //   maximum: 5
  //   description: オカシラメーター
  species: Species
  // species:
  //   type: string
  //   enum:
  //     - INKLING
  //     - OCTOLING
  specialId: number
  // specialId:
  //   type: number
  specialCounts: number[]
  // specialCounts:
  //   maxItems: 4
  //   minItems: 0
  //   type: array
  //   items:
  //     type: number
  weaponList: number[]
  // weaponList:
  //   maxItems: 4
  //   minItems: 0
  //   type: array
  //   items:
  //     type: number
}