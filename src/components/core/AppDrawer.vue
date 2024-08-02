<template>
  <v-navigation-drawer
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <!-- <v-toolbar>

    </v-toolbar> -->
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home-city" title="Gateways" value="gateways" :to="'/gateways'"></v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list>
        <v-list-item>
          <v-btn block>
            Settings
          </v-btn>
          <template v-slot:append>
            <v-btn
              :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
              variant="text"
              :style="rail ? 'margin-left: -12px; margin-right: 12px;' : ''"
              @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { useRoute } from 'vue-router'
const route = useRoute()

defineProps(['menus'])

const store = useAppStore()

const rail = computed({
  get() {
    return store.rail;
  },
  set(val) {
    store.setRail(val);
  }
})
</script>
