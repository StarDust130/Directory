import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Navbar = async () => {
  const session = await auth();

  console.log(session);

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            //! IF LOGGED IN ✅
            <>
              <Link href="/startup/create" className="flex items-center">
                {/* Visible on large screens */}
                <div className="hidden sm:flex items-center justify-center">
                  <Button>
                    Create{" "}
                    <span>
                      <BadgePlus className="size-10" />
                    </span>
                  </Button>
                </div>

                {/* Visible only on small screens */}
                <BadgePlus className="block sm:hidden size-6" />
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden text-sm font-medium">
                    Logout
                  </span>
                  <LogOut className="size-6 sm:hidden " />
                </button>
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            //! IF NOT LOGGED IN 🚯
            <form
              action={async () => {
                "use server";

                await signIn("github", { callbackUrl: "/" });
              }}
            >
              <Button type="submit">Login</Button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
