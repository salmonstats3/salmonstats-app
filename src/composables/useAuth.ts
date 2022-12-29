import { getAuth, signInWithPopup, TwitterAuthProvider, Auth } from "firebase/auth";

export const useAuth = () => {
  const state = useState<{
    currentUser: Auth['currentUser'],
    isLogin: boolean,
  }>("authState", () => ({
    currentUser: null,
    isLogin: false
  }));
  const loginWithTwitter = async () => {
    const auth = getAuth()
    const provider = new TwitterAuthProvider();
    const result = await signInWithPopup(auth, provider).catch((error) => {
      console.log('error loginWithTwitter', error);
      alert("ログインに失敗しました");
    });
    if (result != null) {
      // console.log('success loginWithTwitter', result);
      state.value.currentUser = result.user
      state.value.isLogin = true
      return result;
    }
  };
  const logoutWithTwitter = async() =>{
    const auth = getAuth()
    auth.signOut().then(() => {
      state.value.currentUser = null
      state.value.isLogin = false
    })
  }
  const onAuthStateChanged = () => {
    const auth = getAuth()
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        state.value.currentUser = user
        state.value.isLogin = true
      }
      unsubscribe()
    })
  }

  return {
    state,
    loginWithTwitter,
    logoutWithTwitter,
    onAuthStateChanged,
  };
};
