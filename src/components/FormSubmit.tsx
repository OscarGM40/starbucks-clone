import './formSubmit.css'


type Props = {
  name: string
  type:"button" | "submit" | "reset" | undefined
}

export const FormSubmit = ({name,type}:Props) => {
  return (
    <button className='formSubmit' type={type}>
    {name}
  </button>
  )
}