import axios from 'axios'
import { logger } from '../utils'

interface PlaceData {
	fsq_id: string
	categories: {
		name: string
		icon: {
			prefix: string
			suffix: string
		}
	}
	closed_bucket: string
	distance: number
	location: {
		address: string | null
		country: string
		locality: string
		region: string
	}
	name: string
	photos: string[]
}

const data: PlaceData[] = [
	{
		fsq_id: '536bd0f7498eb423d91b9823',
		categories: {
			name: 'Breakfast Spot',
			icon: {
				prefix: 'https://ss3.4sqi.net/img/categories_v2/food/breakfast_',
				suffix: '.png',
			},
		},
		closed_bucket: 'VeryLikelyOpen',
		distance: 169,
		location: {
			address: 'Rotonda Rubén Darío 1 cuadra al Oeste 1 cuadra al Sur.',
			country: 'Managua',
			locality: 'Managua',
			region: 'Managua',
		},
		name: 'El Molino Coffee Shop',
		photos: [
			'https://fastly.4sqi.net/img/general/original/93923848_CFqIRQv4OqJQ4Xxhxoe8wIoqm-MdVUvakmu2EiPyVIg.jpg',
			'https://fastly.4sqi.net/img/general/original/93923848_fuZuWQnm07dcLIdgyR_mSHtY7Qu1knXB8YOq69Nevzo.jpg',
			'https://fastly.4sqi.net/img/general/original/93923848_Bg2eI0FvJEM_udOyVmCwDu7IirpB55BRzS4qpqlUhaA.jpg',
			'https://fastly.4sqi.net/img/general/original/93923848_bdEKA7vJ6-lNVEDdcO2tTEiMPOt7zG3f56_s1Eq4AUI.jpg',
			'https://fastly.4sqi.net/img/general/original/1359794498_b55jPZXEG34X2cPHxXVfE-Gm6mnpRQIXeXXDbcF9WMU.jpg',
			'https://fastly.4sqi.net/img/general/original/547042396_9aGwuc7CyNno7tGF2vlWsNL1plr7zfKCRpP-SlJPS94.jpg',
			'https://fastly.4sqi.net/img/general/original/31911977_ADfBt4IYoer_BeURHiareOdkovcYsDp-f6rC1VbTxAU.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_su4CqNIHfG-13tEa_cf96nEQtfRDzJASyQXcRm8rw6M.jpg',
			'https://fastly.4sqi.net/img/general/original/42579198_QfAu-s8xxsc_bt-LC1Wz2OM7fCVOGJvCW20p8UV3rbw.jpg',
			'https://fastly.4sqi.net/img/general/original/42579198_w3qVZ0ZEIfG45Ol9LuuzuzFKP00ORuDmBhIYpXmBPus.jpg',
		],
	},
	{
		fsq_id: '559a9ae3498eb21ce6b8879b',
		categories: {
			name: 'College Cafeteria',
			icon: {
				prefix: 'https://ss3.4sqi.net/img/categories_v2/education/cafeteria_',
				suffix: '.png',
			},
		},
		closed_bucket: 'VeryLikelyOpen',
		distance: 459,
		location: {
			address: null,
			country: 'Managua',
			locality: 'Managua',
			region: 'Managua',
		},
		name: 'La Casa Del Café UCA',
		photos: [
			'https://fastly.4sqi.net/img/general/original/24819816_y5G8wj5FSIQWlkv05BxYRCUGhxtHObVJIKtyUTBVG_M.jpg',
			'https://fastly.4sqi.net/img/general/original/5920696_yUZ_IOWs2LfJrz1TQ9fsTaqSgjjwFtDhhYxJjIJ1EJM.jpg',
			'https://fastly.4sqi.net/img/general/original/126831293_72yDRdNKPh0p3m42i_Tl2Df7PdJEiikgyRDqJZObQLM.jpg',
			'https://fastly.4sqi.net/img/general/original/58335534_iS5j-_CrWxmIr1FXH-q-IHtuWdevnHQOLr86XwG7vVQ.jpg',
			'https://fastly.4sqi.net/img/general/original/58335534_XZT66UmeIiT0HSePc9yr3lW1B7jbgcnA6H_UDiFhpxU.jpg',
			'https://fastly.4sqi.net/img/general/original/36816817_zU_um8CJO3vnQC2T1Jps-O3txVmiCmPz_pW-WivE6d4.jpg',
			'https://fastly.4sqi.net/img/general/original/62340825_cil48JUOom7gSmTH7KKdfMaU0dqRUDpvUB7K38zHLVY.jpg',
			'https://fastly.4sqi.net/img/general/original/58393300_PKa-6p4mYnsH2fHTe5c0fr48KAkbTmFdnCF3AjcaYEA.jpg',
			'https://fastly.4sqi.net/img/general/original/5920696_X_QE2_jqAWOTb9I1uaxlnECnDSQWao8eCV9egvFhlMA.jpg',
			'https://fastly.4sqi.net/img/general/original/5920696_KguOJsFbCm1K-e9bW-2ybYRTgRtwdP40itJP3SK-S6k.jpg',
		],
	},
	{
		fsq_id: '546a43f8498ea22120c14045',
		categories: {
			name: 'Café',
			icon: {
				prefix: 'https://ss3.4sqi.net/img/categories_v2/food/cafe_',
				suffix: '.png',
			},
		},
		closed_bucket: 'VeryLikelyOpen',
		distance: 508,
		location: {
			address: 'Al Lado Opuesto Del Restaurante Summer',
			country: 'Managua',
			locality: 'Managua',
			region: 'Managua',
		},
		name: 'Café Delicias de la Montaña',
		photos: [
			'https://fastly.4sqi.net/img/general/original/2522769_L47csBmlX0wHBpckEwij_e0JJC_gkAnOex1GpNYzlss.jpg',
			'https://fastly.4sqi.net/img/general/original/71502569_kTGzfTCt8xOsVV9GKO-NQmCID5TQDrpWe_oF9N6Lfjk.jpg',
			'https://fastly.4sqi.net/img/general/original/123199141_htcxkIE4gHI7mszvhYAyrmzGgAGsXbj1tl1RjBM4rB8.jpg',
			'https://fastly.4sqi.net/img/general/original/123199141_J2sj9VYRZBdCPyw-PW4KynOqGi-6vbczH72uwuQv_Cc.jpg',
			'https://fastly.4sqi.net/img/general/original/123199141_yVR6poSApREsTouScaAUnxpxpby96iyHsPgsQM4PA6g.jpg',
			'https://fastly.4sqi.net/img/general/original/124794140_4UX-8RUs14qRbma1eX3DprPmcrYB7ECDhrcuZg5vuGY.jpg',
			'https://fastly.4sqi.net/img/general/original/124794140_IoHuvmPXaRCkdJMDP592jtup4M-paI1PSTw1f7NXpcY.jpg',
		],
	},
	{
		fsq_id: '4bb9e49f935e952118762790',
		categories: {
			name: 'Bakery',
			icon: {
				prefix: 'https://ss3.4sqi.net/img/categories_v2/food/bakery_',
				suffix: '.png',
			},
		},
		closed_bucket: 'LikelyOpen',
		distance: 1244,
		location: {
			address: 'Planes de Altamira I Etapa, Nro. 23 Managua, 14034',
			country: 'altamira',
			locality: 'altamira',
			region: 'Managua',
		},
		name: 'Pasteleria Sampson',
		photos: [
			'https://fastly.4sqi.net/img/general/original/474931305_S5WCC4Azgb1Dh-JaSBUxmDsVnuFEtVzIavoJ_QKsNHU.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_FY0Sw3IuxctpAyelNtmrvgmLmLlBHA_IPwnEK7X5BIM.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_opBkOAcqTVX2Ej76sPIYsJ7vX3p55wwJzxavbcQ2Hrg.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_8oxfN1VXecCVk0EsTmwX8H0JYibpij-NlyOH1Yj0wGs.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_xxPnQBThFgYICAhBcdT4gQxvKtieWfXF79q0Xh1dmRw.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_LOvVJnAxgU5Msc2WCTh5WvQj5ZgdVuLyEN6SvBgEVZY.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_NcOuR47WOwmpMYC5DpBKr9j6K3AinODyRoDXOsLY7V8.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_FYvBXE4TDs6zyjQTB8_plrWli1bH2Lc4D_fH_MXNVFI.jpg',
			'https://fastly.4sqi.net/img/general/original/40216849__oxg5F3fWt5ODQD2v8hLHMpN57cG2x3v8CSe1-LGVGQ.jpg',
			'https://fastly.4sqi.net/img/general/original/SN5ANLCPQOBUAYXFIKFDJEAE3B1SFW32A1RDULEWLLISD4US.jpg',
		],
	},
	{
		fsq_id: '5119350fe4b03863d3b09c0b',
		categories: {
			name: 'Café',
			icon: {
				prefix: 'https://ss3.4sqi.net/img/categories_v2/food/cafe_',
				suffix: '.png',
			},
		},
		closed_bucket: 'VeryLikelyOpen',
		distance: 1653,
		location: {
			address: 'Plaza España',
			country: 'Managua',
			locality: 'Managua',
			region: 'Managua',
		},
		name: 'Casa del Café',
		photos: [
			'https://fastly.4sqi.net/img/general/original/474931305_hDEzpda5NfRm_vGxb5iibWBXztLGCRyRTWwe2hwxiWE.jpg',
			'https://fastly.4sqi.net/img/general/original/474931305_UF6aFEtHnZGv6IAenZDIn0r0czywIKU1XARQTwn8NJo.jpg',
			'https://fastly.4sqi.net/img/general/original/474931305_FcWUHAODMiW9IU31f29hkLn42DHe7Z4pxqtwRTsI87g.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_Sj_78q-i7xfFHHO73HsAgwbRoLve4aPC2XjJ3aGfq8c.jpg',
			'https://fastly.4sqi.net/img/general/original/27183100_csGgCVBMZ4al4BocunY7thF3e7elyu0_ehUl4p8Tic0.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_DgOvq8aKIsSAdWtCKsTmyiOxBYRUz8D9whi3kIvRyV0.jpg',
			'https://fastly.4sqi.net/img/general/original/90665743_q8IFwc4zRh0uzhDvHOEq-6pWLRBxEicbIz21srQxPVg.jpg',
			'https://fastly.4sqi.net/img/general/original/75941962_rFSkKqaR_SP8glUBooslJPw6nA_XCqhGQPs-eJ0Ungo.jpg',
			'https://fastly.4sqi.net/img/general/original/75941962_QeEyEQvzrGoU0CTTP8pMNJamtYAFFaLHbxHQ23Qkx_c.jpg',
			'https://fastly.4sqi.net/img/general/original/71701703_Bmg0PAgCh9eGJKWiWm_MJnbgagPcd3qXkB-cM7V6ub4.jpg',
		],
	},
	{
		fsq_id: '54c57e55498e753931b804b1',
		categories: {
			name: 'Coffee Shop',
			icon: {
				prefix: 'https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_',
				suffix: '.png',
			},
		},
		closed_bucket: 'VeryLikelyOpen',
		distance: 2311,
		location: {
			address: 'Sobre la avenida de Bolívar a Chávez',
			country: 'Managua',
			locality: 'Managua',
			region: 'Managua',
		},
		name: 'La Casona del Café',
		photos: [
			'https://fastly.4sqi.net/img/general/original/428500608_xcze6stPN--sotTrjWUMiy-qk5As7P5PbcRXQ8YPV20.jpg',
			'https://fastly.4sqi.net/img/general/original/64564606_M7TmzJQeAo6McxfXK6zpafj4JNoMtUxSsE_SpliExV0.jpg',
			'https://fastly.4sqi.net/img/general/original/120619803_ZWd69B2AKpRbOt9sVjqQ4T7U70YASkLHyfaZ6V7ONbU.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_7_YMP0qYw5RsBaF_NB97dR6QIvGNJ-7ZGXrOvkYVA-w.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_jJkwoy_3SUpWT8nkw6aP7mIXveXRZoBe-wl5m7pfn4s.jpg',
			'https://fastly.4sqi.net/img/general/original/5920696_vtQHf0FTuFYqLKgxDsxOTYD3AhnHkJhUBS0iz1J_V9k.jpg',
			'https://fastly.4sqi.net/img/general/original/71502569_zJRWGxdRUf7jfyi_HP0yz1m5veHUUhy6epvedj9hupM.jpg',
			'https://fastly.4sqi.net/img/general/original/151536833_m_O_65Q72rXbmmaBJIOzAi26Up4L0WkYmlhmvTr_QfM.jpg',
			'https://fastly.4sqi.net/img/general/original/90638598_tA8LRmrxngKo7sD60EWt2wc8GVCaOGwKKJOng5bNgx8.jpg',
			'https://fastly.4sqi.net/img/general/original/148858095_6Py4ve-8_bqh1ovCEwDMxSik-Z5iYotIC0a1tuCloFA.jpg',
		],
	},
	{
		fsq_id: '5053db23e4b07ba3e600f720',
		categories: {
			name: 'Café',
			icon: {
				prefix: 'https://ss3.4sqi.net/img/categories_v2/food/cafe_',
				suffix: '.png',
			},
		},
		closed_bucket: 'VeryLikelyOpen',
		distance: 2798,
		location: {
			address: 'Carretera a Masaya Km 6.5 - Plaza Santo Domingo Modulo B',
			country: 'Managua',
			locality: 'Managua',
			region: 'Managua',
		},
		name: 'Café Las Flores',
		photos: [
			'https://fastly.4sqi.net/img/general/original/23625914_06e5AtzLFoaandyInEmm4XNEPujYzUSfXAVxmpVWs0w.jpg',
			'https://fastly.4sqi.net/img/general/original/56933050_E_IiIYkokBm_42xlkLVjBX8c-SvVNO5XoE0Gxh4iClI.jpg',
			'https://fastly.4sqi.net/img/general/original/27183100_DXvAR7dtvEZ1yiFQiqNl7ymrmW5UEk3180b1mxibvh0.jpg',
			'https://fastly.4sqi.net/img/general/original/59019087_TvCguka-HIuNBLQEyjs-AVA66sXfvqyDFTQ-Zr7JuUQ.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_b2u1o20820NTBhn0zjjfO-6jl0reUUAUTXnW3L-T0kw.jpg',
			'https://fastly.4sqi.net/img/general/original/59819603_Y5B_wSgVqdL1qIljGc1n99xZOd9IFhdBooV9OdoTsQA.jpg',
			'https://fastly.4sqi.net/img/general/original/487075892_RXB3wjpaCMunUbDuZ2XmvpmuUCjRX7X7YNRwormHB_A.jpg',
			'https://fastly.4sqi.net/img/general/original/17985753_wwNrhrpyQVH7bpfxl1OFnJXvopAG7PIMR2FJH8vkJDU.jpg',
			'https://fastly.4sqi.net/img/general/original/27857551_T0Axyt917FLflst8qvWWJKjKzwpRxsSd0cosZf0YbuI.jpg',
			'https://fastly.4sqi.net/img/general/original/27183100_jYFg6hVVNli4bD3dfGTEAsPX3fb_TimCl-9gZM8MvQo.jpg',
		],
	},
	{
		fsq_id: '4fcaa6c1e4b026db02f1492c',
		categories: {
			name: 'Cupcake Shop',
			icon: {
				prefix: 'https://ss3.4sqi.net/img/categories_v2/food/cupcakes_',
				suffix: '.png',
			},
		},
		closed_bucket: 'VeryLikelyOpen',
		distance: 3080,
		location: {
			address: 'Centro Comercial El Tiangue',
			country: 'Managua',
			locality: 'Managua',
			region: 'Nic',
		},
		name: 'Dulce Dolche',
		photos: [
			'https://fastly.4sqi.net/img/general/original/23625914_EzOWoyYPFTyYORiUF41jKDcvIAlgZdbuoVt17d8Nxqw.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_Umy98DyMVzEU4jM8EpWw4NAOPZFQuf6_265Le2vAKO8.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_niMlgAQ5zJDBdmsb11b4yo34R-9d3GSAxpcfx6JUBEQ.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_swXyV6Ix4c4_amIt5jyjSgFY_-sbTsp0mDFMjpu_Uf4.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_GJVLfBgl_D_k0McAgqMXvjX9T2mCH-mUpQ9kkm1fjII.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_ZqXbhPiiifq2nOqjKdmMxvN-gx5JDGTYLSxnrm6zuxU.jpg',
			'https://fastly.4sqi.net/img/general/original/70611932_CNn-ZJF2n7kn20bUhrAEFun5UVG8O1v34w9KZSVMp3w.jpg',
			'https://fastly.4sqi.net/img/general/original/29097484_raR0IlXzKA7wVWAzufdl6M7p-0G1eQeJii4_7S-8XAA.jpg',
			'https://fastly.4sqi.net/img/general/original/NiwM8Txs4I6UcPgHmYE0ahQEUqrrnVvB90gXR4bAXD4.jpg',
			'https://fastly.4sqi.net/img/general/original/20688937_BGvXanLD9nVWXnx78sdpFFNSrpvlZOBOgasYt0ebFhI.jpg',
		],
	},
	{
		fsq_id: '4c13c91877cea593726ccf60',
		categories: {
			name: 'Coffee Shop',
			icon: {
				prefix: 'https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_',
				suffix: '.png',
			},
		},
		closed_bucket: 'VeryLikelyOpen',
		distance: 3098,
		location: {
			address: 'Jean Paul Genie',
			country: 'Managua',
			locality: 'Managua',
			region: 'Managua',
		},
		name: 'Zacate Limon',
		photos: [
			'https://fastly.4sqi.net/img/general/original/547042396_PcKABMjwaQ1sY83z1yg1NiLS-BYotZC9LEYZL9xc5Sg.jpg',
			'https://fastly.4sqi.net/img/general/original/31911977_3jTWjCHdXmrGx_1UqyNvFjOAuDo2etKI4rDkqgJSAQI.jpg',
			'https://fastly.4sqi.net/img/general/original/61041323_ebc1KPLaLYGTtIChcNU9qW-okQiZkGIBobjGoChKeSw.jpg',
			'https://fastly.4sqi.net/img/general/original/150428105_GfXEImAolwvzxo5dnPf3Kgb-rN6PbkxOGGLfCC6OG_w.jpg',
			'https://fastly.4sqi.net/img/general/original/45100559_xmvGcB9DO2xFBGei2Z4dlCf19I_lDTzbQ3I5kgldPNY.jpg',
			'https://fastly.4sqi.net/img/general/original/85419963_7dDEa7_WwP4TKz6UJeYY41VEOHv1uIGYmcoqKy19NWk.jpg',
			'https://fastly.4sqi.net/img/general/original/35622409_D7TcbtQ1WVEtOlhZxKN8RkWcJnCWpg-5gLKOnpumb_c.jpg',
			'https://fastly.4sqi.net/img/general/original/61041323_AIU6s0-a8JsppqyufvWmzCPo7PNiSU--KYa17fAqtKw.jpg',
			'https://fastly.4sqi.net/img/general/original/80509716_vSD_lWrbxMMnHxe1rXmUToMlm0CJfTBtYAPdPNfqROg.jpg',
			'https://fastly.4sqi.net/img/general/original/121558447_H0SF3JPEiHE58Isp_M-gQDwkKl6P1_sPfqC7aRiezy8.jpg',
		],
	},
	{
		fsq_id: '56ef0342cd10c4efe51fe981',
		categories: {
			name: 'Café',
			icon: {
				prefix: 'https://ss3.4sqi.net/img/categories_v2/food/cafe_',
				suffix: '.png',
			},
		},
		closed_bucket: 'VeryLikelyOpen',
		distance: 3295,
		location: {
			address: 'Galerías Santo Domingo',
			country: 'Managua',
			locality: 'Managua',
			region: 'Managua',
		},
		name: 'Café Las Flores',
		photos: [
			'https://fastly.4sqi.net/img/general/original/46250180_lQaC82qaPw_CwndCSp0npdta-FvcGj9Z9uuvkCdlb8Q.jpg',
			'https://fastly.4sqi.net/img/general/original/148858095_hY2EmfIUWysC40DBCHxcuhdd0c9-ol-XGZkNj2RPo-k.jpg',
			'https://fastly.4sqi.net/img/general/original/86162998_0xY6dpf6qabXVkT3vyd9Qlb3hVR2IZ3OMZqKv0EO148.jpg',
			'https://fastly.4sqi.net/img/general/original/86162998_eS75sDhqUozzTY8vgKCvfvW2iNVZCQ-ZozLf02rANA4.jpg',
			'https://fastly.4sqi.net/img/general/original/25345769_t60c3b9Dq9PkoIEBa-bMqsvD13MlV4DwO2P5YXG3bYE.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_Sa7Fx-6h0s1WeZn1eAtUhHN3c5SIrO7RnrBdXejJoZo.jpg',
			'https://fastly.4sqi.net/img/general/original/23625914_5YbS8sIvt8CyP08RnguTnpayU0ilLnVo0MvyflDzO0I.jpg',
			'https://fastly.4sqi.net/img/general/original/74247752_RQ6L01jiVyYLx3BzOEIlLgNSKLyBXOM7GDrrlXASv3w.jpg',
			'https://fastly.4sqi.net/img/general/original/17985753_NS-D88E_Yi_j1mIDQ7bTrCPyijXY3rTaMdQzJNMWIyk.jpg',
			'https://fastly.4sqi.net/img/general/original/59819603_2mnKFGFfOVfAF38anoBSQC1gpXTuMy9rug6FwzBfrps.jpg',
		],
	},
]

