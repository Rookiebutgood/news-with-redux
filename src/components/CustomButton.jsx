import '../style/CustomButton.scss'

export default function CustomButton({ label, className, onClick }) {
  return (
    <button className={ `customButton ${className}` } onClick={ onClick }>
      { label }
    </button>
  )
}