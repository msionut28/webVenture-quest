import { signIn } from "next-auth/react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

const SocialLoginButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Button
        className="bg-lime-300"
        variant="outline"
        onClick={() => signIn("google")}
      >
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button
        className="bg-lime-300"
        variant="outline"
        onClick={() => signIn("github")}
      >
        <Icons.gitHub className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  );
};

export default SocialLoginButtons;
