import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'lseg',
		company: 'London Stock Exchange Group (LSEG)',
		description: '# Lead a Azure Public Cloud Platform Engineering team',
		contract: ContractType.FullTime,
		type: 'Cloud Platform Engineering Lead',
		location: 'Delhi, India',
		period: { from: new Date(2023, 8) },
		skills: getSkills(
			'azure',
			'aad',
			'aks',
			'compute',
			'devops',
			'docker',
			'git',
			'gitlab',
			'kubernetes',
			'ubuntu',
			'rhel',
			'network',
			'powershell',
			'security',
			'terraform'
		),
		name: 'Cloud Platform Engineering Lead',
		color: 'red',
		links: [],
		logo: Assets.Lseg,
		shortDescription: 'Lead Azure Cloud Platform Engineering team'
	},
	{
		slug: 'KPMG',
		company: 'KPMG India',
		description: 'Assistant Manager',
		contract: ContractType.FullTime,
		type: 'Cloud Platform Engineering',
		location: 'Gurugram, India',
		period: { from: new Date(2023, 1), to: new Date(2023, 7) },
		skills: getSkills(
			'azure',
			'aad',
			'aks',
			'compute',
			'ansible',
			'docker',
			'powershell',
			'python',
			'terraform'
		),
		name: 'Automation & DevOps Engineer',
		color: 'blue',
		links: [],
		logo: Assets.KPMG,
		shortDescription: 'Worked on various automation and DevOps projects in Azure cloud.'
	},
	{
		slug: 'Tech Mahindra',
		company: 'Tech Mahindra',
		description:
			'Worked as Senior Systems Engineer and also worked on migration of Applications from on prem to Azure',
		contract: ContractType.FullTime,
		type: 'Senior Systems Engineer',
		location: 'Delhi, India',
		period: { from: new Date(2020, 12), to: new Date(2022, 12) },
		skills: getSkills('powershell', 'Terraform', 'Azure Devops', 'github', 'Azure','Migration' ),
		name: 'Senior Systems Engineer',
		color: 'green',
		links: [],
		logo: Assets.Techm,
		shortDescription:
			'Worked as Senior Systems Engineer and also worked on migration of Applications from on prem to Azure'
	},
	{
		slug: 'Accenture',
		company: 'Accenture',
		description:
			'Worked as Senior cloud Analyst and also worked on migration of Applications from on prem to Azure',
		contract: ContractType.FullTime,
		type: 'Senior Cloud Analyst',
		location: 'Gurgaon, India',
		period: { from: new Date(2018, 10), to: new Date(2020, 12) },
		skills: getSkills('powershell', 'Terraform', 'Azure Devops', 'github', 'Azure','Migration' ),
		name: 'Senior Cloud Analyst',
		color: 'green',
		links: [],
		logo: Assets.accenture,
		shortDescription:
			'Worked as Senior Systems Engineer and also worked on migration of Applications from on prem to Azure'
	},
	{
		slug: 'Orange',
		company: 'Orange Business Services',
		description:
			'Worked as cloud Analyst and also provided L3 support for various in-house applications',
		contract: ContractType.FullTime,
		type: 'Cloud Analyst',
		location: 'Gurgaon, India',
		period: { from: new Date(2017, 12), to: new Date(2018, 9) },
		skills: getSkills('Flexible Engine cloud  Support' ),
		name: 'Cloud Analyst',
		color: 'green',
		links: [],
		logo: Assets.obs,
		shortDescription:
			'Worked as cloud Analyst and also also provided L3 support for various in-house applications'
	},
	{
		slug: 'DXC',
		company: 'DXC Technology',
		description:
			'Worked as Senior Professional and also provided L2 support for various in-house applications, Also worked as a shift lead in Agile evironment',
		contract: ContractType.FullTime,
		type: 'Senior Professional',
		location: 'Gurgaon, India',
		period: { from: new Date(2015, 3), to: new Date(2017, 11) },
		skills: getSkills('Windows Administrator' ),
		name: 'Senior Professional',
		color: 'green',
		links: [],
		logo: Assets.obs,
		shortDescription:
			'Worked as Senior Professional and also provided L3 support for various in-house applications'
	},
	{
		slug: 'Bridgentech',
		company: 'Bridgentech',
		description:
			'Worked as Senior cloud Analyst and also worked on migration of Applications from on prem to Azure',
		contract: ContractType.Contract,
		type: 'Senior Professional',
		location: 'Hyderabad, India',
		period: { from: new Date(2020, 5), to: new Date(2022, 11) },
		skills: getSkills('powershell', 'Terraform', 'Azure Devops', 'github', 'Azure','Migration'),
		name: 'Senior Professional',
		color: 'green',
		links: [],
		logo: '',
		shortDescription:
			'Worked as Senior cloud Analyst and also worked on migration of Applications from on prem to Azure'
	}
	,
	{
		slug: 'L&G',
		company: 'L&G Consultancy',
		description:
			'Worked as Technical Architect and also worked on migration of Applications from on prem to Azure',
		contract: ContractType.Contract,
		type: 'Technical Architect',
		location: 'Amritsar, India',
		period: { from: new Date(2023, 1), to: new Date(2023, 12) },
		skills: getSkills('powershell', 'Terraform', 'Azure Devops', 'github', 'Azure','Migration'),
		name: 'Technical Architect',
		color: 'green',
		links: [],
		logo: '',
		shortDescription:
			'Worked as Technical Architect and also worked on migration of Applications from on prem to Azure'
	}

];

export const title = 'Experience';
