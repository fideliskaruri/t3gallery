import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
function TopNav() {
    return (
        <nav className="flex w-full p-4 items-center justify-between text-xl border-b font-semibold ">
            <div>Gallery</div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
<SignOutButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default TopNav;