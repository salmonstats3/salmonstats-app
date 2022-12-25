import { def } from "@vue/shared"

export const idToString = (specialId: number) => {
  switch(specialId) {
    case 1: return "SpUltraShot"
      // 7269f1fa71d746d7b86ca2a71fc24c6ea4c764077ee50d692f80eddeaff90f1d_0.png
    case 20006: return "SpNiceBall"
      // bd327d1b64372dedefd32adb28bea62a5b6152d93aada5d9fc4f669a1955d6d4_0
    case 20007: return "SpShockSonar"
      // 463eedc60013608666b260c79ac8c352f9795c3d0cce074d3fbbdbd2c054a56d_0
    case 20009: return "SpMicroLaser"
      // fa8d49e8c850ee69f0231976208a913384e73dc0a39e6fb00806f6aa3da8a1ee_0
    case 20010: return "SpJetpack"
      // 252059408283fbcb69ca9c18b98effd3b8653ab73b7349c42472281e5a1c38f9_0
    case 20012: return "SpChariot"
      // 680379f8b83e5f9e033b828360827bc2f0e08c34df1abcc23de3d059fe2ac435_0
    case 20013: return "SpSkewer"
      // 0785cb4979024a83aaa2196e287e232d5d7e4ac959895a650c30ed00fedbc714_0
    case 20014: return "SpTripleTornado"
    // 680379f8b83e5f9e033b828360827bc2f0e08c34df1abcc23de3d059fe2ac435_0.png
  }
}

export const idToFilaName = (specialId: number) => {
  switch(specialId) {
    case 1: return "7269f1fa71d746d7b86ca2a71fc24c6ea4c764077ee50d692f80eddeaff90f1d_0.png"
    case 20006: return "bd327d1b64372dedefd32adb28bea62a5b6152d93aada5d9fc4f669a1955d6d4_0.png"
    case 20007: return "463eedc60013608666b260c79ac8c352f9795c3d0cce074d3fbbdbd2c054a56d_0.png"
    case 20009: return "fa8d49e8c850ee69f0231976208a913384e73dc0a39e6fb00806f6aa3da8a1ee_0.png"
    case 20010: return "252059408283fbcb69ca9c18b98effd3b8653ab73b7349c42472281e5a1c38f9_0.png"
    case 20012: return "680379f8b83e5f9e033b828360827bc2f0e08c34df1abcc23de3d059fe2ac435_0.png"
    case 20013: return "0785cb4979024a83aaa2196e287e232d5d7e4ac959895a650c30ed00fedbc714_0.png"
    case 20014: return "680379f8b83e5f9e033b828360827bc2f0e08c34df1abcc23de3d059fe2ac435_0.png"
    default: return ''
  }
}