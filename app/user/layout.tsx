import React from "react";

type UserLayoutProps = {
	children: React.ReactNode;
	header: React.ReactNode;
}

export default function UserLayout({children, header}: UserLayoutProps) {

	return <>
		<div>
			{header}
		</div>

		<div>
			{children}
		</div>
	</>

}