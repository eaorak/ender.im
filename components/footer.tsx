import Container from "./container"
import { EXAMPLE_PATH } from "../lib/constants"

const Footer = () => {
  return (
    <footer className='bg-accent-1 border-t border-accent-2'>
      <Container>
        <div className='py-28 flex flex-col lg:flex-row items-center'>
          <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
            Meftun.co
          </h3>
          <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
            <a href={`https://www.instagram.com/meftunco/`} className='mx-3 font-bold hover:underline'>
              Instagram
            </a>
            |
            <a
              href={`https://www.youtube.com/channel/UCq3wx4QmzkQP-hJRo5LOE6Q`}
              className='mx-3 font-bold hover:underline'
            >
              Youtube
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
