import { CMS_NAME } from "../lib/constants"

const Meftun = () => {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
        <img src='/assets/images/m.png' alt='meftun' style={{ display: "inline-block" }} />.
      </h1>
      <h4 className='text-center md:text-left text-lg mt-5 md:pl-8'>
        Gözü başka bir şey görmeyen tutkulu âşık. Hayran olan.
      </h4>
    </section>
  )
}

export default Meftun
