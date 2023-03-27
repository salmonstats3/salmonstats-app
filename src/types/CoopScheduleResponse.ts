type CoopScheduleResponse = {
  stageId: number;
  startTime: Date;
  endTime: Date;
  weaponList: number[];
  rareWeapon: number | null;
  mode: 'REGULAR' | 'BIG_RUN';
  rule: 'REGULAR' | 'PRIVATE_CUSTOM' | 'PRIVATE_SCENARIO';
  setting: 'CoopNormalSetting' | 'CoopBigRunSetting';
};
