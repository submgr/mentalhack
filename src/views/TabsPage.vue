<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon :icon="musicalNote" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { musicalNote, gameController, videocam } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      musicalNote,
      gameController,
      videocam,
      footer: "show"
    }
  }
});

export function hideTabs() {
  const tabsEl = document.querySelector('ion-tabs');
  if (tabsEl) {
    tabsEl.hidden = true;
  }
}

export function showTabs() {
  const tabsEl = document.querySelector('ion-tabs');
  if (tabsEl) {
    tabsEl.hidden = false;
  }
}
</script>
