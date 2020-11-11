import '../style/CustomButton.scss'

function CustomButton({ label, className, onClick }) {
  return (
    <button className={ `customButton ${className}` } onClick={ onClick }>
      { label }
    </button>
  )
}

export default CustomButton