import Vue from 'nativescript-vue'
import App from './components/App'
import { firebase } from "@nativescript/firebase";
/*<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
<Label text="Best gradient." horizontalAlignment="center"
       style="color: white; padding: 20" />
</Gradient>*/
//const firebase = require("nativescript-plugin-firebase");
//const firebaseWebApi = require("nativescript-plugin-firebase/app");

if(TNS_ENV === 'production')


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
  () => {
    console.log("firebase.init done");
  },
  error => {
    console.log(`firebase.init error: ${error}`);
  }
);

firebase.login(
      {
        type: firebase.LoginType.ANONYMOUS
      })
      .then(user => console.log("User uid: " + user.uid))
      .catch(error => console.log("Trouble in paradise: " + error));


new Vue({
  render: h => h('frame', [h(App)])
}).$start()
