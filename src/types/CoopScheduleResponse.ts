type Mode = "REGULAR" | "BIG_RUN";
type Rule = "REGULAR" | "PRIVATE_CUSTOM" | "PRIVATE_SCENARIO";

type CoopScheduleResponse = {
  mode: Mode;
  rule: Rule;
  stageId: number;
  weaponList: number[];
  rareWeapon: number | null;
};
