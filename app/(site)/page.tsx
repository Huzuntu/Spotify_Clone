import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="mb-2">
        <h1 className="text-white text-3xl font-semibold">Welcome Back</h1>
      </Header>
    </div>
  )
}
