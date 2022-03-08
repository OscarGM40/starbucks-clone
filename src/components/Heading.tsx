import './heading.css';

type Props = {
  heading:string
}
export const Heading = ({heading}:Props) => {
  return (
    <div className='heading'>{heading}</div>
  )
}