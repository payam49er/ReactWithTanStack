/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FBccZ0IWtW0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Link } from '@tanstack/react-router';
import {buttonVariants} from "../ui/button.tsx";
import {cn} from "../../lib/utils.ts";

const  Header = () => {
    return (
        <header className="sticky bg-amber-500 top-0 h-30 w-full bg-background/95 backdrop-blur border-b border-border/40">
            <div className="mx-auto flex h-16 items-center  justify-items-center direction-reverse px-4">
                {/* Logo or Brand Name */}
                <div className="text-xl font-bold">My UI Playground</div>

                {/* Navigation Links */}
                <nav className="flex space-x-4">
                    <Link to="/" className={cn(buttonVariants({ variant: "ghost" }))}>
                        Home
                    </Link>
                    <Link to="/about" className={cn(buttonVariants({ variant: "ghost" }))}>
                        About
                    </Link>
                    <Link to="/services" className={cn(buttonVariants({ variant: "ghost" }))}>
                        Services
                    </Link>
                    <Link to="/contact" className={cn(buttonVariants({ variant: "ghost" }))}>
                        Contact
                    </Link>
                </nav>

                {/* Optional: Add a Mode Toggle or Command Menu */}
                <div className="flex items-center space-x-2">
                    {/* Example: ModeToggle Component */}
                    {/* Replace with actual ModeToggle if available */}
                    <button className="p-2 rounded-md bg-muted text-muted-foreground">
                        Toggle
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;