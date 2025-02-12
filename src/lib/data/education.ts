import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Masters of Computer Applications',
		description: '',
		location: 'Jaipur, India',
		logo: Assets.JV,
		name: '',
		organization: 'Jyothi Vidyapeeth Womens University',
		period: { from: new Date(2013, 6, 4), to: new Date(2015, 6, 14) },
		shortDescription: '',
		slug: 'edu-mca',
		subjects: [
			'Database Management Systems',
			'Cloud Engineering',
			'Computer Architecture',
			'Algorithms and Data structures',
			'Machine Learning',
			'Web Development',
			'DevOps'
		]
	},
	{
		degree: 'Bachelor of Computer Applications',
		description: '',
		location: 'UP, India',
		logo: Assets.ccsu,
		name: '',
		organization: 'Chaudhary Charan Singh University',
		period: { from: new Date(2010, 6, 1), to: new Date(2013, 5, 30) },
		shortDescription: '',
		slug: 'edu-bca',
		subjects: [
			'Algorithm',
			'Algebra',
			'Python',
			'C++',
			'Java',
			'Computer Networks',
			'Computer Architecture',
			'DSA',
			'Cybersecurity'
		]
	}
	// {
	// 	degree: 'O Level (Computer Programming)',
	// 	description: '',
	// 	location: 'Delhi, India',
	// 	logo: Assets.Doeacc,
	// 	name: '',
	// 	organization: 'DOEACC',
	// 	period: { from: new Date(2016, 6, 1), to: new Date(2017, 6, 1) },
	// 	shortDescription: '',
	// 	slug: 'edu-olevel',
	// 	subjects: ['C', 'Web Technologies', 'C++', 'Multimedia Design', 'Computer Organization']
	// }
];

export const title = 'Education';
