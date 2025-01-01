import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import loginStore from '$lib/stores/loginStore.js';

export const load = async(event) => {
    let authed = true;
    loginStore.subscribe(v => {
	authed = v.login
    })
    if (authed==true) {
	redirect(303,'/dashboard')
    }
}
