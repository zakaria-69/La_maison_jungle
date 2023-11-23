import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basilic from '../assets/basilic.jpg'
import geranium from '../assets/geranium.jpg'
import aloe from '../assets/aloe.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: monstera,
		price:15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		isSpecialOffer:true,
		light: 3,
		water: 1,
		cover: lyrata,
		price:16,
		
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isSpecialOffer:false,
		light: 1,
		water: 2,
		cover: pothos,
		price:9,
		

	},
	{
		name: 'cactus',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: cactus,
		price:20,
		
	

	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		isSpecialOffer:true,
		light: 3,
		water: 1,
		cover: olivier,
		price:25,
		
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: geranium,
		price:6,
	
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: basilic,
		price:5,
		
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		isSpecialOffer:true,
		light: 2,
		water: 1,
		cover: aloe,
		price:8,

	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price:4,
		
	}
]