import Image from "next/image";
import { Button } from "@/components/ui/button"; 
import { UserButton } from "@stackframe/stack"; 

export default function Home() {
  return (
    <div>
      <h2>Subscribe to Tubeguruji!</h2>

      <Button variant={'destructive'}>Subscribe</Button>
      <UserButton></UserButton>
    </div>
  );
}
