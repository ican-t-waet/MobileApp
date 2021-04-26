<template>
    <Page>
        <ActionBar title="Non-Urgent" />
        <StackLayout>
            <Label text="Non-Urgent" height="400" backgroundColor="#43b883"
                fontWeight="bold" />
            <Label text="Number:A125" height="200" backgroundColor="#289062"
                fontWeight="bold" />
            <Label text="Prince of Wales Hospital" height="200"
                backgroundColor="#1c6b48" fontWeight="bold" />
            <Label text=" Approximate Waiting Hour: 3 Hours "" height="
                200" backgroundColor="#1c6b48" fontWeight="bold" />
            <WebView :src="encodeURI(url)" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                url: "https://leaflet-api.vercel.app/?center=22.38086147233275,%20114.2034902465666&zoom=17&marker=Prince%20of%20Wales%20Hospital%7C22.379138394795035,%20114.20147259806531&sensor="
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
