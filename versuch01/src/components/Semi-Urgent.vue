<template>
    <Page>
        <ActionBar title="Semi-Urgent" />
        <StackLayout>
            <Label text="Semi-Urgent" height="400" backgroundColor="#43b883"
                fontWeight="bold" />
            <Label text="Number:B112" height="200" backgroundColor="#289062"
                fontWeight="bold" />
            <Label text="Kwong Wah Hospital"" height=" 200"
                backgroundColor="#1c6b48" fontWeight="bold" />
            <Label text=" Approximate Waiting Hour: 4 Hours "" height="
                200" backgroundColor="#1c6b48" fontWeight="bold" />
            <WebView :src="encodeURI(url)" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                url: "https://leaflet-api.vercel.app/?center=22.314616039554977,%20114.17137270042406&zoom=17&marker=Kwong%20Wah%20Hospital%7C22.31535051606382,%20114.17293911057&sensor="
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
