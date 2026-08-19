export type Lang = 'en' | 'fr';
export type RouteKey = 'home' | 'cv' | 'outreach' | 'openPositions' | 'students';

// Every internal URL must carry the deployment sub-path (see astro.config.mjs).
// BASE_URL may or may not come with a trailing slash depending on how `base` is
// written, so strip it and join with paths that already start with '/'. That
// keeps route trailing slashes intact and makes a double slash impossible.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => `${BASE}${path}`;

export const routeMap: Record<Lang, Record<RouteKey, string>> = {
	en: {
		home: '/en/',
		cv: '/en/cv/',
		outreach: '/en/outreach/',
		openPositions: '/en/open-positions/',
		students: '/en/students/',
	},
	fr: {
		home: '/fr/',
		cv: '/fr/cv/',
		outreach: '/fr/mediation/',
		openPositions: '/fr/postes-ouverts/',
		students: '/fr/etudiants/',
	},
};

export const alternateLang: Record<Lang, Lang> = {
	en: 'fr',
	fr: 'en',
};

// Split out so the rail can link the lab name on its own, while `affiliation`
// below stays a single string for the places that render it as plain text.
const labName = "Laboratoire d'Annecy de Physique Théorique";
const affiliationSuffix = ' / CNRS';

export const siteIdentity = {
	name: 'Piotr Tourkine',
	labName,
	affiliationSuffix,
	title: {
		en: 'Theoretical physicist',
		fr: 'Physicien théoricien',
	},
	affiliation: `${labName}${affiliationSuffix}`,
	location: 'Annecy, France',
	lastUpdated: {
		en: 'Last updated: July 2026',
		fr: 'Dernière mise à jour : juillet 2026',
	},
	office: {
		en: 'Laboratoire d’Annecy de Physique Théorique, 9 Chemin de Bellevue, 74940 Annecy, France. Office 4.014.',
		fr: 'Laboratoire d’Annecy de Physique Théorique, 9 Chemin de Bellevue, 74940 Annecy, France. Bureau 4.014.',
	},
	photo: withBase('/piotr-tourkine.jpg'),
	links: {
		cv: withBase('/cv.pdf'),
		inspire: 'https://inspirehep.net/authors/1280395',
		arxiv: 'https://arxiv.org/search/?searchtype=author&query=Tourkine%2C+P',
		scholar: 'https://scholar.google.com/citations?user=O-n5g0kAAAAJ&hl=en',
		orcid: 'https://orcid.org/0000-0001-7517-6009',
		lapthJobs: 'https://www.lapth.cnrs.fr/emplois_stages/',
		hdr: withBase('/thesis-hdr.pdf'),
		lab: 'https://www.lapth.cnrs.fr/',
	},
};

// --- Visitor analytics -------------------------------------------------------
// Privacy-friendly stats (visits + country), no cookies, no consent banner.
// To TURN ON:  set enabled: true and paste your GoatCounter site code below.
//              (Sign up free at https://www.goatcounter.com/ — the code is the
//               subdomain you pick, e.g. "ptourkine" for ptourkine.goatcounter.com.)
// To TURN OFF: set enabled: false. Nothing is loaded and no requests are made.
export const analytics = {
	enabled: false,
	goatCounterCode: 'YOUR-CODE-HERE',
};

export const navigationLabels: Record<Lang, Record<RouteKey, string>> = {
	en: {
		home: 'Home',
		cv: 'CV',
		outreach: 'Outreach',
		openPositions: 'Open positions',
		students: 'Research and supervision',
	},
	fr: {
		home: 'Accueil',
		cv: 'CV',
		outreach: 'Médiation',
		openPositions: 'Stages, Thèses, Postdoctorats',
		students: 'Recherche et encadrement',
	},
};

