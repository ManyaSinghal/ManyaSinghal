import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Portfolio';

export const name = 'Manya';

export const lastName = 'Singhal';

export const description =
	"Hi, I’m Manya Singhal 👋 — Tech enthusiast 🧑‍💻, Professional Trainer 📽️, and Lead Platform Engineer. I’m passionate about code optimization, security, and automation. I’d happily spend 2 hours automating a 10-minute reoccurring task 😅!";

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/manya-singhal/'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com/@devcrypted'
	// },
	{ platform: Platform.GitHub, link: 'https://github.com/ManyaSinghal' },
	{
		platform: Platform.Email,
		link: 'manya.singhal0393@outlook.com'
	},

	// ,{
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills(
	'aad',
	'azure',
	'terraform',
	'devops',
	'docker',
	'git',
	'github',
	'gitlab',
	'go',
	'kubernetes',
	'network',
	'powershell',
	'Golang',
	'security',
	'Azure Architect',
);
