export interface SelectFieldProps extends React.AllHTMLAttributes<HTMLSelectElement> {
	label: string;
	options: { value: string; label: string; }[]
}

export const SelectField = ({
	label,
	options,
	...selectProps
}: SelectFieldProps) => {
	return (
		<>
			<label
				htmlFor={selectProps?.name || selectProps?.id}
				className="sr-only"
			>
				{label}
			</label>
			<select
				className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
				{...selectProps}
				defaultValue='@'
			>
				<option value='@'>{label}</option>
				{options && options.map((item, index) =>
					<option key={index} value={item.value}>{item.label}</option>
				)}
			</select>
		</>
	)
}