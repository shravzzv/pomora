import Timer from '@/components/timer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Page() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100'>
      <div className='w-[400px] p-6 rounded-2xl shadow-lg bg-white'>
        <Tabs defaultValue='pomodoro' className='w-full'>
          <TabsList className='grid grid-cols-3 w-full mb-6'>
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
    </main>
  )
}
