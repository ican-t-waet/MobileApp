<template>
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
</template>

<script>
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
