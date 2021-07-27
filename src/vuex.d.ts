import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State } from './store/store_types'

declare module '@vue/runtime-core' {

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}