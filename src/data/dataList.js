//pcs
import pcMsi1 from '../assets/products/msi-gamer.jpg'
import pcRazor from '../assets/products/razor-pc.jpg'
//casques
import casqueMsi1 from '../assets/products/casque-msi.jpg'
import casqueMsi2 from '../assets/products/casque-msi2.jpg'
import casqueRazer from '../assets/products/casque-razer.jpg'
//screens
import ecranMSI from '../assets/products/ecran-gamer.jpg'
import ecranMSICurved from '../assets/products/ecran-curved-msi.jpg'
import ecranRazer from '../assets/products/ecran-razer.jpg'
import ecranSamsung from '../assets/products/ecran-samsung.jpg'
//chairs
import chairMsi from '../assets/products/chair-gamer-msi.jpg'
import chairRoseRazor from '../assets/products/chair-rose-gamer.jpg'
import chairGreenRazor from '../assets/products/chair-razor-green.jpg'
//mouse
import msiMouse1 from '../assets/products/msi-mouse1.jpg'
import razorMouse1 from '../assets/products/razor-mouse1.jpg'
import razorMouse2 from '../assets/products/souris-razer-deathadder-chroma.jpg'
//tapis
import padMSI from '../assets/products/msi-tapis.jpg'
import padRazor1 from '../assets/products/tapis-de-souris-gaming-razer-tunisie.jpg'
import padRazor2 from '../assets/products/tapis-de-souris-razer-firefly-cloth-edition.jpg'
//brands
import msiLogo from '../assets/brands/MSI-Logo.png'
import razerLogo from '../assets/brands/razer-logo.png'
import razorLogo from '../assets/brands/razor-logo.png'
import samsungLogo from '../assets/brands/Samsung_Logo.png'

export const dataList = [
	{
		name: 'MSI GAMING AEGIS TI3 8RD',
		category: 'GAMER PC',
		brand: 'MSI',
		brandImg: msiLogo,
		id: '15',
		cover: pcMsi1,
		price: 6399,
		rate:5
	},
	{
		name: 'RAZER ULTRA PC ',
		category: 'GAMER PC',
		brand: 'RAZER',
		brandImg: razerLogo,
		id: '16',
		cover: pcRazor,
		price: 13899,
		rate:5
	},
	{
		name: 'CASQUE MSI DS502',
		category: 'Casque',
		brand: 'MSI',
		brandImg: msiLogo,
		id: '1',
		cover: casqueMsi1,
		price: 154,
		brand: 'MSI',
		rate:4
	},
	{
		name: 'CASQUE GAMING MSI DS501',
		category: 'Casque',
		id: '3',
		cover: casqueMsi2,
		price: 500,
		brand: 'MSI',
		brandImg: msiLogo,
		rate:5
	},
	{
		name: 'CASQUE MICRO RAZER',
		category: 'Casque',
		id: '2',
		cover: casqueRazer,
		price: 120,
		brand: 'RAZER',
		brandImg: msiLogo,
		rate:4
	},
	
	{
		name: 'MSI OPTIX MPG341CQR',
		category: 'Screen',
		brand : 'MSI',
		id: '4',
		cover: ecranMSICurved,
		brandImg: msiLogo,
		price: 2359,
		rate:5
	},
	{
		name: 'Screen Gaming MSI 23.8',
		category: 'Screen',
		brand : 'MSI',
		id: '5',
		cover: ecranMSI,
		brandImg: msiLogo,
		price: 789,
		rate:4
	},
	{
		name: 'Razer RAPTOR',
		category: 'Screen',
		brand : 'Razer',
		brandImg: razerLogo,
		id: '6',
		cover: ecranRazer,
		price: 3200,
		rate:5
	},

	{
		name: 'Screen curved FULL HD',
		category: 'Screen',
		brand : 'Samsung',
		brandImg: samsungLogo,
		id: '7',
		cover: ecranSamsung,
		price: 499,
		rate:4
	},
	{
		name: 'Chair MSI MAG CH120 X Full',
		category: 'Chair',
		brand : 'MSI',
		brandImg: msiLogo,
		id: '8',
		cover: chairMsi,
		price: 1299,
		rate:5
	},
	{
		name: 'Razer ENKI',
		category: 'Chair',
		brand: 'Razer',
		brandImg: razerLogo,
		id: '9',
		cover: chairRoseRazor,
		price: 1499,
		rate:5
	},

	{
		name: 'DXRacer Gaming Chair Razer',
		category: 'Chair',
		brand: 'Razer',
		brandImg: razerLogo,
		id: '10',
		cover: chairGreenRazor,
		price: 1099,
		rate:4
	},
	{
		name: 'MSI GM30 Mouse',
		category: 'Mouse',
		brand: 'MSI',
		brandImg: msiLogo,
		id: '11',
		cover: msiMouse1,
		price: 79,
		rate:4
	},
	{
		name: 'RAZER NAGA X',
		category: 'Mouse',
		brand: 'RAZER',
		brandImg: razerLogo,
		id: '12',
		cover: razorMouse1,
		price: 269,
		rate:5
	},

	{
		name: 'RAZER Chroma Mouse ',
		category: 'Mouse',
		brand: 'RAZER',
		brandImg: razerLogo,
		id: '13',
		cover: razorMouse2,
		price: 194,
		rate:4
	},
	{
		name: 'GD-20 MSI PAD',
		category: 'Mouse pad',
		brand: 'MSI',
		brandImg: msiLogo,
		id: '14',
		cover: padMSI,
		price: 39,
		rate:3
	},
	{
		name: 'Mantis Speed Mouse PAD',
		category: 'Mouse pad',
		brand: 'RAZER',
		brandImg: razorLogo,
		id: '14',
		cover: padRazor1,
		price: 13,
		rate:3
	},
	{
		name: 'Razer Firefly',
		category: 'Mouse pad',
		brand: 'RAZER',
		brandImg: razerLogo,
		id: '14',
		cover: padRazor2,
		price: 260,
		rate:5
	},

]

export default dataList;