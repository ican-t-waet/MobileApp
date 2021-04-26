<template>
    <Page>
        <ActionBar title="Urgent" />
        <StackLayout>
            <Label text="Urgent" height="400" backgroundColor="#43b883"
                fontWeight="bold" />
            <Label text="Number:C096" height="200" backgroundColor="#289062"
                fontWeight="bold" />
            <Label text="United Christian Hospital" height="200"
                backgroundColor="#1c6b48" fontWeight="bold" />
            <Label text=" Approximate Waiting Hour: 3Hours "" height="
                200" backgroundColor="#1c6b48" fontWeight="bold" />
            <WebView :src="encodeURI(url)" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                url: "https://leaflet-api.vercel.app/?center=22.322785369873046,%20114.22638552505225&zoom=17&marker=United%20Christian%20Hospital%7C22.323380856806946,%20114.22764079893635&sensor="
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
