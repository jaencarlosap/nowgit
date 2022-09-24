export const Card = ({
	children,
	className = ''
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	return (
		<div className={`p-2 bg-white rounded-lg border border-gray-200 shadow-md ${className}`}>
			{children}
		</div>
	)
}