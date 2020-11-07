import { FC } from 'react'
import { parseISO, format } from 'date-fns'

type DateProps = {
  dateString: string
}

const Date: FC<DateProps> = (props) => {
  const date = parseISO(props.dateString)
  return <time dateTime={props.dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date
