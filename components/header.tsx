import Link from 'next/link'

const Header = () => {
  return (
    <h2 className='text-3xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 mb-20 mt-10'>
      <Link href='/'>
        <h1 className='font-logo text-8xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
          Ender.im
        </h1>
      </Link>
    </h2>
  )
}

export default Header
