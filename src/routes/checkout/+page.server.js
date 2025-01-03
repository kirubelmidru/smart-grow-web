
import Chapa from 'chapa';
import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import { FireFunc } from "$lib/firebase/firebase.js";

let myChapa = new Chapa('Bearer CHASECK_TEST-ij9Gbg3A0sGAYidFLASZhZMPRIaimbGr')


export const actions = {
    paymentInit: async ({ request }) => {
      let { firstName,lastName,email,phone,city,subCity} = Object.fromEntries(
        await request.formData(),
      );
       const customerInfo =  {
        amount: 1000,
        currency: 'ETB',
        email: email,
        first_name: firstName,
        last_name: lastName,
        callback_url: 'https://smart-grow-web.vercel.app/api/payment/callback',
        return_url: 'https://smart-grow-web.vercel.app/success',
        customization: {
            title: 'hello',
        }
        
        }
        
        let txnReference,url;
        let response = await myChapa.initialize(customerInfo, { autoRef: true })
        txnReference = response["tx_ref"];
        url = response["data"]["checkout_url"];
       
       FireFunc.addToPending(txnReference,firstName,lastName,email,phone,city,subCity,1000)

        
        redirect(302, url)
    }
}