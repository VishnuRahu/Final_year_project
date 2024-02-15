import {Button} from '@/components/ui/button'
import {LoginButton} from '@/components/auth/login-button'
import { RegisterButton } from '@/components/auth/register-button';

import {motion} from "framer-motion"

export default async function Home() {  
  return (
    
    <main className="flex h-full flexcol items-center justify-center
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className='space-y-6 text-center' >
       <h1 className='text-6xl font-semibold text-white drop-shadow-md'>
         Academic Workflow Management
       </h1>
       <p className='text-white text-lg'>
          An Efficient way to communicate
       </p>
       <div>
        <LoginButton>
         <Button variant='secondary' size="lg">
         Sign in
         </Button>
         </LoginButton>
         <RegisterButton>
         <Button className="ml-5" variant='secondary' size="lg">
         Sign up
         </Button>
         </RegisterButton>
       </div>
    </div>
    
      
    </main> 
  );
}
