import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <h2>HealthTrack</h2>
            <Link href="/goals">Goals</Link>
            <Link href="/workouts">Workouts</Link>
            {/* <Link href="/progress">Progress</Link> */}
      </nav>
    );
}