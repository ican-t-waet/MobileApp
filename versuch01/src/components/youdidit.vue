<template>
    <Page>
        <ActionBar :title='hometitle' />

        <StackLayout>
            <BottomNavigation>
                <TabStrip>
                    <TabStripItem>
                        <Label text="Profil"></Label>
                        <Image src="res://home"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Tickets"></Label>
                        <Image src="res://search"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Settings"></Label>
                        <Image src="res://settings"></Image>
                    </TabStripItem>
                </TabStrip>
                <TabContentItem>
                    <Frame id="Profil">
                      <div class="profile-page">
                          <div class="user-info">
                              <div class="container">
                                  <div class="row">
                                      <div class="col-xs-12 col-md-10 offset-md-1">
                                          <img :src="profile.image" class="user-img" />
                                          <h4>{{ profile.username }}</h4>
                                          <p>{{ profile.bio }}</p>
                                          <div v-if="isCurrentUser()">
                                              <router-link
                                                  class="btn btn-sm btn-outline-secondary action-btn"
                                                  :to="{ name: 'settings' }">
                                                  <i class="ion-gear-a"></i> Edit Profile
                                                  Settings
                                              </router-link>
                                          </div>
                                          <div v-else>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="container">
                              <div class="row">
                                  <div class="col-xs-12 col-md-10 offset-md-1">
                                      <div class="profiles-toggle">
                                          <ul class="nav nav-pills outline-active">
                                              <li class="nav-item">
                                                  <router-link class="nav-link"
                                                      active-class="active" exact
                                                      :to="{ name: 'profile-name' }">
                                                      name
                                                  </router-link>
                                              </li>
                                              <li class="nav-item">
                                                  <router-link class="nav-link"
                                                      active-class="active" exact
                                                      :to="{ name: 'profile-surname' }">
                                                      Surname
                                                  </router-link>
                                              </li>
                                              <li class="nav-item">
                                                  <router-link class="nav-link"
                                                      active-class="active" exact
                                                      :to="{ name: 'profile-birthday' }">
                                                      Birthday
                                                  </router-link>
                                              </li>
                                              <li class="nav-item">
                                                  <router-link class="nav-link"
                                                      active-class="active" exact
                                                      :to="{ name: 'profile-phone_no' }">
                                                      Phone Number
                                                  </router-link>
                                              </li>
                                              <li class="nav-item">
                                                  <router-link class="nav-link"
                                                      active-class="active" exact
                                                      :to="{ name: 'profile-gender' }">
                                                      Gender
                                                  </router-link>
                                              </li>
                                              <li class="nav-item">
                                                  <router-link class="nav-link"
                                                      active-class="active" exact
                                                      :to="{ name: 'profile-id' }">
                                                      ID
                                                  </router-link>
                                              </li>
                                              <li class="nav-item">
                                                  <router-link class="nav-link"
                                                      active-class="active" exact
                                                      :to="{ name: 'profile-passsword' }">
                                                      Password
                                                  </router-link>
                                              </li>
                                          </ul>
                                      </div>
                                      <router-view></router-view>
                                  </div>
                              </div>
                          </div>
                      </div>
                        </ListView>
                </TabContentItem>
                <TabContentItem>
                    <Frame id="Tickets">
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
                </TabContentItem>
                <TabContentItem>
                    <Frame id="Settings">
                      <div class="settings-page">
                          <div class="container page">
                              <div class="row">
                                  <div class="col-md-6 offset-md-3 col-xs-12">
                                      <h1 class="text-xs-center">Your Settings</h1>
                                      <form @submit.prevent="updateSettings()">
                                          <fieldset>
                                              <fieldset class="form-group">
                                                  <input class="form-control form-control-lg"
                                                      type="text" v-model="currentUser.name"
                                                      placeholder="Your Name" />
                                              </fieldset>
                                              <fieldset class="form-group">
                                                  <input class="form-control form-control-lg"
                                                      type="text" v-model="currentUser.surname"
                                                      placeholder="Your Surname" />
                                              </fieldset>
                                              <fieldset class="form-group">
                                                  <textarea class="form-control form-control-lg"
                                                      rows="8" v-model="currentUser.birthday"
                                                      placeholder="Your Birthday"></textarea>
                                              </fieldset>
                                              <fieldset class="form-group">
                                                  <input class="form-control form-control-lg"
                                                      type="text" v-model="currentUser.phone"
                                                      placeholder="Phone Number" />
                                              </fieldset>
                                              <fieldset class="form-group">
                                                  <input class="form-control form-control-lg"
                                                      type="password"
                                                      v-model="currentUser.password"
                                                      placeholder="Password" />
                                              </fieldset>
                                              <fieldset class="form-group">
                                                  <input class="form-control form-control-lg"
                                                      type="password"
                                                      v-model="currentUser.gender"
                                                      placeholder="gender" />
                                              </fieldset>
                                              <fieldset class="form-group">
                                                  <input class="form-control form-control-lg"
                                                      type="password"
                                                      v-model="currentUser.id"
                                                      placeholder="ID" />
                                              </fieldset>
                                              <button
                                                  class="btn btn-lg btn-primary pull-xs-right">
                                                  Update Settings
                                              </button>
                                          </fieldset>
                                      </form>
                                      <!-- Line break for logout button -->
                                      <hr />
                                      <button @click="logout" class="btn btn-outline-danger">
                                          Or click here to logout.
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                </TabContentItem>
            </BottomNavigation>
        </StackLayout>
    </Page>
</template>


<script>
import  nonurgent from "./Non-urgent"
import  Critical from "./Critical"
import  Emergency from "./Emergency"
import  SemiUrgent from "./Semi-Urgent"
import  profil from "./profile"
import  Urgent from "./Urgent"
    import {
        mapGetters
    } from "vuex";
    import {
        LOGOUT,
        UPDATE_USER
    } from "@/store/actions.type";
    export default {
        name: "RwvSettings",
        computed: {
            ...mapGetters(["currentUser"])
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
          },


        isCurrentUser() {
            if (this.currentUser.username && this.profile.username) {
                return this.currentUser.username === this.profile
                .username;
            }
            return false;
        },

    watch: {
        $route(to) {
            this.$store.dispatch(FETCH_PROFILE, to.params);
        }
    },
            updateSettings() {
                this.$store.dispatch(UPDATE_USER, this.currentUser).then(
            () => {
                    // #todo, nice toast and no redirect
                    this.$router.push({
                        name: "home"
                    });
                });
            },
            logout() {
                this.$store.dispatch(LOGOUT).then(() => {
                    this.$router.push({
                        name: "home"
                    });
                });
            }
        }
      };

  </script>
<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