export const getQueryData = () => {
	return data
}

// global variable to store the next link request
let nextLink: string | null = null

// request the list of places based on the query and user's location
export async function getPlacesByQueryAndLocation(
	query: string,
	lat: string,
	lon: string,
	next = 'false'
) {
	try {
		let response

		if (next === 'true') {
			if (!nextLink) {
				return { places: [], hasNextPage: null }
			}

			response = await axios.get(nextLink, {
				headers: {
					Accept: 'application/json',
					Authorization: process.env.FSQ_API_TOKEN,
				},
			})
		} else {
			response = await axios.get('https://api.foursquare.com/v3/places/search', {
				headers: {
					Accept: 'application/json',
					Authorization: process.env.FSQ_API_TOKEN,
				},
				params: {
					query: query,
					ll: `${lat},${lon}`,
					radius: 22000,
					limit: 5,
					sort: 'DISTANCE',
				},
			})
		}

		const linkHeader = response.headers.link
		if (linkHeader) {
			const match = linkHeader.match(/<([^>]+)>;\s*rel="next"/)
			nextLink = match ? match[1] : null
		} else {
			nextLink = null
		}

		const formattedPlaces: PlaceData = response.data.results.map((result: any) => ({
			fsq_id: result.fsq_id,
			categories: {
				name: result.categories[0]?.name,
				icon: {
					prefix: result.categories[0]?.icon.prefix,
					suffix: result.categories[0]?.icon.suffix,
				},
			},
			closed_bucket: result.closed_bucket,
			distance: result.distance,
			location: {
				address: result.location.address,
				country: result.location.locality,
				locality: result.location.locality,
				region: result.location.region,
			},
			name: result.name,
		}))

		return { places: formattedPlaces, hasNextPage: nextLink !== null }
	} catch (error: any) {
		logger.error(`Error fetching places: ${error.message}`)
		throw new Error('Failed to fetch places data')
	}
}

// use fsq_id to get photos of each place
export async function getPlacesPhotos(places: any) {
	try {
		const placesWithPhotos = await Promise.all(
			places.map(async (place: any) => {
				try {
					const response = await axios.get(
						`https://api.foursquare.com/v3/places/${place.fsq_id}/photos`,
						{
							headers: {
								Accept: 'application/json',
								Authorization: process.env.FSQ_API_TOKEN,
							},
						}
					)
					const photosData = response.data

					if (!photosData.length) {
						logger.warn(`No photos found for place ${place.fsq_id}`)
						return { ...place, photos: null }
					}

					const formattedPhotos = photosData.map((photo: any) => {
						return `${photo.prefix}original${photo.suffix}`
					})

					return { ...place, photos: formattedPhotos }
				} catch (error: any) {
					logger.error(`Error fetching photos: ${error.message}`)
					return { ...place, photos: null }
				}
			})
		)

		return placesWithPhotos
	} catch (error: any) {
		logger.error(`Error processing places: ${error.message}`)
		throw new Error('Failed to process places photos')
	}
}
