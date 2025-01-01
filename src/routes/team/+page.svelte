<script>
import Member from "$lib/components/articles/Member.svelte";

import Amanuel_Million from "$lib/images/first.jpg";
import Bemnet_Yohannes from "$lib/images/bemnet_yohannes.jpg";
import Betelhem_Fisseha from "$lib/images/betelhem_fisseha.jpg";
import Ezana_Getachew from "$lib/images/ezana_getachew.jpg";
import Habtamu_Geta from "$lib/images/habtamu_geta.jpg";
import Habtamu_Worku from "$lib/images/habtamu_worku.jpg";
import Kirubel_Eskender from "$lib/images/kirubel_eskender.jpg";
import Milkyas_Sentayehu from "$lib/images/milkyas_sentayehu.jpg";
import Nahom_Haileselassie from "$lib/images/nahom_haileselassie.jpg";
import Samuel_Moges from "$lib/images/samuel_moges.jpg";
import Yonathan_Tariku from "$lib/images/yonathan_tariku.jpg";
</script>

<div class="team-hero">
    <h2 style="text-align: center; font-size: 6rem;">Teams Around the Project</h2>
</div>
<div class="team-list">
    <Member img = {Amanuel_Million} name = "Amanuel Million" job = "Software Engineer"/>
    <Member img = {Bemnet_Yohannes} name = "Bemnet Yohannes" job = "Environmental Engineer"/>
    <Member img = {Betelhem_Fisseha} name = "Betelhem Fisseha" job = "Architecture"/>
    <Member img = {Ezana_Getachew} name = "Ezana Getachew" job = "Electro-mechanical Engineer"/>
    <Member img = {Habtamu_Geta} name = "Habtamu Geta" job = "Electro-mechanical Engineer"/>
    <Member img = {Habtamu_Worku} name = "Habtamu Worku" job = "Electrical Engineer"/>
    <Member img = {Kirubel_Eskender} name = "Kirubel Eskender" job = "Software Engineer"/>
    <Member img = {Milkyas_Sentayehu} name = "Milkyas Sentayehu" job = "Mechanical Engineer"/>
    <Member img = {Nahom_Haileselassie} name = "Nahom Haileselassie" job = "Chemical Engineer"/>
    <Member img = {Samuel_Moges} name = "Samuel Moges" job = "Civil Engineer"/>
    <Member img = {Yonathan_Tariku} name = "Yonathan Tariku" job = "Electrical Engineer"/>
</div>

<style>
.team-hero {
    height: 100vh;
    background: black;
    padding: 8rem;
    color: white;
}
.team-list {
    max-width: 1240px;
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
}
@media only screen and (max-width: 1500px) {
    .team-list {
	max-width: 960px;
	grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media only screen and (max-width: 960px) {
    .team-list {
	max-width: 540px;
	grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>
