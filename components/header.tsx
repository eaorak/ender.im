import Link from 'next/link'

const Header = () => {
  return (
    <h2 className='text-3xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 mb-20 mt-10'>
      <Link href='/'>
        <img
          src='/assets/images/m.png'
          width={176}
          height={85}
          alt='ender.im'
          style={{ display: 'inline-block', cursor: 'pointer' }}
        />
      </Link>
      .{' '}
    </h2>
  )
}

export default Header
