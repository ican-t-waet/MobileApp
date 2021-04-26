<template>
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
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    import {
        FETCH_PROFILE
    } from "@/store/actions.type";
    export default {
        name: "RwvProfile",
        mounted() {
            this.$store.dispatch(FETCH_PROFILE, this.$route.params);
        },
        methods: {
            isCurrentUser() {
                if (this.currentUser.username && this.profile.username) {
                    return this.currentUser.username === this.profile
                    .username;
                }
                return false;
            }
        },
        watch: {
            $route(to) {
                this.$store.dispatch(FETCH_PROFILE, to.params);
            }
        }
    };
</script>