// Amounts and dates as stated on the funders' own project pages. Emergence is
// an internal CNRS call and has no public record, hence no href.
export const funding = {
	en: [
		{
			period: '2022-2026',
			name: 'ANR JCJC — SPARTA',
			amount: '315 k€',
			note: 'principal investigator',
			href: 'https://anr.fr/Projet-ANR-22-CE31-0017',
		},
		{
			period: '2017-2019',
			name: 'Marie Skłodowska-Curie Individual Fellowship — NewLoops',
			amount: '175 k€',
			note: 'held at CERN',
			href: 'https://cordis.europa.eu/project/id/749793',
		},
		{
			period: '2022-2023',
			name: 'CNRS Emergence (INP)',
			amount: '78 k€',
			note: 'principal investigator',
		},
	],
	fr: [
		{
			period: '2022-2026',
			name: 'ANR JCJC — SPARTA',
			amount: '315 k€',
			note: 'porteur du projet',
			href: 'https://anr.fr/Projet-ANR-22-CE31-0017',
		},
		{
			period: '2017-2019',
			name: 'Bourse individuelle Marie Skłodowska-Curie — NewLoops',
			amount: '175 k€',
			note: 'effectuée au CERN',
			href: 'https://cordis.europa.eu/project/id/749793',
		},
		{
			period: '2022-2023',
			name: 'CNRS Emergence (INP)',
			amount: '78 k€',
			note: 'porteur du projet',
		},
	],
};

export const careerTimeline = {
	en: [
		{
			period: '2021-',
			text: 'Researcher at CNRS, LAPTh, Annecy. Permanent position devoted to research.',
		},
		{
			period: '2020-2021',
			text: 'Scientific associate at CERN, on leave from CNRS.',
		},
		{
			period: '2019-2020',
			text: 'Researcher at CNRS, LPTHE, Sorbonne Universite, Paris. Permanent position.',
		},
		{
			period: '2017-2019',
			text: 'CERN Fellow in the Theory Department, Geneva.',
		},
		{
			period: '2014-2017',
			text: 'Postdoctoral researcher at DAMTP, University of Cambridge.',
		},
		{
			period: '2011-2014',
			text: 'PhD in theoretical physics at IPhT, CEA Saclay, Sorbonne Universite. Advisor: Pierre Vanhove.',
		},
		{
			period: '2007-2011',
			text: 'Ecole normale superieure de Paris.',
		},
	],
	fr: [
		{
			period: '2021-',
			text: 'Chargé de recherches au CNRS, LAPTh, Annecy. Poste permanent de recherche.',
		},
		{
			period: '2020-2021',
			text: 'Associé scientifique au CERN, en détachement du CNRS.',
		},
		{
			period: '2019-2020',
			text: 'Chargé de recherches au CNRS, LPTHE, Sorbonne Université, Paris. Poste permanent.',
		},
		{
			period: '2017-2019',
			text: 'Fellow au CERN, département Théorie, Genève.',
		},
		{
			period: '2014-2017',
			text: 'Postdoctorat au DAMTP, Université de Cambridge.',
		},
		{
			period: '2011-2014',
			text: 'Doctorat de physique théorique à l’IPhT, CEA Saclay, Sorbonne Université. Direction: Pierre Vanhove.',
		},
		{
			period: '2007-2011',
			text: 'École normale supérieure de Paris.',
		},
	],
};

