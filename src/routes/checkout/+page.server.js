
import Chapa from 'chapa';
import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import {FireFunc} from'../../lib/firebase/firebase.js'
import cartStore from '../../stores/cartStore.js';

let myChapa = new Chapa('Bearer CHASECK-JfoQ1UxNpBYYJKBbAAXX4wpVaMGUP78t')


export const actions = {
    paymentInit: async ({ request }) => {
	let { firstName,lastName,email,phone,city,subCity,description,price,order} = Object.fromEntries(
	    await request.formData(),
	);
	const customerInfo =  {
	    amount: price,
	    currency: 'ETB',
	    email: email,
	    first_name: firstName,
	    last_name: lastName,
	    callback_url: 'https://chakkawebhook.onrender.com/chapa',
	    return_url: 'https://www.chakkaorigins.co/biodiverse-oils',
	    customization: {
		title: 'hello',
		description: order
	    }

	}

	let txnReference,url;
	let response = await myChapa.initialize(customerInfo, { autoRef: true })
	txnReference = response["tx_ref"];
	url = response["data"]["checkout_url"];

	let orderarray = []
	order = JSON.parse(order)
	order.forEach(prod => {
	    orderarray.push(
		{
		    productID:prod.productID,
		    name:prod.name,
		    amount:prod.amount 
		}
	    )
	});
	FireFunc.addToPending(txnReference,firstName,lastName,email,phone,city,subCity,description,orderarray,price)


	redirect(302, url)
    }
}
