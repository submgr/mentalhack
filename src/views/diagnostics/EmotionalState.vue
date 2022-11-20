<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <flow-form
          ref="flowform"
          v-on:complete="onComplete"
          v-bind:language="language"
          v-bind:progressbar="false"
          v-bind:standalone="true"
        >
          <question 
            v-for="(question, index) in questions" 
            v-bind="question" 
            v-bind:key="'m' + index" 
            v-model="question.model"
          >
          </question>
          
          <!-- Custom content for the Complete/Submit screen slots in the FlowForm component -->
          <template v-slot:complete>
            <div class="f-section-wrap">
              <div v-if="1<2">
                <div v-if="loading">
                  <span class="fh2">Please wait: The server is analyzing your response...</span>
                </div>
                <div v-else>
                  <div v-if="finalScore >= 15">
                    <span class="fh2">Excellent stability in relation to the emotional state</span>
                    <div style="border: 1px solid #ccc!important; border-radius: 10px; margin-right: 20%;">
                      <div style="background-color:green;height:24px;width:98%; border-radius: 10px;"></div>
                    </div>
                    <p class="f-description" style="margin-top: 15px;"><span>You have a very stable emotional state. Emotional health allows you to work productively and cope with the stresses of everyday life. It helps you reach your full potential. It helps you work with others and contribute to your community, and it affects your physical health.
                      <br><br>Now meditation will be useful to you in that it will help you maintain your current emotional state-it won't worsen. Also, meditation helps you understand yourself better.</span></p>
                  </div>
                  <div v-else-if="finalScore >= 9">
                    <span class="fh2">Moderate emotional state</span>
                    <div style="border: 1px solid #ccc!important; border-radius: 10px; margin-right: 20%;">
                      <div style="background-color:orange;height:24px;width:68%; border-radius: 10px;"></div>
                    </div>
                    <p class="f-description" style="margin-top: 15px;"><span>You have a moderate emotional state.
                      Emotional health allows you to work productively and cope with the stresses of everyday life.
                      It helps you reach your full potential.
                      It helps you work with others and contribute to your community,
                      It also affects your physical health.
                      <br><br>Now meditation will be good for you in that it will help you to increase your level of emotional well-being.
                      This will result in meditation helping you not only to understand yourself better, but also to improve your quality of life.</span></p>
                  </div>
                  <div v-else-if="finalScore >= 0">
                    <span class="fh2">Critically low emotional state</span>
                    <div style="border: 1px solid #ccc!important; border-radius: 10px; margin-right: 20%;">
                      <div style="background-color: darkred;height:24px;width:18%; border-radius: 10px;"></div>
                    </div>
                    <p class="f-description" style="margin-top: 15px;"><span>You have a very low level of emotional health.
                      Emotional health allows you to work productively and cope with the stresses of everyday life.
                      It helps you reach your full potential.
                      It helps you work with others and contribute to your community,
                      It also affects your physical health.
                      <br><br>Now meditations will be useful to you in that they will help you to increase the level of your emotional state.
                      Don't be scared: there is nothing to worry about, there are often times when the level of emotional well-being drops sharply. For example, this can happen in autumn or spring, or due to certain life circumstances.<br><br>The level of emotional state can be restored quite quickly, for this it is recommended to spend more time outdoors. If you're watching movies or TV shows, this is a great time to turn the moment on comedies (an example of such a series is The Big Bang Theory). Meditation will help you dive deeper into yourself, and this is what can help you: we often worry too much where we can do without it.</span></p>
                  </div>
                  <div style="border: 1px solid #ccc!important; background-color: var(--vff-button-color); margin-right: 30%;" @click="goNext">
                    <span style="font-size: 18px; display: block; font-weight: 500; color: var(--vff-button-text-color); padding: .6em 1.4em;">Continue</span>
                  </div>
                </div>
              </div>
            </div>  
          </template>
          <!-- We've overriden the default "complete" slot content -->
          <template v-slot:completeButton>
            <div class="f-submit">
              <!-- Leave empty to hide default submit button -->
            </div>
          </template>
        </flow-form>
      </ion-content>
    </ion-page>
  </template>

<style scoped>
  rion-content{
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.121) 10%, rgba(2, 156, 12, 0.714)), url('https://images.unsplash.com/photo-1586078074298-05dca4848695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80') !important;
    background-position: 100%;
    background-size: cover !important;
  }

  .vff ul.f-radios li {
    border-radius: 20px !important;
  }
