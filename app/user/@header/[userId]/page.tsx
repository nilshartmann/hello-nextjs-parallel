type PageHeaderProps = {
	params: { userId: string}
}

export default function PageHeader({params}: PageHeaderProps) {
	return <h1>Header from /user/{params.userId}</h1>
}