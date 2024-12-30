import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import loginStore from '$lib/stores/loginStore.js';

export const load = async(event) => {
    let authed = false;
    loginStore.subscribe(v => {
	authed = v.login
    })
    if (authed==false) {
	redirect(303,'/login')
    }
}
