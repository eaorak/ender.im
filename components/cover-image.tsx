import cn from 'classnames'
import Link from 'next/link'
// import Image from "next/image";

type Props = {
  title: string
  src: string
  slug?: string
  flex?: boolean
  height?: number
  width?: number
}

const CoverImage = ({ title, src, slug, flex = false, height = 1240, width = 821 }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      height={flex ? '100%' : height}
      width={flex ? '100%' : width}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className='-mx-5 sm:mx-0'>
      {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
