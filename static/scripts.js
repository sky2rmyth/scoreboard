document.addEventListener('DOMContentLoaded', () => {
    new apifootball({
        "host": "widgets.api-sports.io",
        "key": "8d09d35d7cff4a5fa569fa4737499ddc",
        "widget": "livescore",
        "display_key": false,
        "display_teams": true,
        "display_scores": true,
        "display_date": true,
        "container": "widget"
    });
});
