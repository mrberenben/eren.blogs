import { Store } from "vuex";

declare module "@vue/runtime-core" {
  export interface State {}

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