export const supervisees = {
	en: {
		postdocs: [
			{
				label: 'Simon Metayer, 2025-2026 (ANR SPARTA)',
				inspire: 'https://inspirehep.net/literature?sort=mostrecent&q=a%20Simon%20Metayer',
				scholar: 'https://scholar.google.com/scholar?q=%22Simon+Metayer%22',
			},
			{
				label: 'Mehmet Gummus, 2023-2026 (ANR SPARTA)',
				inspire: 'https://inspirehep.net/literature?sort=mostrecent&q=a%20Mehmet%20Asim%20Gumus',
				scholar: 'https://scholar.google.com/scholar?q=%22Mehmet+Asim+Gumus%22',
			},
			{
				label: 'Yihong Wang, 2022-2023 (CNRS Emergence)',
				inspire: 'https://inspirehep.net/authors/1509995',
				scholar: 'https://scholar.google.com/scholar?q=%22Yihong+Wang%22+hep-th',
			},
		],
		masters: [
			'Baptiste Guilleminot, M2, 2026',
			'Antoine Villey, M2, 2025',
			'Baptiste Guilleminot, M1, 2025',
			'Georgia Vassileiou, M1, 2025',
			'Antoine Vincenti, M1, 2023',
			'Damien Leflot, M2, 2023',
			'Felipe Figueroa, M2, 2021',
		],
		phds: [
			{
				label: 'Antoine Villey, 2025-2028',
				inspire: 'https://inspirehep.net/literature?sort=mostrecent&q=a%20Antoine%20Villey',
				scholar: 'https://scholar.google.com/scholar?q=%22Antoine+Villey%22+physics',
			},
			{
				label: 'Damien Leflot, 2023-2026; subsequently a postdoctoral researcher at the University of Pisa',
				inspire: 'https://inspirehep.net/literature?sort=mostrecent&q=a%20Damien%20Leflot',
				scholar: 'https://scholar.google.com/scholar?q=%22Damien+Leflot%22',
			},
			{
				label: 'Felipe Figueroa, 2021-2024; subsequently a postdoctoral researcher in Mons',
				inspire: 'https://inspirehep.net/literature?sort=mostrecent&q=a%20Felipe%20Figueroa',
				scholar: 'https://scholar.google.com/scholar?q=%22Felipe+Figueroa%22+physics',
			},
		],
	},
	fr: {
		postdocs: [
			{
				label: 'Simon Metayer, 2025-2026 (ANR SPARTA)',
				inspire: 'https://inspirehep.net/literature?sort=mostrecent&q=a%20Simon%20Metayer',
				scholar: 'https://scholar.google.com/scholar?q=%22Simon+Metayer%22',
			},
			{
				label: 'Mehmet Gummus, 2023-2026 (ANR SPARTA)',
				inspire: 'https://inspirehep.net/literature?sort=mostrecent&q=a%20Mehmet%20Asim%20Gumus',
				scholar: 'https://scholar.google.com/scholar?q=%22Mehmet+Asim+Gumus%22',
			},
			{
				label: 'Yihong Wang, 2022-2023 (CNRS Émergence)',
				inspire: 'https://inspirehep.net/authors/1509995',
				scholar: 'https://scholar.google.com/scholar?q=%22Yihong+Wang%22+hep-th',
			},
		],
		masters: [
			'Baptiste Guilleminot, M2, 2026',
			'Antoine Villey, M2, 2025',
			'Baptiste Guilleminot, M1, 2025',
			'Georgia Vassileiou, M1, 2025',
			'Antoine Vincenti, M1, 2023',
			'Damien Leflot, M2, 2023',
			'Felipe Figueroa, M2, 2021',
		],
		phds: [
			{
				label: 'Antoine Villey, 2025-2028',
				inspire: 'https://inspirehep.net/literature?sort=mostrecent&q=a%20Antoine%20Villey',
				scholar: 'https://scholar.google.com/scholar?q=%22Antoine+Villey%22+physics',
			},
			{
				label: 'Damien Leflot, 2023-2026 ; puis postdoctorant à l’Université de Pise',
				inspire: 'https://inspirehep.net/literature?sort=mostrecent&q=a%20Damien%20Leflot',
				scholar: 'https://scholar.google.com/scholar?q=%22Damien+Leflot%22',
			},
			{
				label: 'Felipe Figueroa, 2021-2024 ; puis postdoctorant à Mons',
				inspire: 'https://inspirehep.net/literature?sort=mostrecent&q=a%20Felipe%20Figueroa',
				scholar: 'https://scholar.google.com/scholar?q=%22Felipe+Figueroa%22+physics',
			},
		],
	},
};

