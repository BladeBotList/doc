const branches = [
	{
		label: 'v3 (stable)',
		version: '3.x',
		aliases: ['3', 'stable'],
	}
];

const [defaultBranch] = branches;

export default {
	data() {
		return {
			branches,
			defaultBranch,
			selectedBranch: defaultBranch.version,
		};
	},
	mounted() {
		this.selectedBranch = localStorage.getItem('branch-version') || defaultBranch.version;
	},
	methods: {
		getBranch(version) {
			return this.branches.find(branch => branch.aliases.includes(version) || branch.version === version);
		},
		updateBranch(branch) {
			this.selectedBranch = branch;
		},
	},
};
