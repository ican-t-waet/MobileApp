<template>
    <Page>
        <ActionBar title="Emergency" />
        <StackLayout>
            <Label text="Emergency" height=" 400 " backgroundColor="
            #43b883 " fontWeight="bold" />
            <Label text=" Number:D146 " height=" 200 " backgroundColor="
            #289062 " fontWeight="bold" />
            <Label text=" Pok Oi Hospital "" height=" 200"
                backgroundColor="#1c6b48" fontWeight="bold" />
            <Label text=" Approximate Waiting Hour: 2 Hours "" height="
                200" backgroundColor="#1c6b48" fontWeight="bold" />
            <WebView :src="encodeURI(url)" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                url: "https://leaflet-api.vercel.app/?center=22.444976194024267,%20114.04581149410635&zoom=17&marker=Pok%20Oi%20Hospital%7C22.445590990255315,%20114.0418418245584&sensor="
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 200;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>
