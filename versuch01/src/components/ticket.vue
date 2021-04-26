<template>
    <Page>
        <GridLayout rows="*,100,*" columns="*,*">
            <Button   class="button-1" @tap="next('nonurg')" text="Non Urgent" row="0" col="0"
                backgroundColor="Yellow" ></Button>
            <Button class="button-2" text="Semi-Urgent" @tap="next('semi')" row="1" col="0"
                backgroundColor="green" />
            <Button class="button-3" text="test" row="1" col="1" @tap="next('profile')"
                backgroundColor="green" />
            <Button class="button-4" Label text="Urgent" row="0" col="1"@tap="next('urgent')"
                backgroundColor="Blue" />
            <Button class="button-5" Label text="Emergency" row="2" col="0" @tap="next('emerg')"
                backgroundColor="Brown" />
            <Button class="button-6" Label text="Critical" row="2" col="1" @tap="next('crit')"
                backgroundColor="Red" />
        </GridLayout>
    </Page>
</template>

<script>
import  nonurgent from "./Non-urgent"
import  Critical from "./Critical"
import  Emergency from "./Emergency"
import  SemiUrgent from "./Semi-Urgent"
import  profil from "./profile"
import  Urgent from "./Urgent"
export default {
  data() {
              return {};
          },
  methods: {
    next(page) {console.log("mh");
          if(page=="nonurg"){
        this.$navigateTo(nonurgent);
      }
      if(page=="crit"){
        this.$navigateTo(Critical);
      }if(page=="emerg"){
        this.$navigateTo(Emergency);
      }if(page=="semi"){
        console.log("hi");
        this.$navigateTo(SemiUrgent);
      }if(page=="urgent"){
        this.$navigateTo(Urgent);
      }
      if(page=="profile"){
        this.$navigateTo(profil);
      }
    }
    }
  };
  </script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 50;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>
