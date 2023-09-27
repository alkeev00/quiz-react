export default [
	{
		title: 'What is the correct command to create a new React project?',
		variants: [
			'npx create-react-app MyReactApp',
			'npx create-react-app',
			'npm create-react-app',
			'npm create-react-app MyReactApp',
		],
		correct: 0,
	},
	{
		title:
			'What does myReactApp refer to in the following command? "npx create-react-app myReactApp"',
		variants: [
			'The directory to create the new app in',
			'A reference to an existing app',
			'The type of app to create',
			'The name you want to use for the new app',
		],
		correct: 3,
	},
	{
		title: 'What command is used to start the React local development server?',
		variants: ['npm serve', 'npm start', 'npm build', 'npm run dev'],
		correct: 1,
	},
	{
		title:
			'What is the default local host port that a React development server uses?',
		variants: ['3500', '5000', '3000', '8080'],
		correct: 2,
	},
	{
		title: 'To develop and run React code, Node.js is required.',
		variants: ['False', 'True'],
		correct: 1,
	},
	{
		title: 'What is the children prop?',
		variants: [
			'A property that lets you pass data to child components',
			'A property that lets you nest components in other components',
			'A property that lets you set an object as a property',
			'A property that adds child values to state',
		],
		correct: 1,
	},
	{
		title: 'Which keyword creates a constant in JavaScript?',
		variants: ['var', 'constant', 'let', 'const'],
		correct: 3,
	},
	{
		title: 'A copy of the "real" DOM that is kept in memory is called what?',
		variants: ['React DOM', 'Shadow DOM', 'Virtual DOM', 'DOM'],
		correct: 2,
	},
	{
		title: 'React component names must begin with an uppercase letter.',
		variants: ['False', 'True'],
		correct: 1,
	},
	{
		title:
			'Which operator can be used to conditionally render a React component?',
		variants: ['??', '&&', '::', '||'],
		correct: 1,
	},
	{
		title:
			'When rendering a list using the JavaScript "map()" method, what is required for each element rendered?',
		variants: ['data', 'key', 'id', 'index'],
		correct: 1,
	},
	{
		title: 'What tool does React use to compile JSX?',
		variants: ['React Router', 'ReactDOM', 'Babel', 'JSX Compiler'],
		correct: 2,
	},
	{
		title:
			'How can you optimize performance for a function component that always renders the same way?',
		variants: [
			'Use the useMemo Hook.',
			'Use the useReducer Hook.',
			'Wrap it in the React.memo higher-order component.',
			'Use the shouldComponentUpdate lifecycle method.',
		],
		correct: 2,
	},
	{
		title: 'What is a common use case for ref?',
		variants: [
			'To refer to another JavaScript file',
			'To refer to a function',
			'To directly access a DOM node',
			'To bind the function',
		],
		correct: 2,
	},
	{
		title: 'React can only render elements in the root document element.',
		variants: ['True', 'False'],
		correct: 0,
	},
	{
		title:
			'Although React Hooks generally replace class components, there are no plans to remove classes from React.',
		variants: ['True', 'False'],
		correct: 0,
	},
	{
		title:
			'React separates the user interface into components. How are components combinded to create a user interface?',
		variants: [
			'With webpack',
			'By nesting components',
			'With code splitting',
			'By putting them in a folder structure',
		],
		correct: 1,
	},
]
