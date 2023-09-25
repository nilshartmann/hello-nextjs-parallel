import Link from "next/link";

export default function UserPage() {
  return <div><h1>User Page</h1>

    <ul>
      <li><Link href={"/user/1"} prefetch={false}>Goto User 1</Link></li>
    </ul>

  </div>
}