export const siteContent = {
	en: {
		home: {
			title: 'Piotr Tourkine',
			description:
				'Minimal bilingual academic website for Piotr Tourkine, theoretical physicist at LAPTh / CNRS.',
			heroSubtitle: 'Theoretical physicist — LAPTh / CNRS',
			shortIntro:
				'I am a theoretical physicist working in high-energy theory, with interests in quantum field theory, scattering amplitudes, the S-matrix, string theory, and quantum gravity.',
			longIntro:
				'I work at the interface of quantum field theory, scattering amplitudes, the S-matrix, string theory, and quantum gravity. I am especially interested in analyticity, consistency conditions, high-energy limits, and the structure of relativistic scattering. More broadly, I study how general principles constrain the space of possible theories.',
			contactNote:
				'For academic inquiries, invitations, general requests, or student contact, please use the address below.',
			researchHighlights: [
				'Quantum field theory',
				'Scattering amplitudes',
				'S-matrix bootstrap',
				'String theory',
				'Quantum gravity',
			],
		},
		cv: {
			title: 'Academic CV',
			description:
				'Research areas, academic biography, career path, and academic links for Piotr Tourkine.',
			shortBio:
				'I am a theoretical physicist working on fundamental interactions. My research lies broadly in particle physics, quantum field theory, and string theory, with a particular interest in questions related to quantum gravity.',
			researchParagraph:
				'My work is centered on formal aspects of fundamental interactions. I am interested in how broad principles such as analyticity, unitarity, causality, and high-energy behavior constrain scattering processes and, more generally, the space of consistent theories.',
			researchAreas: [
				'Quantum field theory',
				'String theory and quantum gravity',
				'Bootstrap',
			],
			linksIntro:
				'For full publication lists and institutional references, the profiles below are the most useful starting points.',
			fundingIntro: 'Total directly managed: 592.5 k€. Selected grants:',
		},
		outreach: {
			title: 'Outreach',
			description: 'Articles and public talks by Piotr Tourkine about theoretical physics.',
			intro:
				'A selection of articles and public talks intended for audiences beyond my immediate research field.',
		},
		students: {
			title: 'Research and supervision',
			description:
				'Research interests of Piotr Tourkine, and the researchers and students he supervises at LAPTh.',
			intro:
				'My research concerns the structure of scattering amplitudes in quantum field theory and string theory. I am particularly interested in the analytic and high-energy properties of the S-matrix, and in the constraints imposed by unitarity, causality, and consistency. These questions connect particle physics with broader problems in quantum gravity.',
			supervisionIntro:
				'Current and former researchers and students whom I have supervised or co-supervised are listed below.',
			photo: {
				alt: 'Piotr Tourkine at a blackboard, discussing equations with two students',
				caption: 'At the blackboard, 2026 (credits: USMB)',
			},
		},
		openPositions: {
			title: 'Open positions',
			description: 'Current PhD and internship opportunities with Piotr Tourkine at LAPTh.',
			// Split so the LAPTh reference can be rendered as a link in place.
			prospectiveNote: {
				before: 'Please check the ',
				link: 'LAPTh webpage',
				after: ' for current PhD and internship opportunities. When positions are available, details and application information will be posted here.',
			},
		},
	},
	fr: {
		home: {
			title: 'Piotr Tourkine',
			description:
				'Site académique bilingue, minimal et statique, pour Piotr Tourkine, physicien théoricien au LAPTh / CNRS.',
			heroSubtitle: 'Physicien théoricien — LAPTh / CNRS',
			shortIntro:
				'Je suis physicien théoricien en physique des hautes énergies, avec des intérêts pour la théorie quantique des champs, les amplitudes de diffusion, la matrice S, la théorie des cordes et la gravité quantique.',
			longIntro:
				'Je travaille à l’interface entre théorie quantique des champs, amplitudes de diffusion, matrice S, théorie des cordes et gravité quantique. Je m’intéresse en particulier à l’analyticité, aux conditions de cohérence, aux limites de haute énergie, et à la structure de la diffusion relativiste. Plus généralement, je cherche à comprendre comment des principes généraux contraignent l’espace des théories possibles.',
			contactNote:
				'Pour les questions académiques, invitations, demandes générales ou prises de contact étudiantes, merci d’utiliser l’adresse ci-dessous.',
			researchHighlights: [
				'Théorie quantique des champs',
				'Amplitudes de diffusion',
				'Bootstrap de la matrice S',
				'Théorie des cordes',
				'Gravité quantique',
			],
		},
		cv: {
			title: 'CV académique',
			description:
				'Thèmes de recherche, biographie académique, parcours et liens utiles pour Piotr Tourkine.',
			shortBio:
				'Je suis physicien théoricien et je travaille sur les interactions fondamentales. Mes recherches se situent principalement en physique des particules, en théorie quantique des champs et en théorie des cordes, avec un intérêt particulier pour les questions liées à la gravité quantique.',
			researchParagraph:
				'Mes travaux portent sur des aspects formels des interactions fondamentales. Je m’intéresse à la manière dont des principes généraux tels que l’analyticité, l’unitarité, la causalité et le comportement à haute énergie contraignent les processus de diffusion et, plus largement, l’espace des théories cohérentes.',
			researchAreas: [
				'Théorie quantique des champs',
				'Théorie des cordes et gravité quantique',
				'Bootstrap',
			],
			linksIntro:
				'Pour les listes complètes de publications et les références institutionnelles, les profils ci-dessous sont le point d’entrée le plus utile.',
			fundingIntro: 'Total géré directement : 592,5 k€. Sélection de financements :',
		},
		outreach: {
			title: 'Médiation scientifique',
			description: 'Articles et conférences grand public de Piotr Tourkine autour de la physique théorique.',
			intro:
				'Une sélection d’articles et de conférences destinés à un public plus large que celui de mon domaine de recherche.',
		},
		students: {
			title: 'Recherche et encadrement',
			description:
				'Thèmes de recherche de Piotr Tourkine, et les personnes qu’il encadre au LAPTh.',
			intro:
				'Mes recherches portent sur la structure des amplitudes de diffusion en théorie quantique des champs et en théorie des cordes. Je m’intéresse en particulier aux propriétés analytiques et au comportement à haute énergie de la matrice S, ainsi qu’aux contraintes imposées par l’unitarité, la causalité et la cohérence. Ces questions relient la physique des particules à des problèmes plus généraux de gravité quantique.',
			supervisionIntro:
				'Les chercheuses, chercheurs, étudiantes et étudiants que j’encadre, ou que j’ai encadrés ou coencadrés, sont présentés ci-dessous.',
			photo: {
				alt: 'Piotr Tourkine au tableau, discutant d’équations avec deux étudiants',
				caption: 'Au tableau, 2026 (crédits : USMB)',
			},
		},
		openPositions: {
			title: 'Stages, Thèses, Postdoctorats',
			description: 'Offres de stages, de thèses et de postdoctorats avec Piotr Tourkine au LAPTh.',
			// Découpé pour que la mention du LAPTh soit rendue comme un lien sur place.
			prospectiveNote: {
				before: 'Les offres de thèse et de stage en cours sont publiées sur le ',
				link: 'site du LAPTh',
				after: ', avec les informations pratiques pour candidater.',
			},
		},
	},
} as const;

export function pathFor(lang: Lang, route: RouteKey) {
	return withBase(routeMap[lang][route]);
}

export function switchPath(lang: Lang, route: RouteKey) {
	return withBase(routeMap[alternateLang[lang]][route]);
}
