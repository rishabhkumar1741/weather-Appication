import Image from 'next/image'
import Head from 'next/head'
import SearchBox from './components/SearchBox'
export default function Home() {
  return (
  <div className='flex justify-center mt-32 h-screen'>
    <SearchBox/>
  </div>
  )
}
