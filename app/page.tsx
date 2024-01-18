import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs/app-beta"; 
export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1>DashBoard</h1>
      <UserButton />
    </div>
   )
}
