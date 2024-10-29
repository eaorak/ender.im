const Intro = () => {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h1 className='font-logo text-8xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
        {/* <img
          src='/assets/images/m.png'
          width={342}
          height={171}
          alt='ender.im'
          style={{ display: 'inline-block' }}
        />
        . */}
        Ender.im
      </h1>
      <h4 className='text-center md:text-left text-lg mt-5 md:pl-8'>Eve dönüş.</h4>
    </section>
  )
}

export default Intro
