import Select, { Props } from 'react-select'

export const SelectField = (selectProps: Props) => {
	const customStyles = {
		control: (provided: any) => ({
			...provided,
			border: 'none',
			boxShadow: 'none',
			'&:hover': {
				borderColor: 'red'
			}
		}),
		singleValue: (provided: any, state: any) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			// const transition = 'opacity 300ms';

			return { ...provided, opacity };
		}
	}

	return (
		<Select
			styles={customStyles}
			className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
			{...selectProps}
		/>
	)
}