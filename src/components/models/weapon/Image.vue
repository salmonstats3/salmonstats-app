<template>
  <img v-if="weaponId === 0" src="@/assets/weapons/0_Shooter_Short_00.png" alt="">
  <img v-else-if="weaponId === 10" src="@/assets/weapons/10_Shooter_First_00.png" alt="">
  <img v-else-if="weaponId === 20" src="@/assets/weapons/20_Shooter_Precision_00.png" alt="">
  <img v-else-if="weaponId === 30" src="@/assets/weapons/30_Shooter_Blaze_00.png" alt="">
  <img v-else-if="weaponId === 40" src="@/assets/weapons/40_Shooter_Normal_00.png" alt="">
  <img v-else-if="weaponId === 50" src="@/assets/weapons/50_Shooter_Gravity_00.png" alt="">
  <img v-else-if="weaponId === 60" src="@/assets/weapons/60_Shooter_QuickMiddle_00.png" alt="">
  <img v-else-if="weaponId === 70" src="@/assets/weapons/70_Shooter_Expert_00.png" alt="">
  <img v-else-if="weaponId === 80" src="@/assets/weapons/80_Shooter_Heavy_00.png" alt="">
  <img v-else-if="weaponId === 90" src="@/assets/weapons/90_Shooter_Long_00.png" alt="">
  <img v-else-if="weaponId === 100" src="@/assets/weapons/100_Shooter_QuickLong_00.png" alt="">
  <img v-else-if="weaponId === 200" src="@/assets/weapons/200_Blaster_Short_00.png" alt="">
  <img v-else-if="weaponId === 210" src="@/assets/weapons/210_Blaster_Middle_00.png" alt="">
  <img v-else-if="weaponId === 220" src="@/assets/weapons/220_Blaster_Long_00.png" alt="">
  <img v-else-if="weaponId === 230" src="@/assets/weapons/230_Blaster_LightShort_00.png" alt="">
  <img v-else-if="weaponId === 240" src="@/assets/weapons/240_Blaster_Light_00.png" alt="">
  <img v-else-if="weaponId === 250" src="@/assets/weapons/250_Blaster_LightLong_00.png" alt="">
  <img v-else-if="weaponId === 300" src="@/assets/weapons/300_Shooter_TripleQuick_00.png" alt="">
  <img v-else-if="weaponId === 310" src="@/assets/weapons/310_Shooter_TripleMiddle_00.png" alt="">
  <img v-else-if="weaponId === 400" src="@/assets/weapons/400_Shooter_Flash_00.png" alt="">
  <img v-else-if="weaponId === 1000" src="@/assets/weapons/1000_Roller_Compact_00.png" alt="">
  <img v-else-if="weaponId === 1010" src="@/assets/weapons/1010_Roller_Normal_00.png" alt="">
  <img v-else-if="weaponId === 1020" src="@/assets/weapons/1020_Roller_Heavy_00.png" alt="">
  <img v-else-if="weaponId === 1030" src="@/assets/weapons/1030_Roller_Hunter_00.png" alt="">
  <img v-else-if="weaponId === 1040" src="@/assets/weapons/1040_Roller_Wide_00.png" alt="">
  <img v-else-if="weaponId === 1100" src="@/assets/weapons/1100_Brush_Mini_00.png" alt="">
  <img v-else-if="weaponId === 1110" src="@/assets/weapons/1110_Brush_Normal_00.png" alt="">
  <img v-else-if="weaponId === 2000" src="@/assets/weapons/2000_Charger_Quick_00.png" alt="">
  <img v-else-if="weaponId === 2010" src="@/assets/weapons/2010_Charger_Normal_00.png" alt="">
  <img v-else-if="weaponId === 2020" src="@/assets/weapons/2020_Charger_NormalScope_00.png" alt="">
  <img v-else-if="weaponId === 2030" src="@/assets/weapons/2030_Charger_Long_00.png" alt="">
  <img v-else-if="weaponId === 2040" src="@/assets/weapons/2040_Charger_LongScope_00.png" alt="">
  <img v-else-if="weaponId === 2050" src="@/assets/weapons/2050_Charger_Light_00.png" alt="">
  <img v-else-if="weaponId === 2060" src="@/assets/weapons/2060_Charger_Keeper_00.png" alt="">
  <img v-else-if="weaponId === 2070" src="@/assets/weapons/2070_Charger_Pencil_00.png" alt="">
  <img v-else-if="weaponId === 3000" src="@/assets/weapons/3000_Slosher_Strong_00.png" alt="">
  <img v-else-if="weaponId === 3010" src="@/assets/weapons/3010_Slosher_Diffusion_00.png" alt="">
  <img v-else-if="weaponId === 3020" src="@/assets/weapons/3020_Slosher_Launcher_00.png" alt="">
  <img v-else-if="weaponId === 3030" src="@/assets/weapons/3030_Slosher_Bathtub_00.png" alt="">
  <img v-else-if="weaponId === 3040" src="@/assets/weapons/3040_Slosher_Washtub_00.png" alt="">
  <img v-else-if="weaponId === 4000" src="@/assets/weapons/4000_Spinner_Quick_00.png" alt="">
  <img v-else-if="weaponId === 4010" src="@/assets/weapons/4010_Spinner_Standard_00.png" alt="">
  <img v-else-if="weaponId === 4020" src="@/assets/weapons/4020_Spinner_Hyper_00.png" alt="">
  <img v-else-if="weaponId === 4030" src="@/assets/weapons/4030_Spinner_Downpour_00.png" alt="">
  <img v-else-if="weaponId === 4040" src="@/assets/weapons/4040_Spinner_Serein_00.png" alt="">
  <img v-else-if="weaponId === 5000" src="@/assets/weapons/5000_Maneuver_Short_00.png" alt="">
  <img v-else-if="weaponId === 5010" src="@/assets/weapons/5010_Maneuver_Normal_00.png" alt="">
  <img v-else-if="weaponId === 5020" src="@/assets/weapons/5020_Maneuver_Gallon_00.png" alt="">
  <img v-else-if="weaponId === 5030" src="@/assets/weapons/5030_Maneuver_Dual_00.png" alt="">
  <img v-else-if="weaponId === 5040" src="@/assets/weapons/5040_Maneuver_Stepper_00.png" alt="">
  <img v-else-if="weaponId === 6000" src="@/assets/weapons/6000_Shelter_Normal_00.png" alt="">
  <img v-else-if="weaponId === 6010" src="@/assets/weapons/6010_Shelter_Wide_00.png" alt="">
  <img v-else-if="weaponId === 6020" src="@/assets/weapons/6020_Shelter_Compact_00.png" alt="">
  <img v-else-if="weaponId === 7010" src="@/assets/weapons/7010_Stringer_Normal_00.png" alt="">
  <img v-else-if="weaponId === 7020" src="@/assets/weapons/7020_Stringer_Short_00.png" alt="">
  <img v-else-if="weaponId === 8000" src="@/assets/weapons/8000_Saber_Normal_00.png" alt="">
  <img v-else-if="weaponId === 8010" src="@/assets/weapons/8010_Saber_Lite_00.png" alt="">
  <img v-else-if="weaponId === 20900" src="@/assets/weapons/20900_Blaster_Bear.png" alt="">
  <img v-else-if="weaponId === 22900" src="@/assets/weapons/22900_Charger_Bear.png" alt="">
  <img v-else-if="weaponId === 23900" src="@/assets/weapons/23900_Slosher_Bear.png" alt="">
  <img v-else-if="weaponId === 26900" src="@/assets/weapons/26900_Shelter_Bear_Coop.png" alt="">
  <img v-else-if="weaponId === 27900" src="@/assets/weapons/27900_Stringer_Bear.png" alt="">
  <img v-else-if="weaponId === 28900" src="@/assets/weapons/28900_Saber_Bear.png" alt="">
  <img v-else-if="weaponId === 99999" src="@/assets/weapons/Dummy.png" alt="">
  <img v-else src="@/assets/weapons/unknown.png" alt="">
</template>

<script setup lang="ts">
// -1 unknown.png
// import { numToString } from  "@/util/weapon"
type Props = {
  weaponId: CoopResultResponse["players"][number]['weaponList'][number];
};
const { weaponId } = defineProps<Props>();
</script>

<style lang="scss" scoped>
img {
  width: 16px;
  padding: 2px;
  background-color: #212121;
  border-radius: 50%;
}
</style>

