import Author from '../types/author'
import Avatar from './avatar'
import DateFormater from './date-formater'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
  author: Author
  date: string
}

const PostBody = ({ content, author, date }: Props) => {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
      <div className='hidden md:block md:mb-4 mt-20'>
        <Avatar name={author.name} picture={`../${author.picture}`} />
      </div>
      <div className='max-w-2xl mx-auto'>
        <div className='mb-6 text-lg'>
          <DateFormater dateString={date} />
        </div>
      </div>
    </div>
  )
}

export default PostBody
