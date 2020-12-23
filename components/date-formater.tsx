import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const months: {[key: string]: string} = {
  '01': 'Ocak',
  '02': 'Şubat',
  '03': 'Mart',
  '04': 'Nisan',
  '05': 'Mayıs',
  '06': 'Haziran',
  '07': 'Temmuz',
  '08': 'Ağustos',
  '09': 'Eylül',
  '10': 'Ekim',
  '11': 'Kasım',
  '12': 'Aralık',
}

const DateFormater = ({ dateString }: Props) => {
  const dateParts = format(parseISO(dateString), 'd LL yyyy').split(' ')
  console.log(dateParts)
  const trDate = dateParts.map((part, i) => i === 1 ? months[part] : part).join(' ')
  return <time dateTime={dateString}><i>{trDate}</i></time>
}

export default DateFormater
