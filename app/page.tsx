import Timer from '@/components/timer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ModeToggle } from '@/components/mode-toggle'
import { Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import bmac from '@/public/bmac.png'

export default function Page() {
  return (
    <main className='flex flex-col min-h-screen items-center justify-center'>
      <div className='p-4 rounded-2xl shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]'>
        <Tabs defaultValue='pomodoro' className='w-full'>
          <TabsList className='grid grid-cols-3 w-full'>
            <TabsTrigger value='pomodoro' className='cursor-pointer'>
              Pomodoro
            </TabsTrigger>
            <TabsTrigger value='shortbreak' className='cursor-pointer'>
              Short Break
            </TabsTrigger>
            <TabsTrigger value='longbreak' className='cursor-pointer'>
              Long Break
            </TabsTrigger>
          </TabsList>

          <TabsContent value='pomodoro'>
            <Timer time={25 * 60} />
          </TabsContent>
          <TabsContent value='shortbreak'>
            <Timer time={5 * 60} />
          </TabsContent>
          <TabsContent value='longbreak'>
            <Timer time={20 * 60} />
          </TabsContent>
        </Tabs>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={'outline'}
            className='mt-4 cursor-pointer'
            title='settings'
          >
            <Settings />
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-md rounded-2xl p-6 shadow-xl'>
          <DialogHeader>
            <DialogTitle className='text-xl font-semibold'>
              Settings
            </DialogTitle>
            <DialogDescription className='text-sm text-muted-foreground'>
              Customize your Pomodoro experience.
            </DialogDescription>
          </DialogHeader>

          <div className='flex items-center justify-between gap-4 mt-4'>
            Theme
            <ModeToggle />
          </div>
        </DialogContent>
      </Dialog>

      <div className='mt-4'>
        <a
          href='https://buymeacoffee.com/shravzzv'
          target='_blank'
          rel='noopener noreferrer'
          className='group flex items-center gap-2 px-3 py-2 rounded-full text-white bg-yellow-500 shadow-md hover:shadow-lg'
        >
          <Image
            src={bmac}
            alt='Buy me a coffee'
            width={24}
            height={24}
            className='rounded-full'
          />
          <span className='text-sm font-medium'>Buy me a coffee</span>
        </a>
      </div>
    </main>
  )
}
