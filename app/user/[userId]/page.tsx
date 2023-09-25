import Link from "next/link";

type UserDetailPageProps = {
	params: { userId: string }
}
export default function UserDetailPage({params}: UserDetailPageProps) {

	const uix = +params.userId;

	return <div>
		<h1>User Details for User with id {params.userId}</h1>
		<ul>
			{uix > 0 && <li><Link href={`/user/${uix - 1}`} prefetch={false}>User {uix - 1}</Link></li>}
			{uix < 10 && <li><Link href={`/user/${uix + 1}`} prefetch={false}>User {uix + 1}</Link></li>}
		</ul>
	</div>
}

export async function generateStaticParams() {
	return [{userId: "1"}, {userId: "2"}, {userId: "3"}, {userId: "4"}]
}