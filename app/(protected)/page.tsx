import {UserButton} from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            <h1>Protected route</h1>
            <UserButton/>
        </div>
    );
}
