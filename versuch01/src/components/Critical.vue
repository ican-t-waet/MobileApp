<template>
    <Page>
        <ActionBar title="Critical" />
        <StackLayout>
            <Label text=" Critical " height=" 400 " backgroundColor="
            #43b883 " fontWeight=" bold " />
            <Label text=" Number:E015" height=" 200 " backgroundColor="
            #289062 " fontWeight=" bold " />
            <Label text=" Tuen Mun Hospital "" height=" 200"
                backgroundColor="#1c6b48" fontWeight="bold" />
            <Label text=" Approximate Waiting Hour: 30 Minutes "" height=" 200"
                backgroundColor="#1c6b48" fontWeight="bold" />
            <WebView :src="encodeURI(url)" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                url: "https://leaflet-api.vercel.app/?center=22.40679650077786,113.97877907540739&zoom=17&marker=Tuen%20Mun%20Hospital%7C22.407709029013727,%20113.97569989943385&sensor="
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
