<template lang="en">
<ion-page>
    <ion-content :fullscreen="true">
        <!---<vue-plyr :options="options" @click="" ref="videoplayer" style="object-fit: cover;">
            <video controls playsinline>
                <source size="720" src="https://test.deqstudio.com/pexels-tima-miroshnichenko-5716900.mp4" type="video/mp4" />
                <source size="1080" src="https://test.deqstudio.com/pexels-tima-miroshnichenko-5716900.mp4" type="video/mp4" />
            </video>
        </vue-plyr>--->
        <iframe src="https://test.deqstudio.com/embeddable/halloweengsap/dist/" style="object-fit: cover; height: 100%; width: 100%; border: none;"></iframe>
        <ion-modal @willDismiss="Modal_onWillDismiss" :is-open="meditationState == 'prestart_info'" trigger="open-modal" :initial-breakpoint="0.50" :breakpoints="[0,  0.50, 0.75]" handle-behavior="cycle">
            <ion-content class="ion-padding">
                <div class="ion-margin-top">
                    <ion-label style="white-space: pre-wrap;"><br><b style="font-size: 28px;">You are ready?</b><br><br>Your meditation is ready. Before you begin, we usually recommend making sure you are comfortable and can hear the sound. If it is noisy around, use headphones.</ion-label>
                </div>
                <ion-button fill="clear" @click="startMeditation" style="font-weight: 700; margin-left: -3.95% !important; ">Let's start! <ion-icon slot="end" :icon="arrowForward"></ion-icon>
                </ion-button>
            </ion-content>
        </ion-modal>
    </ion-content>
</ion-page>
</template>

<style scoped>

</style>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import {
    Howl,
    Howler
} from 'howler';
import {
    IonPage,
    IonContent,
    IonModal,
    IonLabel
} from '@ionic/vue';

import {
    closeOutline,
    playOutline,
    arrowForward
} from 'ionicons/icons';

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import globaldata from '../../modules/global';

export default defineComponent({
    name: 'Tab1Page',
    props: {
        clinical_records: String,
    },
    components: {
        IonContent,
        IonPage,
        IonModal,
        IonLabel,
        VuePlyr
    },
    mounted() {
        const tabsEl = document.querySelector('ion-tab-bar');
        if (tabsEl) {
            tabsEl.hidden = true;
            tabsEl.style.height = "1";
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        //this.videoplayer = this.$refs.videoplayer.player;
    },
    methods: {
        startMeditation() {
            this.meditationState = "playing"
            var data = JSON.parse(localStorage.getItem("temp/alfa_meditationdata"))
            console.log("Received LOCAL persist data from localstorage.", data)

            var a = 1;

            //if (1 < a - 10) {
            //    this.videoplayer.source = {
            //        type: 'video',
            //        title: 'Meditation',
            //        sources: [{
            //                src: 'https://test.deqstudio.com/pexels-tima-miroshnichenko-5716900.mp4',
            //                type: 'video/mp4',
            //                size: 720,
            //            },
            //            {
             //               src: 'https://test.deqstudio.com/pexels-tima-miroshnichenko-5716900.mp4',
             //               type: 'video/webm',
             //               size: 1080,
            //            },
            //        ]
           //     };
            //    this.videoplayer.play();
            //}

            //if (!data.content) {
            //    console.log("[SCREEN] CAN'T ACCESS $content AT $response!\nIt's critical!")
            //}

            //if (data.content.audio.audiotrack) {
            //    var audiotrack = new Howl({
            //        src: [data.content.audio.audiotrack.url],
             //       html5: true
            //    });
            //    audiotrack.play();
            //} else {
            //    console.log("[SCREEN] THERE IS NO audio/audiotrack!")
            //}
//
            //if (data.content.audio.backgroundtrack) {
            //    var backgroundtrack = new Howl({
            //        src: [data.content.audio.backgroundtrack.url],
            //        html5: true
            //    });
            //    backgroundtrack.play();
            //} else {
            //    console.log("[SCREEN] Can't find audio/backgroundtrack!")
            //}
//
            var audiotrack = new Howl({
                src: ["http://test.deqstudio.com/embeddable/medi10a.weba"],
                html5: true
            });
            audiotrack.play();
        }
    },
    data() {
        return {
            test: this.$route.params.test,
            videoplayer: null,
            meditationState: "prestart_info",
            options: {
                autoplay: false,
                loop: {
                    active: true
                },
                settings: [],
                controls: [],
                fullscreen: {
                    enabled: false,
                    fallback: true,
                    iosNative: false,
                    container: null
                }
            }
        }
    },
    setup() {
        return {
            closeOutline,
            playOutline,
            arrowForward
        }
    }
});
</script>