</style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage, IonContent } from '@ionic/vue';
  import { FlowForm, Question, QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'
  
  export default  defineComponent({
    name: 'Tab1Page',
    components: { IonContent, IonPage, FlowForm, Question },
    data() {
      return {
        finalScore: 0,
        loading: false,
        completed: false,
        language: new LanguageModel(),
        questions: [
          {
            type: 'multiplechoice',
            id: 'any_meditations_experience',
            tagline: "Let's get to know you better!",
            title: '👋, have you tried meditation before?',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'I have never tried meditation before',
                value: 'technical_issue'
              },
              {
                label: "I tried but it didn't work or I didn't understand",
                value: 'enter_ticket'
              },
              {
                label: 'I have some experience in this matter',
                value: 'enter_ticket'
              },
              {
                label: "I'm a pro at this!",
                value: 'enter_ticket'
              },
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_canworkwithcloserelations',
            tagline: 'Indicate how true the presented statement is for you.',
            title: 'I can develop and maintain close relationships.',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Almost always',
                value: 'almost_always'
              },
              {
                label: 'Sometimes/occasionally',
                value: 'sometimes'
              },
              {
                label: 'Very rarely',
                value: 'very_seldom'
              }
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_cantakeresponsibility',
            tagline: 'Indicate how true the presented statement is for you.',
            title: 'I take responsibility for my actions.',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Almost always',
                value: 'almost_always'
              },
              {
                label: 'Sometimes/occasionally',
                value: 'sometimes'
              },
              {
                label: 'Very rarely',
                value: 'very_seldom'
              }
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_cantakeobstacklesasopportunities',
            tagline: 'Indicate how true the presented statement is for you.',
            title: 'I see difficulties and change as opportunities for growth.',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Almost always',
                value: 'almost_always'
              },
              {
                label: 'Sometimes/occasionally',
                value: 'sometimes'
              },
              {
                label: 'Very rarely',
                value: 'very_seldom'
              }
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_cantakecontroloverlife',
            tagline: 'Indicate how true the presented statement is for you.',
            title: "I feel like I'm pretty much in control of my life.",
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Almost always',
                value: 'almost_always'
              },
              {
                label: 'Sometimes/occasionally',
                value: 'sometimes'
              },
              {
                label: 'Very rarely',
                value: 'very_seldom'
              }
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_canlaughtonmylifeandme',
            tagline: 'Indicate how true the presented statement is for you.',
            title: 'I can laugh at life and at myself.',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Almost always',
                value: 'almost_always'
              },
              {
                label: 'Sometimes/occasionally',
                value: 'sometimes'
              },
              {
                label: 'Very rarely',
                value: 'very_seldom'
              }
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_feelgood',
            tagline: 'Indicate how true the presented statement is for you.',
            title: 'I feel myself good.',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Almost always',
                value: 'almost_always'
              },
              {
                label: 'Sometimes/occasionally',
                value: 'sometimes'
              },
              {
                label: 'Very rarely',
                value: 'very_seldom'
              }
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_canworkwithstressandtakerest',
            tagline: 'Indicate how true the presented statement is for you.',
            title: 'I manage to adequately cope with stress and tension and find time for rest.',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Almost always',
                value: 'almost_always'
              },
              {
                label: 'Sometimes/occasionally',
                value: 'sometimes'
              },
              {
                label: 'Very rarely',
                value: 'very_seldom'
              }
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_canlearnbymymistrakes',
            tagline: 'Indicate how true the presented statement is for you.',
            title: 'I am able to admit my personal shortcomings and learn from my mistakes.',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Almost always',
                value: 'almost_always'
              },
              {
                label: 'Sometimes/occasionally',
                value: 'sometimes'
              },
              {
                label: 'Very rarely',
                value: 'very_seldom'
              }
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_canexpressfeelings',
            tagline: 'Indicate how true the presented statement is for you.',
            title: 'I can recognize and express my feelings.',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Almost always',
                value: 'almost_always'
              },
              {
                label: 'Sometimes/occasionally',
                value: 'sometimes'
              },
              {
                label: 'Very rarely',
                value: 'very_seldom'
              }
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_enjoylife',
            tagline: 'Indicate how true the presented statement is for you.',
            title: 'I enjoy life.',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Almost always',
                value: 'almost_always'
              },
              {
                label: 'Sometimes/occasionally',
                value: 'sometimes'
              },
              {
                label: 'Very rarely',
                value: 'very_seldom'
              }
            ],
            model: '',
          },
          {
            type: 'sectionbreak',
            id: 'review',
            tagline: 'Your responses help us measure your emotional state to recommend optimal meditations.',
            title: 'Thanks.',
            multiple: false,
            required: true,
            helpTextShow: false,
            model: '',
          },
        ]
      }
    },
    methods: {
      /* eslint-disable-next-line no-unused-vars */
      onComplete(completed, questionList) {
        // This method is called whenever the "completed" status is changed.
        this.completed = completed
        // Set `submitted` to true so the form knows not to allow back/forward
        // navigation anymore.
        //!!! this.$refs.flowform.submitted = true
        this.onSendData()
      },
      
      onSendData() {
        // eslint-disable-next-line
        const self = this
        const data = this.getData()
        this.loading = true
        
        /*
          You can use Fetch API to send the data to your server, eg.:
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        */
        setTimeout(() => {
          self.loading = false
        }, 1500)
      },
      getData() {
        var data = {
          questions: [],
          answers: []
        }
    
        this.questions.forEach(question => {
          switch (question.model) {
            case "almost_always":
              this.finalScore += 2;
              break;
            case "sometimes":
              this.finalScore += 1;
              break;
            case "very_seldom":
              this.finalScore += 0;
              break;
            default:
              //nothing!
              break;
          }
          if (question.title) {
            let answer = question.model
            if (Array.isArray(answer)) {
              answer = answer.join(', ')
            }
            // eslint-disable-next-line
            data.questions.push(question.title)
            // eslint-disable-next-line
            data.answers.push(answer)
          }
        })

        localStorage.setItem("stats_emotionalstate_atleast_once", "true")
    
        return data
      },
      goNext(event) {
        console.log("Going home!", event)
        this.$router.push({path:'/tabs/hello', replace: true});
      }
    }
  });
  </script>

<style>
/* Import Vue Flow Form base CSS */
@import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
/* Import one of the Vue Flow Form CSS themes (optional) */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
@import '../../assets/css/quiz-flow.css';
</style>
  