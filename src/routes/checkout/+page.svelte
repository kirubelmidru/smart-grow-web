<script>
import { FireFunc } from '../../lib/firebase/firebase';
import cartStore from '../../stores/cartStore';
import CartProduct from '../../lib/CartProduct.svelte';
import { stringify } from 'uuid';
function submitForm(event) {
    event.preventDefault();
}

const handleClick = (id, task) => {
    const newList = $cartStore.cartProducts
    .filter((product) => !(product.id === id && task === 'decr' && product.amount === 1))
    .map((product) => {
	if (product.id === id) {
	    return {
		...product,
		amount:
		task === 'incr'
		    ? product.amount + 1
		    : product.amount > 1
			? product.amount - 1
			: product.amount
	    };
	} else {
	    return product;
	}
    });

    console.log('newList', newList);
    localStorage.setItem('cart_list', JSON.stringify(newList));
    cartStore.update((curr) => {
	return {
	    ...curr,
	    cartProducts: newList
	};
    });
};

let subtotal = 0;
$: {
    subtotal = 0;
    $cartStore.cartProducts.map((product) => {
	subtotal += Number(parseFloat((product.amount * product.price).toFixed(2)));
    });

    let deci = subtotal.toString().split('.')[1];
    subtotal = parseFloat(`${Math.floor(subtotal)}.${deci ? deci?.slice(0, 2) : '00'}`);
}
</script>

<div
    class="flex items-center justify-center h-screen flex-col-reverse lg:flex-row mt-[30vh] lg:mt-0"
>
    <form class="w-full max-w-lg" method="post" action="?/paymentInit">
	<h1 class="text-4xl my-10  text-center font-semibold">Chakka Origins thanks you<br>for your business!</h1>
	<div class="flex flex-wrap -mx-3 mb-6">
	    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
		<input
		    required
		    class="appearance-none block w-full bg-white-800 text-gray-700 border border-gray-300  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 rounded-none"
		    type="text"
		    placeholder="First Name"
		    name="firstName"
		/>
	    </div>
	    <div class="w-full md:w-1/2 px-3">
		<input
		    required
		    class="appearance-none block w-full bg-white-800 text-gray-700 border border-gray-300 rounded-none py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
		    type="text"
		    placeholder="Last Name"
		    name="lastName"
		/>
	    </div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
	    <div class="w-full px-3">
		<input
		    required
		    class="appearance-none block w-full bg-white-800 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
		    type="email"
		    placeholder="Email"
		    name="email"
		/>
	    </div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
	    <div class="w-full px-3">
		<input
		    required
		    class="appearance-none block w-full bg-white-800 text-gray-700 border border-gray-300 rounded-none py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
		    type="phone"
		    placeholder="Phone"
		    name="phone"
		/>
	    </div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-2">
	    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
		<label
		    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
		    for="grid-state"
		>
		    City
		</label>
		<div class="relative">
		    <select
			class="block appearance-none w-full bg-white-800 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-none leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
			name="city"
		    >
			<option>Addis Ababa</option>
		    </select>
		    <div
			class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
		    >
			<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
			><path
				d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
			    /></svg
			>
		    </div>
		</div>
	    </div>
	    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
		<label
		    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
		    for="grid-state"
		>
		    SubCity
		</label>
		<div class="relative">
		    <select
			class="block appearance-none w-full bg-white-800 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
			name="subCity"
		    >
			<option>Addis ketema</option>
			<option>Akaki kaliti</option>
			<option>Arada</option>
			<option>Bole</option>
			<option>Gulele</option>
			<option>Kirkos</option>
			<option>Kolfe Keraino</option>
			<option>Lideta</option>
			<option>Nifas silk lafto</option>
			<option>Yeka</option>
		    </select>
		    <div
			class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
		    >
			<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
			><path
				d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
			    /></svg
			>
		    </div>
		</div>
	    </div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
	    <div class="w-full px-3">
		<textarea
		    required
		    class="appearance-none block w-full bg-white-800 text-gray-700 border border-gray-200 rounded-none py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
		    type="text"
		    placeholder="Area Description"
		    name="description"
		></textarea>
	    </div>
	</div>
	<div class=" w-full flex items-center justify-center">
	    <button class=" btn  px-10 bg-[#d6cb6b]" type="submit"> Pay now </button>
	</div>
	<input type="hidden" value={subtotal} name="price" />
	<input type="hidden" value={JSON.stringify($cartStore.cartProducts)} name="order">
    </form>
    <div class=" mx-6 w-full lg:w-5/12">
	<ul class="menu menu-sm bg-base-200 rounded-box">
	    {#each $cartStore.cartProducts as prod}
		<li class=" ">
		    <div class="  m-3 p-3">
			<img
			    class=" w-[65px] h-[100px] object-cover "
			    src={prod.imageURL[0]}
			    alt={prod.name + ' image '}
			/>
			<div class=" px-3 w-full flex flex-col justify-between h-full py-2 ">
			    <p>{prod.name}</p>
			    <div class=" flex">
				<p class="badge bg-[#d6cb6b] rounded h-10 ">
				    {prod.amount} pc{prod.amount === 1 ? '' : 's'}
				</p>
				<p class="ml-48">ETB {prod.price}</p>

			    </div>
			</div>
		    </div>
		</li>
	    {/each}
	</ul>
	<div class="subtotal text-center mt-4 ml-4">
	    <p class="font-light">TOTAL ETB {subtotal}</p>
	</div>
    </div>
</div>
