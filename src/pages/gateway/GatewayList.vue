<template>
  <DefaultLayout>
    <v-row no-gutters>
      <v-col>
        <h2>Gateway List</h2>
      </v-col>
      <v-col>
        <v-dialog
          width="50%"
          persistent
          v-model="dialog"
        >
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn outlined class="float-right" tile prepend-icon="mdi-pencil" v-bind="activatorProps" @click="onOpenOrg()">
              Create
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card
              prepend-icon="mdi-earth"
              title="Select Country"
            >
              <v-divider class="my-1"></v-divider>

              <v-card-text class="px-4">
                <v-text-field label="Label" v-model="org.name"></v-text-field>

                <v-textarea label="Label" v-model="org.description"></v-textarea>

              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn
                  text="Close"
                  @click="isActive.value = false"
                ></v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  color="surface-variant"
                  text="Save"
                  variant="flat"
                  @click="createOrg()"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
    <v-divider class="my-2"></v-divider>
    <v-row no-gutters>
      <v-col cols="12" md="4" class="pa-1" v-for="(gateway, i) in gateways" :key="i">
        {{ gateway }}
      </v-col>
    </v-row>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { ref } from 'vue'

const gateways = ref([])
const dialog = ref(false)

</script>
